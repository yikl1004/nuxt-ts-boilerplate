// default
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import { VNode, CreateElement } from 'vue';


@Component({
    components: { }
})
export default class DefaultLayout extends Vue {

    render(h: CreateElement): VNode {
        return (
            <div class="wrap">
                <div class="container" id="container">
                    <nuxt/>
                </div>
            </div>
        )
    }
}