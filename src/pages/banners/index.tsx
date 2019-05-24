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
        // return (
        //     <Contents class="contents">
        //         <SearchArea/>
        //     </Contents>
        // )
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <h1>
                        Page Header
                        <small>Optional description</small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
                        <li class="active">Here</li>
                    </ol>
                </section>
                <section class="content container-fluid">
                    {/* contents.... */}
                </section>
            </div>
        )
    }

}