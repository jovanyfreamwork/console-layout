<i18n>
  {
  "en": {
  "hello": "hello world!"
  },
  "zh": {
  "hello": "你好，世界!"
  }
  }
</i18n>

<template>
  <div>
    <logo/>
    <h1 class="title">
      nuxt-ant-design
    </h1>
    <h2 class="subtitle">
      My super-excellent Nuxt.js project
    </h2>
    <div class="links">
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        class="button--green"
      >Documentation</a>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        class="button--grey"
      >GitHub</a>
      <a-button>{{ $t('home.title' )}}</a-button>
      <a-button>{{ $t('hello' )}}</a-button>
      <a-button>{{ $t('welcome' )}}</a-button>
      <a-date-picker></a-date-picker>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>
