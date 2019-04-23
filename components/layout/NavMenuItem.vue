<template>
  <a-col :class="{'collapsed' : collapsed, 'none-collapsed' : !collapsed}">
    <nav-menu-item-collapse :icon="icon" :title="title" :collapsed="collapsed" v-if="collapse">
      <template slot="icon">
        <slot name="icon"></slot>
      </template>
      <template slot="title">
        <slot name="title"></slot>
      </template>
      <template slot="default" slot-scope="collapse">
        <slot :collapse="collapse"></slot>
      </template>
    </nav-menu-item-collapse>
    <nav-menu-item-popover :icon="icon" :title="title" :collapsed="collapsed" v-else>
      <template slot="icon">
        <slot name="icon"></slot>
      </template>
      <template slot="title">
        <slot name="title"></slot>
      </template>
      <slot></slot>
    </nav-menu-item-popover>
  </a-col>
</template>

<script>
  import NavMenuItemPopover from './NavMenuItemPopover'
  import NavMenuItemCollapse from './NavMenuItemCollapse'

  export default {
    name: "NavMenuItem",
    components: {
      NavMenuItemPopover,
      NavMenuItemCollapse
    },
    props: {
      collapse: Boolean,
      collapsed: Boolean,
      icon: {
        type: String,
        default: 'appstore'
      },
      title: {
        type: String,
        default: 'Title'
      },
    }
  }
</script>

<style>
</style>
