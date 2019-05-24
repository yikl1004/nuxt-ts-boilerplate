import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue'


@Component({
    components: {  }
})
export default class TextGround extends Vue {

    @Prop({ type: String, required: true})
    readonly id: string

    @Prop({ type: String, required: true})
    readonly label: string

    @Prop({ type: String, required: false, default: '' })
    readonly placeholder: string

    @Prop({ type: Number, required: true, default: 300 })
    readonly maxLength: number


    private text: string = ''


    onKeydown(e: KeyboardEvent) {
        let value = (e.target as HTMLInputElement).value

        if ( value.length >= this.maxLength && e.key.length === 1 ) {
            e.preventDefault()
            alert(`${ this.maxLength }자 이상 입력할 수 없습니다.`)
        }
    }   

    render(h: CreateElement): VNode {
        return (
            <div class="textarea">
                <label for={ this.id }>{ this.label }</label>
                <textarea
                    id={ this.id }
                    cols="30"
                    rows="10"
                    placeholder={ this.placeholder }
                    v-model={ this.text }
                    maxLength={ this.maxLength }
                    onKeydown={ this.onKeydown }
                />
                <div className="counting">{ this.text.length }/{ this.maxLength }</div>
            </div>
        )
    }

}