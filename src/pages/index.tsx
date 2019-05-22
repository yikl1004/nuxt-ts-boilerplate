import { Component, Vue } from "nuxt-property-decorator"
import { CreateElement, VNode } from 'vue'
import Carousel from '@/components/common/carousel';


@Component({
    components: { Carousel }
})
export default class Index extends Vue {
    render(h: CreateElement): VNode {
        return (
            <div class="wrap">
                <h1>Hello, WORLD!!</h1>
                <p>This is Caoursel</p>

                <Carousel/>
            </div>
        )
    }
}