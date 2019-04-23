<template>
  <title-bar-layout>
    <slot>
      <a class="btn">
        <a-icon type="appstore"/>
      </a>
      <a class="btn">
        <a-icon type="appstore"/>
      </a>
      <a class="btn">
        <a-icon type="appstore"/>
      </a>
      <a class="btn">
        <a-icon type="appstore"/>
      </a>
      <a class="btn">
        <a-icon type="appstore"/>
      </a>
    </slot>
  </title-bar-layout>
</template>

<script>
  import TitleBarLayout from './TitleBarLayout.vue'

  export default {
    name: "LeftBottomBar",
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

<style>
  .content .left-side .ant-layout-footer .layout.vertical,
  .content .left-side .ant-layout-footer .layout.vertical .pull {
    width: 50px;
    height: fit-content;
    display: block;
  }

  .content .left-side .ant-layout-footer .layout.vertical .pull .btn {
    width: 50px;
    height: 50px;
  }

  .content .left-side .ant-layout-footer .layout,
  .content .left-side .ant-layout-footer .layout .pull,
  .content .left-side .ant-layout-footer .layout .pull .btn {
    width: 100%;
    background-color: #0d262f !important;
  }

  .content .left-side .ant-layout-footer .layout .pull .btn:hover {
    background-color: #2f1213 !important;
  }

  @media only screen and (max-width: 1024px) {
    .content .left-side .ant-layout-footer .layout,
    .content .left-side .ant-layout-footer .layout .pull,
    .content .left-side .ant-layout-footer .layout .pull .btn {
      width: 100vw;
    }
  }
</style>
