<template>
  <a-locale-provider :locale='locale'>
    <div class="full-screen">
      <div class="top">
        <title-bar-layout>
          <title-bar ref="titleBar" :title-show="titleBarWidth !== barButtonWidth" slot="left"
                     @chick-left-button="handleChickLeftButtonInTitleBar"
                     @chick-right-button="handleChickRightButtonInTitleBar"
                     :style="{'width': `${titleBarWidth}px`}" v-show="titleBarShow">
            {{screenWidth}}
            <a-icon slot="left" type="appstore" v-if="currentLeftSideShow"/>
            <a-icon slot="right" type="appstore" v-if="isMobileMode"/>
          </title-bar>
          <top-bar class="top-row" :title-show="titleBarWidth !== barButtonWidth"
                   @chick-left-button="handleChickLeftButtonInTopBar" v-show="topBarShow">
          </top-bar>
        </title-bar-layout>
      </div>
      <div class="content">
        <title-bar-layout>
          <container slot="left" class="left-side" v-show="currentLeftSideShow"
                     :style="{'width': `${currentLeftSideWidth}px`}">
            <h3 slot="header">Header</h3>
            <left-bottom-bar slot="footer" :class="{'vertical': currentLeftSideWidth === barButtonWidth}"></left-bottom-bar>
            <nav-menu :collapsed="isMinCollapsed"></nav-menu>
          </container>
          <container ref="container" v-show="containerShow">
            <h3 ref="header" slot="header">Header</h3>
            <action-bar ref="footer" slot="footer" :style="{'width': `calc(100vw - ${offsetLeftSideWidth}px)`}">
              <a-icon slot="left" type="appstore"/>
            </action-bar>
            <section class="container">
              <slot></slot>
            </section>
          </container>
        </title-bar-layout>
      </div>
    </div>
  </a-locale-provider>
</template>

<script>
  import TitleBarLayout from './TitleBarLayout.vue'
  import TitleBar from './TitleBar.vue'
  import ActionBar from './ActionBar.vue'
  import TopBar from './TopBar.vue'
  import Container from './Container.vue'
  import NavMenu from './NavMenu.vue'
  import LeftBottomBar from './LeftBottomBar.vue'

  export default {
    name: "locale",
    components: {
      TitleBarLayout, TitleBar, TopBar, ActionBar, Container, NavMenu, LeftBottomBar,
    },
    props: {
      defaultLeftSideWidth: {
        type: Number,
        default: 250,
      },
      leftSideHide: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        leftSideWidth: this.defaultLeftSideWidth,
        currentTitleBarWidth: this.leftSideWidth,
        currentLeftSideWidth: this.leftSideWidth,
        currentLeftSideShow: !this.leftSideHide,
        offsetContainerHeight: 0,
        barButtonWidth: 0,
        screenWidth: 0,
      }
    },
    mounted() {
      document.body.className = this.theme
      this.resize()
      window.onresize = this.resize
      this.$nextTick(() => {
        this.barButtonWidth = this.offsetWidth(this.$refs['titleBar'].$refs, 'left')
      })
    },
    computed: {
      titleBarWidth() {
        if (this.isMobileMode && this.currentLeftSideWidth === this.barButtonWidth) {
          return this.barButtonWidth
        }
        return this.currentTitleBarWidth
      },
      titleBarShow() {
        return !this.isMobileMode || this.currentLeftSideShow
      },
      topBarShow() {
        return !this.isMobileMode || !this.currentLeftSideShow || this.titleBarWidth === this.barButtonWidth
      },
      containerShow() {
        return !this.isMobileMode || !this.currentLeftSideShow || this.currentLeftSideWidth === this.barButtonWidth
      },
      isMobileMode() {
        return this.screenWidth <= 1024
      },
      locale() {
        return this.$i18n.messages[this.$i18n.locale]
      },
      offsetLeftSideWidth() {
        return this.currentLeftSideShow ? this.currentLeftSideWidth : 0;
      },
      theme() {
        return `theme theme-${this.$store.state.theme}`
      },
      isMinCollapsed: {
        get() {
          return this.currentLeftSideWidth === this.barButtonWidth;
        }
      },
    },
    methods: {
      resize() {
        this.screenWidth = window.innerWidth
        this.leftSideWidth = this.isMobileMode ? this.screenWidth : this.leftSideWidth
        this.currentTitleBarWidth = this.leftSideWidth
        this.currentLeftSideWidth = this.leftSideWidth
      },
      offsetHeight($refs, target) {
        if ($refs[target] !== undefined) {
          const offsetHeight = $refs[target].offsetHeight
          if (offsetHeight != undefined) {
            return offsetHeight;
          } else {
            return $refs[target].$el.offsetHeight
          }
        }
        return 0;
      },
      offsetWidth($refs, target) {
        if ($refs[target] !== undefined) {
          const offsetHeight = $refs[target].offsetWidth
          if (offsetHeight != undefined) {
            return offsetHeight;
          } else {
            return $refs[target].$el.offsetWidth
          }
        }
        return 0;
      },
      handleNavMenuPopover() {
        this.$nextTick(() => {
          const popovers = document.querySelectorAll('div.ant-popover.nav-menu-popover.ant-popover-placement-rightTop')
          popovers.forEach(dom => {
            let leftStyle = dom.style.getPropertyValue('left')
            dom.style.setProperty('left', leftStyle.replace(/\d+/ig, parseInt(leftStyle) - 4), 'important')
          })
        })
      },
      handleChickLeftButtonInTitleBar() {
        this.currentLeftSideWidth = this.currentLeftSideWidth === this.barButtonWidth ? this.leftSideWidth : this.barButtonWidth;
      },
      handleChickRightButtonInTitleBar() {
        this.currentLeftSideShow = !this.currentLeftSideShow
      },
      handleChickLeftButtonInTopBar() {
        this.currentLeftSideShow = !this.currentLeftSideShow
        if (this.currentLeftSideShow) {
          this.currentLeftSideWidth = this.leftSideWidth
        }
      }
    }
  }
</script>

