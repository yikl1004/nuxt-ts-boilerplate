import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        $cookie: {
            set(name: string, value?: any, expire?: number): void
            get(name: string)
            delete(name: string, options?: any)
        }
    }
}