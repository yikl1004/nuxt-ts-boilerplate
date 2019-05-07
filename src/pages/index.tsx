import { Component, Vue } from "nuxt-property-decorator"
import { CreateElement, VNode } from 'vue'


@Component({
    components: {}
})
export default class Index extends Vue {
    render(h: CreateElement): VNode {
        return (
            <h1>Hello, WORLD!!</h1>
        )
    }
}