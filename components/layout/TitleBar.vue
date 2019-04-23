<template>
  <title-bar-layout>
    <a ref="default" class="pull" v-show="$slots.default && titleShow">
      <slot></slot>
    </a>
    <a ref="left" slot="left" class="btn" @click="$emit('chick-left-button')" v-show="$slots.left">
      <slot name="left"></slot>
    </a>
    <a ref="right" slot="right" class="btn" @click="$emit('chick-right-button')" v-show="$slots.right && titleShow">
      <slot name="right"></slot>
    </a>
  </title-bar-layout>
</template>

<script>
  import TitleBarLayout from './TitleBarLayout.vue'

  export default {
    name: "TitleBar",
    components: {
      TitleBarLayout
    },
    props: {
      titleShow: {
        type: Boolean,
        default: true,
      },
    },
  }
</script>

