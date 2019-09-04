<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
html,body,#app {
  margin 0
  height 100%
}
#app {
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  overflow hidden
}
img {
  width 100%
}
</style>
