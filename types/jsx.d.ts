import Vue, {VNode} from "vue";

export default abstract class TsxComponent<P> extends Vue {
    private vueTsxProps: Readonly<{}> & Readonly<P>;
}

declare global {
    namespace JSX {
        interface Element extends VNode {}
        interface ElementClass extends Vue {}
        interface ElementAttributesProperty {
            $props: {}
        }
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
}
