import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode, VueConstructor } from 'vue'
import styled from 'vue-styled-components'


const Map: VueConstructor = styled.div`
    height: 500px;
`

@Component({
    components: { Map }
})
export default class NaverMap extends Vue {
    $refs!: {
        map: Vue
    }

    createMap() {
        if ( window['naver'] ) {
            const naver = window['naver'];
            const position = new naver.maps.LatLng(37.3595704, 127.105399)

            let mapOptions = {
                center: position,
                zoom: 10
            };

            const map = new naver.maps.Map(this.$refs.map.$el, mapOptions);
            
            let marker = new naver.maps.Marker({
                position,
                map,
                icon: {
                    url: './images/map/map-marker-small-hi.png',
                    size: new naver.maps.Size(100, 83)
                }
            })
        }
    }

    mounted() {
        this.createMap()
    }

    render(h: CreateElement): VNode {
        return (
            <Map ref="map"></Map>
        )
    }
}