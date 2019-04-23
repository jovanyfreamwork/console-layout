<template>
  <div class="layout">
    <div ref="left" class="pull pull-left" v-if="$slots.left" @click="handleLeftChick" @mouseenter="handleLeftMouseEnter">
      <slot name="left"></slot>
    </div>
    <div class="pull pull-center" @click="handleChick">
      <slot></slot>
    </div>
    <div ref="right" class="pull pull-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TitleBarLayout",
    methods: {
      handleChick() {
        this.$emit('click')
      },
      handleLeftChick() {
        this.$emit('left-click')
      },
      handleLeftMouseEnter() {
        this.$emit('left-mouseenter')
      }
    }
  }
</script>

<style>
  .layout {
    height: 100%;
    width: 100%;
    font-size: large;
  }

  .layout, .layout .pull, .layout .pull .btn {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .layout .pull {
    width: fit-content;
    height: 100%;
  }

  .layout .pull.pull-center {
    flex: 1;
  }
</style>
