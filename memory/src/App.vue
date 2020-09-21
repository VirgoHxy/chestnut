<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="stylus">
@import './css/reset.styl'

global-reset()

#app {
  font-family fangsong
  text-align center
  color #2c3e50
  background-color $bgPrimary
  height 100vh
}
</style>
