// default
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import { VNode, CreateElement } from 'vue';
import styled from 'vue-styled-components'

// components
import Header from '@/components/common/header'
import Lnb from '@/components/common/lnb'
import Footer from '@/components/common/footer'


const Layout = styled.div`
    height: auto;
    min-height: 100%;
`


@Component({
    components: { Header, Lnb, Footer }
})
export default class DefaultLayout extends Vue {

    render(h: CreateElement): VNode {
        return (
            <Layout class="hold-transition skin-blue sidebar-mini">
                <div class="wrapper">
                    <Header/>
                    <Lnb/>
                    <nuxt/>
                    <Footer/>
                    {/* <Container class="container" id="container">
                        <nuxt/>
                    </Container> */}
                </div>
            </Layout>
        )
    }
}