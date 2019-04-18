import Vue from 'vue';
import VueI18n from 'vue-i18n';

import antDesignUI_zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import antDesignUI_enUS from 'ant-design-vue/lib/locale-provider/en_US';

import zh from "~/locales/zh.js";
import en from "~/locales/en.js";

const localeMessages = {zh, en}

Vue.locale = () => {};
Vue.use(VueI18n);

export default ({app, store}) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'zh',
    messages: {
      zh: {
        welcome: "欢迎你！",
        ...antDesignUI_zhCN,
        ...localeMessages['zh']
      },
      en: {
        welcome: "Welcome!",
        ...antDesignUI_enUS,
        ...localeMessages['en']
      }
    }
  });
};
