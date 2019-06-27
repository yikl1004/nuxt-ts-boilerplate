import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue'


@Component({
    components: {}
})
export default class MapLayout extends Vue {

    private naver: { [key: string]: string } = {
        appName: 'yikl-test',
        clientId: '7opga88tl1',
        secret:  'SUWY3Cb6liHOKKmtHrUhSWwCVkUemqYiNKy2Aoqg'
    }

    head() {
        let src: any = undefined
        switch( (this.$route.query['type'] as string ) ) {
            case 'naver': 
                src = {
                    script: [
                        { src: `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${this.naver.clientId}` }
                    ]
                }

        }

        return src
    }

    render(h: CreateElement): VNode {
        return (
            <nuxt/>
        )
    }

}