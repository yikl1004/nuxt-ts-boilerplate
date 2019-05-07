/// <reference path="cookie.d.ts" />
import Vue from 'vue'
import { set as cookieSet, get as cookieGet } from 'tiny-cookie'

Number.isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
};

Vue.use({
    install(Vue) {
        Vue.prototype.$cookie = {
            set(name, value, daysOrOptions) {
                let opts = daysOrOptions;
                if(Number.isInteger(daysOrOptions)) {
                    opts = {expires: daysOrOptions};
                }
                return cookieSet(name, value, opts);
            },
    
            get(name) {
                return cookieGet(name);
            },
    
            delete(name, options) {
                let opts = {expires: -1};
                if(options !== undefined) {
                    opts = Object.assign(options, opts);
                }
                this.set(name, '', opts);
            }
        }
    },
})