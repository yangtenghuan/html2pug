<template lang="pug">
  .home
    textarea(v-model="text")
</template>

<script>
import { scope } from '../html2jade'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      text: ''
    }
  },
  watch: {
    text (text) {
      scope.convertHtml(text, {}, function (err, jade) {
        console.log(jade)
      })
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus">

textarea {
  width 500px
  height 200px
  margin-top 100px
}
</style>
