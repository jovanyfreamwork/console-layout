<template>
  <a-row class="nav-menu">
    <nav-menu-item collapse icon="appstore" title="Title" :collapsed="currentCollapsed">
      <template slot-scope="data">
        <sub-nav-menu-item icon="appstore" title="Title" :data="data"/>
        <sub-nav-menu-item icon="appstore" title="Title" :data="data"/>
      </template>
    </nav-menu-item>
    <nav-menu-item collapse icon="appstore" title="Title" :collapsed="currentCollapsed">
      <template slot-scope="data">
        <sub-nav-menu-item icon="appstore" title="Title" :data="data"/>
        <sub-nav-menu-item icon="appstore" title="Title" :data="data"/>
      </template>
    </nav-menu-item>
    <nav-menu-item collapse icon="appstore" title="Title" :collapsed="currentCollapsed">
      <template slot-scope="data">
        <sub-nav-menu-item icon="appstore" title="Title" :data="data"/>
        <sub-nav-menu-item icon="appstore" title="Title" :data="data"/>
      </template>
    </nav-menu-item>
    <nav-menu-item icon="appstore" title="Title" :collapsed="currentCollapsed">
    </nav-menu-item>
    <nav-menu-item icon="appstore" title="Title" :collapsed="currentCollapsed">
    </nav-menu-item>
    <nav-menu-item icon="appstore" title="Title" :collapsed="currentCollapsed">
    </nav-menu-item>
    <nav-menu-item icon="appstore" title="Title" :collapsed="currentCollapsed">
    </nav-menu-item>

  </a-row>
</template>

<script>
  import NavMenuItem from './NavMenuItem'
  import SubNavMenuItem from './SubNavMenuItem'

  export default {
    components: {
      NavMenuItem,
      SubNavMenuItem,
    },
    props: {
      collapsed: {
        type: Boolean,
        default: true,
      }
    },
    data() {
      return {
        currentCollapsed: this.collapsed,
      }
    },
    watch: {
      collapsed(val) {
        this.currentCollapsed = val
      }
    },
    methods: {
      toggleCollapsed() {
        this.currentCollapsed = !this.collapsed
        this.$emit('change-collapsed', this.currentCollapsed)
      },
    },
  }
</script>

<style>


</style>
