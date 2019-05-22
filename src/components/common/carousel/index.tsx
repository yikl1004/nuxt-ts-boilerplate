import { Vue, Component } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue';
import { CarouselImage } from '@/typings/carousel';

import styled from 'vue-styled-components';
import AnchorButton from '../anchorButton';



const SlideWrap = styled('div', { width: String, height: String })`
    overflow: hidden;
    position: relative;
    width: ${ props => props.width || '640px' };
    height: ${ props => props.height || '360px' };

    .pictures {
        li {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;

            &.current {
                z-index: 30;
                left: 0;
            }
            &.next {
                z-index: 30;
                left: 100%;
            }
            &.prev {
                left: -100%;
            }

            &.active, &.next, &.prev {
                transition: left 0.3s ease-in-out;
            }

            img {
                width: 100%;
                height: 100%;
            }

            &.component-enter-active,
            &.component-leave-active {
                transition: left .3s ease-in-out;
                left: 0;
            }
        }

        &.prev {
            li {
                &.component-enter {
                    left: -100%;
                }
                &.component-leave-to {
                    left: 100%;
                }
            }
        }
        &.next {
            li {
                &.component-enter {
                    left: 100%;
                }
                &.component-leave-to {
                    left: -100%;
                }
            }
        }
    }

    .controls {
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 99;
        width: 100%;
        .control {
            width: 60px;
            height: 60px;
            position: absolute;
            top: -50%;
            text-indent: -99999px;
            overflow: hidden;
            border: 0;
            background-color: transparent;

            &:after {
                content: '';
                position: absolute;
                top: 23%;
                display: block;
                width: 30px;
                height: 30px;
                border-top: 3px solid skyblue;
                border-left: 3px solid skyblue;
            }

            &.next {
                right: 0;

                &:after {
                    transform: rotateZ(135deg);
                    left: auto;
                    right: 36%;
                }
            }
            &.prev {
                left: 0;

                &:after {
                    transform: rotateZ(-45deg);
                    right: auto;
                    left: 36%;
                }
            }
        }
    }

    .pagination {
        position: absolute;
        bottom: 20px;
        left: 0;
        z-index: 20;
        width: 100%;
        text-align: center;

        &-item {
            display: inline-block;
            border: 0;
            text-indent: 200%;
            overflow: hidden;
            background-color: #fff;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            box-shadow: 3px 3px 5px 1px rgba(0,0,0,.4);

            & + a {
                margin-left: 10px;
            }

            &.active {
                background-color: skyblue;
            }
        }
    }
`

@Component({
    components: { AnchorButton }
})
export default class Carousel extends Vue {

    private images: CarouselImage[] = [
        { src: 'https://picsum.photos/id/121/640/360', alt: '이미지 1' },
        { src: 'https://picsum.photos/id/232/640/360', alt: '이미지 2' },
        { src: 'https://picsum.photos/id/454/640/360', alt: '이미지 3' },
        { src: 'https://picsum.photos/id/165/640/360', alt: '이미지 4' },
        { src: 'https://picsum.photos/id/345/640/360', alt: '이미지 4' },
    ]
    private currentIndex: number = 0
    private pictureKlass: string = ''
    
    get nextIndex(): number {
        let index = this.currentIndex + 1

        if ( index  > this.images.length ) {
            index = 0
        }

        return  index
    }

    get prevIndex(): number {
        let index = this.currentIndex -1

        if ( index < 0 ) {
            index = this.images.length - 1
        }

        return  index
    }

    handlePictureKlass(klass: string): void {
        this.pictureKlass = klass
    }

    move(flag: 'prev' | 'next' | number) {
        if ( flag === 'prev' ) {

            let index = this.currentIndex -1
                index =  index < 0 ? this.images.length -1 : index

            this.currentIndex = index
            this.handlePictureKlass(flag)

        } else if ( flag === 'next' ) {

            let index = this.currentIndex +1
                index = index > this.images.length -1 ? 0 : index

            this.currentIndex = index
            this.handlePictureKlass(flag)

        } else if ( typeof flag === 'number' ) {

            let index = flag;
            this.handlePictureKlass(index < this.currentIndex ? 'prev' : 'next')
            this.currentIndex = index;
        }
    }

    mounted() {
        
    }


    render(h: CreateElement): VNode {

        const { images, pictureKlass, currentIndex } = this

        return (
            <SlideWrap width={ '800px' } height={ '450px' }>
                { images.length ?
                <ul class={['pictures', pictureKlass]}>
                    { images.map((img: CarouselImage, index: number) => (
                        <transition name="component" appear={ true }>
                            { currentIndex === index &&
                                <li>
                                    <img src={ img.src } alt={ img.alt }/>
                                </li>
                            }
                        </transition>
                    )) }
                </ul>
                : null }
                { images.length ?
                    <div class="pagination">
                        { images.map((item: CarouselImage, index: number) => (
                            <AnchorButton
                                class={{
                                    active: index === currentIndex,
                                    'pagination-item': true
                                }}
                                onClicked={ () => this.move(index) }
                            >
                                { index + 1 }
                            </AnchorButton>
                        ))}
                    </div>
                : null}
                <div class="controls">
                    <button type="button" class="control prev" onClick={ () => this.move('prev') }>이전</button>
                    <button type="button" class="control next" onClick={ () => this.move('next') }>다음</button>
                </div>
            </SlideWrap>
        )
    }
}