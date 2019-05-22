import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue'
import styled from 'vue-styled-components'

import TextField from '@/components/common/form/textField'
import SelectBox from '@/components/common/form/selectBox'


const BtnGroup = styled('div', { marginTop: String })`
    display: block; 
    margin-top: ${ props => props.marginTop ? props.marginTop : '0' };
    text-align: center;

    button {
        margin: 0 10px;
    }
`

const Btn = styled.button`
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-image: none;
    border-radius: 3px;
    box-shadow: none;
    border: 1px solid transparent;

    &.btn-lg {
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.3333333;
        border-radius: 6px;
    }

    &.primary {
        color: #fff;
        background-color: #3c8dbc;
        border-color: #367fa9;
    }
    &.success {
        color: #fff;
        background-color: #00a65a;
        border-color: #008d4c;
    }
`

const Section = styled.section`
    margin-bottom: 10px;
`

const SearchAreaStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 30px;
`

@Component({
    components: { SearchAreaStyled, SelectBox }
})
export default class SearchArea extends Vue {

    private dateStart = '2019-05-01'
    private dateEnd = '2019-05-29'
    

    render(h: CreateElement): VNode {
        return (
            <SearchAreaStyled>
                <Section>
                    <TextField id="bannername" label="배너명"/>
                </Section>
                <Section>
                    <label>기간 검색</label>
                    <el-date-picker
                        v-model={ this.dateStart }
                        type="date"
                        clearable={ false }
                        name="date_start"
                        placeholder="날짜 선택"
                    />
                    <el-date-picker
                        v-model={ this.dateEnd }
                        type="date"
                        clearable={ false }
                        name="date_end"
                        placeholder="날짜 선택"
                    />
                </Section>
                <SelectBox
                    id="isview"
                    label="게시여부"
                    selectedIndex={ 0 }
                    list={[ { name: '전체', value: 'all' } ]}
                />
                <BtnGroup class="btn-group">
                    <Btn class="primary btn-lg">초기화</Btn>
                    <Btn class="success btn-lg">검색</Btn>
                </BtnGroup>
            </SearchAreaStyled>
        )
    }

}