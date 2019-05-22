import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue'

import styled from 'vue-styled-components'


const Btn = styled('button', { theme: String })`
    border: 2px solid ${ props => props.theme === 'black' ? '#fff' : '#000'  };
    background-color: ${ props => props.theme === 'black' ? '#000' : '#fff'  };
    padding: 5px 10px;
    color: ${ props => props.theme === 'black' ? '#fff' : '#000'  };
`

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 0 30px;
    background-color: #3c8dbc;
    color: #fff;

    .menu {
        display: inherit;

        ul {
            display: inherit;

            a {
                &:link, &:visited, &:active {
                    color: #fff;
                }
                &:hover {
                    color: skyblue;
                }
            }

            li {
                + li {
                   a:before {
                       content: '|';
                       margin: 0 10px;
                   } 
                }
            }
        }
    }
`


@Component({
    components: {}
})
export default class Header extends Vue {

    private menu: { link: string, name: string }[] = [
        { link: '/member', name: '회원관리' },
        { link: '/product', name: '상품관리' },
        { link: '/board', name: '게시판관리' },
        { link: '/banners', name: '전시관리' },
        { link: '/cs', name: '문의/상담' },
    ]

    logout() {
        if ( confirm('로그아웃 하시겠습니까?') ) {
            console.log('logout...')
        }
    }

    render(h: CreateElement): VNode {
        return (
            <HeaderStyled>
                <div class="userInfo">
                    <span class="name">홍길동</span>님 안녕하세요!
                    &nbsp;&nbsp;
                    <Btn theme="black" type="button" onClick={ this.logout }>로그아웃</Btn>
                </div>
                { !!this.menu.length &&
                    <div class="menu">
                        <ul>
                            { this.menu.map((item, index: number) => (
                                <li>
                                    <nuxt-link to={ item.link }>{ item.name }</nuxt-link>
                                </li>
                            )) }
                        </ul>
                    </div>
                }
            </HeaderStyled>
        )
    }

}