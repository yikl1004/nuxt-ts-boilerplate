import { Vue, Component, Prop, Emit, Watch } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue';



@Component({
    components: {  }
})
export default class CheckBoxGroup extends Vue {

    @Prop({ type: String, required: true })
    readonly id: string

    @Prop({ type: String })
    readonly label: string

    @Prop({ type: Array, required: true, default: () => [] })
    readonly list: string[]


    private checkList: string[] = []


    @Watch('checkList')
    changeText() {
        this.$emit('input', this.checkList)
    }


    onChange(event: Event) {
        let value: string = (event.target as HTMLInputElement).value

        if ( this.checkList.includes(value) ) {
            this.checkList = this.checkList.filter(
                (item: string) => item !== value
            )
        } else {
            this.checkList.push(value)
        }
    }


    render(h: CreateElement): VNode {

        return (
            <fieldset class={`checkbox-group-${this.label}`}>
                { this.list.length ? this.list.map((item: string, index: number) => (
                    <div class="check" key={`checkbox-group-${index}`}>
                        <label for={`check-${this.id}-${index}`}>{ item }</label>
                        <input  
                            type="checkbox"
                            value={ item }
                            id={`check-${this.id}-${index}`}
                            checked={ this.checkList.includes(item) }
                            onChange={ event => this.onChange(event) }
                        />
                    </div>
                )) : null}
            </fieldset>
        )
    }

}