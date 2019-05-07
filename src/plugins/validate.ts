import Vue from 'vue';
import VeeValidate from 'vee-validate'
import VeeValidateKo from 'vee-validate/dist/locale/ko';

Vue.use( VeeValidate, {
    locale: 'ko',
    dictionary: {
        sv: VeeValidateKo
    }
});
