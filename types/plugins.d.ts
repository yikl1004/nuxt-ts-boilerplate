import Vue from 'vue'
import { AxiosRequestConfig } from 'axios';

declare module 'vue/types/vue' {
    interface Vue {
        // [key: string]: any
        $showModal(component: any, propsOrName: any): void
    }
}