import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue';
import { createDecorator } from 'vue-class-component';


const Functional = (options: boolean) => {
    return createDecorator(function (componentOptions, key) {
        if (!Array.isArray(componentOptions[key])) {
            componentOptions[key] = options
        }
    })
} 

@Component({
    components: {}
})
export default class Fragment extends Vue {

    @Functional(true) private functional

    render(h: CreateElement, context: any): VNode {
        console.log(context)
        return context.children
    }

}