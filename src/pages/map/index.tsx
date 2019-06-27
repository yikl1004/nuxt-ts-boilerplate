import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue'

// component
import NaverMap from '@/components/maps/naver-map'


@Component({
    components: { NaverMap }
})
export default class Maps extends Vue {

    layout() {
        return 'map'
    }

    render(h: CreateElement): VNode {
        let type = this.$route.query['type']
        return (
            <div id="mapContainer">
                { type === 'naver' && <NaverMap/> }
            </div>
        )
    }

}