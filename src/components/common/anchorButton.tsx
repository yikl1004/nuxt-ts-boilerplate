import { Vue, Component, Emit } from 'nuxt-property-decorator'
import { VNode, CreateElement } from 'vue';



@Component({
    components: {}
})
export default class AnchorButton extends Vue {

    @Emit('clicked')
    onClicked(event: Event) {
        event.preventDefault();
    }
    
    render(h: CreateElement): VNode {

        return (
            <a href="javascript: ;" onClick={ (event: Event ) => this.onClicked(event) }>
                { this.$slots.default }
            </a>
        )

    }

}