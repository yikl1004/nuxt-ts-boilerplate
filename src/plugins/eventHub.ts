import Vue from 'vue'

export default (context) => {
    Vue.use({
        install(app: typeof Vue, options?: any): void {
            app.prototype.$eventHub = new Vue()
        }
    })

}
