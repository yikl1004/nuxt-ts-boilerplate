import { Component, Vue } from "nuxt-property-decorator"
import { CreateElement, VNode } from 'vue'
import Carousel from '@/components/common/carousel';
import Contents from '@/components/common/contents'
import Fragment from '@/components/common/fragment'
import AnchorButton from '@/components/common/anchorButton'


@Component({
    components: { Carousel, Fragment, AnchorButton }
})
export default class Index extends Vue {

    private list: any[] = [
        'one', 'two', 'three', 'four', 'five',
        // 'six', 'seven', 'eight', 'nine', 'ten'
    ]

    render(h: CreateElement): VNode {
        return (
            <Contents>
                <h1 slot="myname">this is title</h1>
                <p slot="content">this is content...</p>
                { this.list.map((item, index) => (
                    <Fragment>
                        <AnchorButton>링크도 되냐?</AnchorButton>
                        <p>item: { item }</p>
                        <p>index: { index }</p>
                    </Fragment>
                ))}
            </Contents>
        )
    }
}