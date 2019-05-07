import Vue from 'vue'
import isString from 'lodash/isString'
import isPlainObject from 'lodash/isPlainObject'


Vue.use({
    install: function(VueInstance, options) {
        
        VueInstance.prototype.$modal = (function(){
            const that = this;
            let savedName = ''
            let rootInstance: any = null

            return {
                async show(root, component, props, options) {
                    rootInstance = root
                    const Comp = Vue.extend(component)
                    const instance = new Comp({
                        propsData: props,
                        store: rootInstance.$store
                    })
                    instance.$mount()

                    savedName = options.name

                    let container = document.createElement('div')
                        container.id = 'modals-container'
                    
                    let overlay = document.createElement('div')
                        overlay.classList.add('v--modal-overlay')
                        overlay.setAttribute('data-modal', options.name)

                    overlay.appendChild( instance.$el )
                    container.appendChild( overlay )

                    rootInstance.$el.appendChild( container )
                },

                hide(name) {
                    console.log(name, savedName)
                    if ( name === savedName ) {
                        let container = document.querySelector('#modals-container')
                        rootInstance.$el.removeChild( container )
                    }
                }
            }
        })()

        VueInstance.prototype.$showModal = function(component, propsOrName) {
            // props 체크 'object' or 'string' 만 가능
            let props = isPlainObject(propsOrName) && propsOrName;
                props = ( !props && isString(propsOrName) ) ?
                { name: propsOrName } : props;
            this.$modal.show(
                this.$root,
                component,
                props,
                { name: propsOrName.name, height: '100%', width: '100%' }
            );
            
            // role="dialog" 를 넣고, 모달 제목을 알리기 위해 aria-labelledby="myModalLabel" 속성을, 모달의 DOM 요소를 건너뛰는 것을 보조 공학에게 전달하기 위해 aria-hidden="true" 을 넣으세요.
            // 추가적으로, 당신은 .modal 의 aria-describedby 에 모달 다이얼로그의 설명을 넣어도 됩니다.
            // setTimeout(_ => {
            //     const modalContainerDOM = (document.querySelector('#modals-container') as HTMLElement).children[0];
            //     modalContainerDOM.setAttribute('role', 'dialog');
            //     modalContainerDOM.setAttribute('aria-labelledby', 'modalLabel');
            //     modalContainerDOM.setAttribute('aria-hidden', 'true');
            // }, 10);

        }
    }
})