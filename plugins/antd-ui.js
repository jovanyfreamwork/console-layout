import Vue from 'vue'
import Antd from 'ant-design-vue/lib'
import Layout from '~/components/layout/index.vue'

export default () => {
  Vue.use(Antd)
  Vue.component("layout", Layout)
}
