// default
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import { VNode, CreateElement } from 'vue';
import { Layout } from '@/components/common/adminLTE/styled'

// components
import Header from '@/components/common/header'
import Lnb from '@/components/common/lnb'
import Footer from '@/components/common/footer'




@Component({
    components: { Header, Lnb, Footer }
})
export default class DefaultLayout extends Vue {

    scroll(event: Event): void {
        console.log('지금 스크롤이 되고 있나요?')
    }

    render(h: CreateElement): VNode {
        return (
            <Layout class="hold-transition skin-blue sidebar-mini" nativeOnScroll={ this.scroll }>
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