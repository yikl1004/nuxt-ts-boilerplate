import { Vue, Component, Prop, Emit, Watch } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue';


@Component({
    components: {}
})
export default class CheckBox extends Vue {

    @Prop({ type: String, required: true })
    readonly id: string

    @Prop({ type: String })
    readonly label: string


    private checked: boolean = false

    @Watch('checked') changeText() {
        this.$emit('input', this.checked)
    }


    render(h: CreateElement): VNode {

        const { id, label } = this

        return (
            <div class="textfield">
                <label for={ id }>{ label }</label>
                <input type="checkbox" id={ id } v-model={ this.checked }/>
            </div>
        )
    }

}