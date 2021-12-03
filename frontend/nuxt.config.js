export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wagtail_vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      { src: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2-nopolyfill.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      google: {
        clientId: '853001689831-gr5dqsk1lerr5go8raqkjufbb57o421i.apps.googleusercontent.com',
        codeChallengeMethod: '',
        responseType: 'code',
        endpoints: {
          token: 'http://localhost:8000/social-login/google/',
          userInfo: 'http://localhost:8000/auth/user/'
        },
      },
      naver: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://nid.naver.com/oauth2.0/authorize',
          token: 'http://localhost:8000/social-login/google/',
          userInfo: 'http://localhost:8000/auth/user/',
          logout: false
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        grantType: 'authorization_code',
        clientId: 'Q_OaN5zpEpmlzSmRJf3D',
        autoLogout: false
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
