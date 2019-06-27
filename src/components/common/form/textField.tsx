import { Vue, Component, Prop, Emit, Watch, namespace } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue';
import styled from 'vue-styled-components'


const TextFieldStyled = styled.div`
    label {
        display: inline-block;
        margin-right: 10px;
    }
`


@Component({
    components: {}
})
export default class TextField extends Vue {

    @Prop({ type: String, required: true })
    readonly id: string

    @Prop({ type: String })
    readonly label: string


    private text: string = ''


    @Watch('text') changeText() {
        this.input(this.text)
    }

    @Emit('input') input(text) {
        return text
    }


    render(h: CreateElement): VNode {

        const { id, label } = this

        return (
            <TextFieldStyled class="textfield">
                <label for={ id }>{ label }</label>
                <input type="text" id={ id } v-model={ this.text }/>
            </TextFieldStyled>
        )
    }

}