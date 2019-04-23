<template>
  <title-bar-layout @click="handleClickTitleBar">
    <template slot="left">
      <a class="btn" @click="handleClickLeftButton" v-show="titleShow">
        <a-icon type="appstore"/>
      </a>
      <slot name="left">
        <a class="btn">
          <a-icon type="appstore"/>
        </a>
      </slot>
    </template>
    <template slot="right">
      <slot name="right">
        <a class="btn">
          <a-icon type="appstore"/>
        </a>
      </slot>
    </template>
  </title-bar-layout>
</template>

<script>
  import TitleBarLayout from './TitleBarLayout.vue'

  export default {
    name: "TopBar",
    components: {
      TitleBarLayout
    },
    methods: {
      handleClickTitleBar() {
        console.log("clicked!")
      },
      handleClickLeftButton() {
        this.$emit("chick-left-button")
      }
    },
    props: {
      titleShow: {
        type: Boolean,
        default: true,
      },
    },
  }
</script>

