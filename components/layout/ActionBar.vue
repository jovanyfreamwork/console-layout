<template>
  <title-bar-layout @click="handleClickTitleBar">
    <slot></slot>
    <a slot="left" class="btn" @click="handleClickLeftButton">
      <a-icon type="appstore"/>
    </a>
    <a slot="right" class="btn">
      <a-icon type="appstore"/>
    </a>
  </title-bar-layout>
</template>

<script>
  import TitleBarLayout from './TitleBarLayout.vue'

  export default {
    name: "ActionBar",
    components: {
      TitleBarLayout
    },
    methods: {
      handleClickLeftButton() {
        this.$emit('click-left-button')
      }
    }
  }
</script>

