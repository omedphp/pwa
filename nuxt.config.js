export default {
  env: {
    passport_url: process.env.PASSPORT_API_URL || 'http://localhost/api/passport'
  },
  target: 'static',
  ssr: false,
  head: {
    title: 'Omed',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Omed is a demo application',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  plugins: [],
  components: true,
  buildModules: [
      '@nuxtjs/tailwindcss'
  ],
  modules: [
      '@nuxt/http',
      '@nuxtjs/axios'
  ],
  /*
  axios: {
    proxy: true
  },
  http: {
    proxy: true
  },
  proxy: {
    '/passport': {
      target: process.env.PASSPORT_API_URL || 'http://localhost/api/passport',
      pathRewrite: {
        '^/passport/': ''
      },
      changeOrigin: true
    }
  }
   */
};
