import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue';

import Fragment from '@/components/common/fragment'

@Component({
    components: { Fragment }
})
export default class Testbed extends Vue {
    layout() {
        return 'none'
    }
    render(h: CreateElement): VNode {
        return (
            <Fragment>
                <h1>sdkjfhksdjhsdkfj</h1>
                <p>dlskfjsldkfjsdlkfj</p>
            </Fragment>
        )
    }
}