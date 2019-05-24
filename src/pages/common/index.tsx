import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue';
import styled from 'vue-styled-components'

import TextField from '@/components/common/form/textField'
import CheckBox from '@/components/common/form/CheckBox'
import CheckBoxGroup from '@/components/common/form/CheckBoxGroup'
import SelectBox from '@/components/common/form/selectBox'
import RadioGroup from '@/components/common/form/radioGroup'
import TextGround from '@/components/common/form/textGround'


const Result = styled.p`
    display: block;
    margin-top: 20px;

    &:before {
        content: 'RESULT => '
    }
`
const Title = styled.h2`
    margin-bottom: 30px;
`

@Component({
    components: { TextField, CheckBox, CheckBoxGroup, SelectBox }
})
export default class Testbed extends Vue {

    private inputText: string = ''
    private inputChecked: boolean = false
    private checkedList: string[] = []
    private selectedItem: string = ''
    private selectedRadio: string = ''

    
    private checkList = ['apple', 'banana', 'mango', 'pineapple', 'strawberry']
    private selectList: { name: string, value: string | number }[] = [
        { name: '사과', value: 'apple' },
        { name: '바나나', value: 'banana' },
        { name: '망고', value: 'mango' },
        { name: '파인애플', value: 'pineapple' },
        { name: '딸기', value: 'strawberry' },
    ]
    private radioList: { name: string, value: string | number }[] = [
        { name: '사과', value: 'apple' },
        { name: '바나나', value: 'banana' },
        { name: '망고', value: 'mango' },
        { name: '파인애플', value: 'pineapple' },
        { name: '딸기', value: 'strawberry' },
    ]


    render(h: CreateElement): VNode {
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <h1>
                        Common
                        <small>공통 컴포넌트 (form)</small>
                    </h1>
                </section>
                <section class="content container-fluid">
                    {/* contents.... */}
                    <Title>input[type=text]</Title>
                    <TextField
                        id="myId"
                        label="sample"
                        v-model={ this.inputText }
                    />
                    <Result>inputText: { `'${this.inputText}'` }</Result>
                    <hr/>

                    <Title>CheckBox single</Title>
                    <CheckBox
                        id="myCheckbox"
                        label="sampleCheckbox"
                        v-model={ this.inputChecked }
                    />
                    <Result>inputChecked: { `${this.inputChecked}` }</Result>
                    <hr/>

                    <Title>CheckBox multiple</Title>
                    <CheckBoxGroup
                        id="group"
                        label="mygroup"
                        list={ this.checkList }
                        v-model={ this.checkedList }
                    />
                    <Result>checkedList: { `[${this.checkedList}]` }</Result>
                    <hr/>

                    <Title>SelectBox</Title>
                    <SelectBox
                        id="myselect"
                        label="과일"
                        optionTitle="선택해 주세요"
                        list={ this.selectList }
                        v-model={ this.selectedItem }
                    />
                    <Result>selectedItem: {`'${this.selectedItem}`}</Result>
                    <hr/>

                    <Title>Radio group</Title>
                    <RadioGroup
                        id="myradio"
                        list={ this.radioList }
                        v-model={ this.selectedRadio }
                    />
                    <Result>selectedRadio: {`'${this.selectedRadio}'`}</Result>

                    <Title>TextArea</Title>
                    <TextGround
                        id="myTextarea"
                        label="내용"
                        placeholder="내용을 입력해주세요."
                        maxLength={50}
                    />
                    {/* <Result></Result> */}
                </section>
            </div>
        )
    }

}