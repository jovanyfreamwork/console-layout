<template>
  <a-layout class="layout">
    <a-layout-header v-if="$slots.header">
      <slot name="header">
        <p v-for="i in 2">header</p>
      </slot>
    </a-layout-header>
    <a-layout-content class="overflow">
      <slot></slot>
    </a-layout-content>
    <a-layout-footer v-if="$slots.footer">
      <slot name="footer"></slot>
    </a-layout-footer>
  </a-layout>
</template>

<script>
  export default {
    name: "container",
    props: {
      header: {
        type: Boolean,
        default: false
      },
      footer: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        hasHeader: this.header,
        hasFooter: this.footer,
      }
    },
    watch: {
      header(val) {
        this.hasHeader = val;
      },
      hasHeader(val) {
        this.$emit("update:header", val)
      },
      footer(val) {
        this.hasFooter = val;
      },
      hasFooter(val) {
        this.$emit("update:footer", val)
      },
    }
  }
</script>

<style>

</style>
