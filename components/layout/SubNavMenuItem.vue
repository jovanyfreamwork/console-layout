<template>
  <a class="btn">
    <title-bar-layout @left-mouseenter="data.collapse.popover.hide" v-if="data.collapse && data.collapse.popover">
      <div slot="left" class="btn"></div>
      <title-bar-layout>
        <template slot="left">
          <a-icon :type="icon"/>
        </template>
        <div class="title">
          <slot name="title">
            {{title}}
          </slot>
        </div>
      </title-bar-layout>
    </title-bar-layout>
    <title-bar-layout v-else>
      <template slot="left">
        <a-icon :type="icon"/>
      </template>
      <div class="title">
        <slot name="title">
          {{title}}
        </slot>
      </div>
    </title-bar-layout>
  </a>
</template>

<script>
  import TitleBarLayout from './TitleBarLayout'

  export default {
    name: "SubNavMenuItem",
    components: {
      TitleBarLayout
    },
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      },
      icon: {
        type: String,
        default: 'appstore'
      },
      title: {
        type: String,
        default: 'Title'
      }
    }
  }
</script>

<style>

</style>
