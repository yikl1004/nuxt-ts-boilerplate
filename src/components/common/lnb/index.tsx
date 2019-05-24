import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue'
import styled from 'vue-styled-components'
import AnchorButton from '@/components/common/anchorButton'


const LnbStyled = styled.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    background-color: #222d32;

    .title {
        color: #4b646f;
        background: #1a2226;
        padding: 10px 25px 10px 15px;
        font-size: 12px;
        
        * {
            font-size: 12px;
        }
    }

    .treeview {
        > li {
            position: relative;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;

            > a {
                border-left: 3px solid transparent;
                color: #b8c7ce;
                padding: 12px 5px 12px 15px;
                display: block;
            }

            &.active{
                > a {
                    border-left-color: #3c8dbc;
                    color: #fff;
                    background: #1e282c;
                }
                .treeview-menu {
                    display: block;
                }
            }
            
            &:hover {
                > a {
                    color: #fff;
                    background: #1e282c;
                }
            }

            .treeview-menu {
                margin: 0 1px;
                background: #2c3b41;
                display: none;
                list-style: none;
                padding: 0;
                padding-left: 5px;

                > li {
                    > a {
                        color: #8aa4af;
                        padding: 5px 5px 5px 15px;
                        display: block;
                        font-size: 14px;
                    }

                    &.active {
                        > a {
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
`

@Component({
    components: { LnbStyled }
})
export default class Lnb extends Vue {

    private menu: any = [
        {
            name: '배너관리',
            active: false,
            children: [
                { name: 'Mobile 메인', link: '/mobilemain' },
                { name: 'Mobile 서브', link: '/mobilesub' },
                { name: 'PC 메인', link: '/pcmain' }
            ]
        },
        {
            name: '팝업관리',
            active: false,
            children: [
                { name: '팝업관리', link: '/popup' }
            ]
        },
        {
            name: '추천검색어관리',
            active: false,
            children: [
                { name: '통합검색', link: '/intergratedsearch' },
                { name: '커뮤니티 검색', link: '/communitysearch' }
            ]
        }
    ]



    activeMenu(index) {
        this.menu[index].active = !this.menu[index].active
    }


    render(h: CreateElement): VNode {
        // return (
        //     <LnbStyled class="lnb">
        //         <header class="title">전시관리</header>
        //         <ul class="treeview">
        //             { !!this.menu.length && this.menu.map((menuItem, index1: number) => (
        //                 <li class={{ active: menuItem.active }}>
        //                     <AnchorButton onClicked={ () => this.activeMenu(index1) }>{ menuItem.name }</AnchorButton>
        //                     <ul class="treeview-menu">
        //                         { !!menuItem.children.length && menuItem.children.map((children, index2) => (
        //                             <li class="active">
        //                                 <nuxt-link to={ children.link }>{ children.name }</nuxt-link>
        //                             </li>
        //                         ))}
        //                     </ul>
        //                 </li>
        //             ))}
        //         </ul>
        //     </LnbStyled>
        // )

        return (
            <aside class="main-sidebar">
                <section class="sidebar">
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"/>
                        </div>
                        <div class="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <form action="#" method="get" class="sidebar-form">
                        <div class="input-group">
                            <input type="text" name="q" class="form-control" placeholder="Search..."/>
                            <span class="input-group-btn">
                                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i
                                        class="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul class="sidebar-menu" data-widget="tree">
                        <li class="header">HEADER</li>
                        <li class="active"><a href="#"><i class="fa fa-link"></i> <span>Link</span></a></li>
                        <li><a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a></li>
                        <li class="treeview">
                            <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="#">Link in level 2</a></li>
                                <li><a href="#">Link in level 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }

}