import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue'
import { SearchAreaStyled, Btn, BtnGroup, Section } from '@/components/common/adminLTE/styled'

import TextField from '@/components/common/form/textField'
import SelectBox from '@/components/common/form/selectBox'


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