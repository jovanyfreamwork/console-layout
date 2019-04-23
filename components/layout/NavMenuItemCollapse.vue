<template>
  <a-collapse :bordered="false" v-model="activeKey">
    <a-collapse-panel :disabled="collapsed" key="1">
      <template slot="header">
        <nav-menu-item-popover :title="title" :icon="icon" :collapsed="collapsed">
          <template slot="icon">
            <slot name="icon"></slot>
          </template>
          <template slot="title">
            <slot name="title"></slot>
          </template>
          <template slot-scope="popover">
            <slot :popover="popover"></slot>
          </template>
        </nav-menu-item-popover>
      </template>
      <slot :popover="undefined"></slot>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
  import TitleBarLayout from './TitleBarLayout'
  import NavMenuItemPopover from './NavMenuItemPopover'

  export default {
    name: "NavMenuItemCollapse",
    components: {
      TitleBarLayout, NavMenuItemPopover
    },
    props: {
      collapsed: Boolean,
      title: {
        type: String,
        default: 'Title'
      },
      icon: {
        type: String,
        default: 'appstore'
      }
    },
    data() {
      return {
        defaultKey: [],
        activeKey: []
      }
    },
    watch: {
      activeKey(val) {
        if (val.length > 0) {
          this.defaultKey = [...val]
        }
      },
      collapsed(val) {
        if (val) {
          this.activeKey = []
        } else {
          this.activeKey = this.defaultKey
        }
      }
    }
  }
</script>

<style>

</style>
