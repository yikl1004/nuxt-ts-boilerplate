const webpack = require('webpack')
const bodyParser = require('body-parser')

const CORS = require('cors')
const session = require('express-session')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    mode: 'universal',
    srcDir: 'src/',
    env: {
        NODE_ENV: process.env.NODE_ENV,
        CONFIG_LEVEL: process.env.CONFIG_LEVEL,
        // FRONT_VISIBILITY_CONFIG: JSON.stringify( FRONT_VISIBILITY_CONFIG )
    },

    head: {
        title: "MRO Mall",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "nuxt-ts-boilerplate" }
        ],
        link: [
            // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
        ],
    },

    css: [
        '~/assets/css/common/common.css',
    ],
    
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: "#3B8070"
    },

    transpileDependencies: [
        "vuex-module-decorators"
    ],

    serverMiddleware: [
        CORS(),
        bodyParser.urlencoded({ extended: false }),
        bodyParser.json()
    ],

    router: {
        middleware: 'auth'
    },

    plugins: [
        { src: '~/plugins/cookie', ssr: false },
        { src: '~/plugins/eventHub', ssr: true },
        { src: '~/plugins/elementUI', ssr: false },
        { src: '~/plugins/modal', ssr: false },
        { src: '~/plugins/validate', ssr: false },
    ],

    /*
     ** Build configuration
     */
    build: {
        transpile: [
            /(.+)(@company\/library\/src\/utils\/)(.+)(\.js)$/, // Transpile Unix paths for all utils files
            /(.+)(@company\\library\\src\\utils\\)(.+)(\.js)$/ // Transpile Windows paths for all utils files
        ],
        babel: {
            presets({ isServer }) {
                return [
                    // "vue-app",
                    "@vue/babel-preset-jsx",
                    [ "@nuxt/babel-preset-app", {
                            targets: isServer ? { node: "current" } : { browsers: ["last 2 versions"], ie: 11 }
                    }]
                ]
            },
            plugins: [
                // "transform-vue-jsx",
                "transform-class-properties",
                "syntax-jsx",
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-transform-runtime"
            ].concat(isProduction ? [ "transform-remove-console" ] : [] )
        },
        extractCSS: isProduction,
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    modules: [
        // "@nuxtjs/axios",
        // "@nuxtjs/auth",
        'cookie-universal-nuxt',
        "@nuxtjs/style-resources",
    ],
    // auth: {
    //     redirect: {
    //         login: `/${config.exclusiveSiteId}/member/login`,
    //         home: `/${config.exclusiveSiteId}`
    //     },
    //     token: {
    //         prefix: ''
    //     },
    //     localstorage: {
    //         prefix: 'mro_auth'
    //     }
    // },
    // axios: {
    //     baseURL: `${config.protocol}://${config.apiHost}`,
    //     credentials: true,
    // },
    styleResources: {
    }
}