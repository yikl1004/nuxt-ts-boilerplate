// default
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import { VNode, CreateElement } from 'vue';
import styled from 'vue-styled-components'

// components
import Header from '@/components/common/header'
import Lnb from '@/components/common/lnb'


const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`


@Component({
    components: { }
})
export default class DefaultLayout extends Vue {

    render(h: CreateElement): VNode {
        return (
            <div class="wrap">
                <Header/>
                <Container class="container" id="container">
                    <Lnb/>
                    <nuxt/>
                </Container>
            </div>
        )
    }
}