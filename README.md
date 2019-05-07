# mro

> Nuxt.js TypeScript project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


## Using JSX in Vue(NUXT)

### v-html
> v-html="this.msg" => domPropsInnerHTML={ this.msg }

### custm event
> this.$emit('myEvent') => \<div onMyEvent={this.method} /\>  
> this.$emit('myEvent', 'param') => \<div onMyEvent={(param) => this.method(param)} /\>
