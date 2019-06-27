import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue';


@Component({
    components: {  }
})
export default class Contents extends Vue {

    mounted() {
        console.log( 'Contents', this.$slots )
    }
    
    render(h: CreateElement): VNode {
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    { this.$slots.title || <h1>This is title</h1> }
                </section>
                <section class="content container-fluid">
                    { this.$slots.content || 'This is content...' }
                    { this.$slots.default }
                </section>
            </div>
        )
    }

}