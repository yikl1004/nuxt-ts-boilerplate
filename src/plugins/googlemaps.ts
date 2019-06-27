import Vue from 'vue'
import VueGoogleMaps from 'vue-googlemaps'
import 'vue-googlemaps/dist/vue-googlemaps.css'
 
Vue.use(VueGoogleMaps, {
    load: {
        // Google API key
        apiKey: 'AIzaSyAnOp-YaKakF3VB4dP-tJDjBnU8vygQneE',
        // Enable more Google Maps libraries here
        libraries: ['places'],
        // Use new renderer
        useBetaRenderer: false,
    },
})