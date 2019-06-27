// default
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import { VNode, CreateElement } from 'vue';


@Component({
})
export default class DefaultLayout extends Vue {

    render(h: CreateElement): VNode {
        return (
            <nuxt/>
        )
    }
}