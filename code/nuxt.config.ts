import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/server/index.js',
    },
  ],
  head: {
    title: 'Find-Your-Rome',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css',
      },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
      },
      {
        src: 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver',
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3000/api',
    // baseURL: 'https://find-your-rome.herokuapp.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '/points_of_interest',
          component: resolve(__dirname, 'pages/pointsOfInterest/index.vue'),
        },
        {
          path: '/about_us',
          component: resolve(__dirname, 'pages/about.vue'),
        },
        {
          path: '/contact_us',
          component: resolve(__dirname, 'pages/contact.vue'),
        }
      )
    },
  },
}

export default config
