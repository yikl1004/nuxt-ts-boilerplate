import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue'
import styled from 'vue-styled-components'

import AnchorButton from '@/components/common/anchorButton'


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
    components: { AnchorButton }
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
        // return (
        //     <HeaderStyled>
        //         <div class="userInfo">
        //             <span class="name">홍길동</span>님 안녕하세요!
        //             &nbsp;&nbsp;
        //             <Btn theme="black" type="button" onClick={ this.logout }>로그아웃</Btn>
        //         </div>
        //         { !!this.menu.length &&
        //             <div class="menu">
        //                 <ul>
        //                     { this.menu.map((item, index: number) => (
        //                         <li>
        //                             <nuxt-link to={ item.link }>{ item.name }</nuxt-link>
        //                         </li>
        //                     )) }
        //                 </ul>
        //             </div>
        //         }
        //     </HeaderStyled>
        // )
        return (
            <header class="main-header">
                <nuxt-link to="/" class="logo">
                    <span class="logo-mini"><b>A</b>LT</span>
                    <span class="logo-lg"><b>CMS</b> by AdminLTE</span>
                </nuxt-link>
                <nav class="navbar navbar-static-top" role="navigation">
                    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span class="sr-only">Toggle navigation</span>
                    </a>
                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">
                            <li class="dropdown messages-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-envelope-o"></i>
                                    <span class="label label-success">4</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="header">You have 4 messages</li>
                                    <li>
                                        <ul class="menu">
                                            <li>
                                                <a href="#">
                                                    <div class="pull-left">
                                                        <img src="dist/img/user2-160x160.jpg" class="img-circle"
                                                            alt="User Image"/>
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small><i class="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="footer"><a href="#">See All Messages</a></li>
                                </ul>
                            </li>
                            <li class="dropdown notifications-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-bell-o"></i>
                                    <span class="label label-warning">10</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="header">You have 10 notifications</li>
                                    <li>
                                        <ul class="menu">
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-users text-aqua"></i> 5 new members joined today
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="footer"><a href="#">View all</a></li>
                                </ul>
                            </li>
                            <li class="dropdown tasks-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-flag-o"></i>
                                    <span class="label label-danger">9</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="header">You have 9 tasks</li>
                                    <li>
                                        <ul class="menu">
                                            <li>
                                                <a href="#">
                                                    <h3>
                                                        Design some buttons
                                                        <small class="pull-right">20%</small>
                                                    </h3>
                                                    <div class="progress xs">
                                                        <div class="progress-bar progress-bar-aqua" style="width: 20%"
                                                            role="progressbar" aria-valuenow="20" aria-valuemin="0"
                                                            aria-valuemax="100">
                                                            <span class="sr-only">20% Complete</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="footer">
                                        <a href="#">View all tasks</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown user user-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image"/>
                                    <span class="hidden-xs">Alexander Pierce</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="user-header">
                                        <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"/>
                                        <p>
                                            Alexander Pierce - Web Developer
                                            <small>Member since Nov. 2012</small>
                                        </p>
                                    </li>
                                    <li class="user-body">
                                        <div class="row">
                                            <div class="col-xs-4 text-center">
                                                <a href="#">Followers</a>
                                            </div>
                                            <div class="col-xs-4 text-center">
                                                <a href="#">Sales</a>
                                            </div>
                                            <div class="col-xs-4 text-center">
                                                <a href="#">Friends</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="user-footer">
                                        <div class="pull-left">
                                            <a href="#" class="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div class="pull-right">
                                            <a href="#" class="btn btn-default btn-flat">Sign out</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }

}