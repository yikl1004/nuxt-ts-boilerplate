import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue';


interface SelectItem {
    name: string
    value: string | number
}

@Component({
    components: {}
})
export default class SelectBox extends Vue {

    @Prop({ type: String, required: true, default: '' })
    readonly id: string

    @Prop({ type: String, required: false, default: '' })
    readonly label: string

    @Prop({ type: String, required: false, default: '' })
    readonly optionTitle: string

    @Prop({ type: Number, required: false, default: 0 })
    readonly selectedIndex: number

    @Prop({ type: Array, required: true, default: () => [] })
    readonly list: SelectItem[]


    private currentValue: string = ''


    onChange(event: Event) {
        let value = (event.target as HTMLInputElement).value
        
        this.currentValue = value
        this.$emit('input', value)
    }


    render(h: CreateElement): VNode {
        return (
            <div class="selectbox">
                { this.label ?
                    <label for={ this.id }>{ this.label }</label>
                : null }
                { this.list.length ? 
                    <select id={ this.id } name={`name_${ this.id }`} onChange={ (event: Event) => this.onChange(event) }>
                        { this.optionTitle &&
                            <option selected={true} disabled value="">{ this.optionTitle }</option>
                        }
                        { this.list.map((item: SelectItem, index: number) => (
                            <option
                                selected={ !this.optionTitle && index === this.selectedIndex }
                                value={ item.value }
                            >
                                { item.name }
                            </option>
                        )) }
                    </select>
                : null }
            </div>
        )
    }

}