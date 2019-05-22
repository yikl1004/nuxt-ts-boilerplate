import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue';
import styled from 'vue-styled-components'

import SearchArea from '@/components/banners/searchArea'


const Contents = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 30px;
    background-color: #ecf0f5;
`

@Component({
    components: { SearchArea }
})
export default class BannersPage extends Vue {

    render(h: CreateElement): VNode {
        return (
            <Contents class="contents">
                <SearchArea/>
            </Contents>
        )
    }

}