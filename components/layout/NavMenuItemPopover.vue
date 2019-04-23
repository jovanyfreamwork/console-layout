<template>
  <div>
    <a-popover placement="rightTop" overlayClassName="nav-menu-popover"
               trigger="hover"
               :visible="hovered"
               @visibleChange="handleHoverChange"
               v-if="collapsed">
      <template slot="title">
        <a class="btn">
          <title-bar-layout>
            <div slot="left" class="btn"></div>
            <div class="title">
              <slot name="title">{{title}}</slot>
            </div>
          </title-bar-layout>
        </a>
      </template>
      <template slot="content">
        <slot :hide="hide"></slot>
      </template>
      <a class="btn">
        <title-bar-layout>
          <template slot="left">
            <slot name="icon">
              <a-icon :type="icon"/>
            </slot>
          </template>
          <div class="title">
            <slot name="title">{{title}}</slot>
          </div>
        </title-bar-layout>
      </a>
    </a-popover>
    <a class="btn" v-else>
      <title-bar-layout>
        <template slot="left">
          <slot name="icon">
            <a-icon :type="icon"/>
          </slot>
        </template>
        <div class="title">
          <slot name="title">{{title}}</slot>
        </div>
      </title-bar-layout>
    </a>
  </div>
</template>

<script>
  import TitleBarLayout from './TitleBarLayout'

  export default {
    components: {
      TitleBarLayout
    },
    name: "NavMenuItemPopover",
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      collapsed: Boolean,
      title: {
        type: String,
        default: 'Title'
      },
      icon: {
        type: String,
        default: 'appstore'
      },
    },
    data() {
      return {
        hovered: this.visible,
      }
    },
    watch: {
      visible(val) {
        this.hovered = val
      }
    },
    methods: {
      handleHoverChange(visible) {
        this.hovered = visible
      },
      hide() {
        this.hovered = false
      },
    }
  }
</script>

<style>


</style>
