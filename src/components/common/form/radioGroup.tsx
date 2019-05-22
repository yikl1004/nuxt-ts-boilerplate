import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue';

type RadioItem = { name: string, value: string | number };

@Component({
    components: {}
})
export default class RadioGroup extends Vue {

    @Prop({ type: Array, required: true, default: () => [] })
    readonly list: RadioItem[]

    @Prop({ type: String, required: true, default :'' })
    readonly id: string


    private currentValue: string = ''



    onChange(event: Event) {
        let value = (event.target as HTMLInputElement).value

        this.currentValue = value
        this.$emit('input', this.currentValue)
    }


    render(h: CreateElement): VNode {
        return (
            <fieldset class="radio-group">
                { this.list.length ? this.list.map((item: RadioItem, index: number) => (
                    <div key={`radio-item-${index}`}>
                        <label for={`${this.id}_${index}`}>{ item.name }</label>
                        <input
                            type="radio"
                            id={ `${this.id}_${index}` }
                            value={ item.value }
                            checked={ item.value === this.currentValue }
                            onChange={ (event: Event) => this.onChange(event) }
                        />
                    </div>
                )) : null}
            </fieldset>
        )
    }

}