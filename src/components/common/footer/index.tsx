// default
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import { VNode, CreateElement } from 'vue';


@Component({
    components: { }
})
export default class DefaultLayout extends Vue {

    render(h: CreateElement): VNode {
        return (
            <footer class="main-footer">
                <div class="pull-right hidden-xs">
                    Anything you want
                </div>
                <strong>Copyright &copy; 2019 <a href="#">COMPANY</a>.</strong> All rights reserved.
            </footer>
        )
    }
}