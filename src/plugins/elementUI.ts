import Vue from 'vue';

/**
 * http://element.eleme.io/?ref=madewithvuejs.com#/en-US
 */

import 'element-ui/lib/theme-chalk/index.css';

const lang = require('element-ui/lib/locale/lang/ko')
const locale = require('element-ui/lib/locale')

locale.use(lang);


//pully import
import ElementUI from 'element-ui';
Vue.use(ElementUI);
