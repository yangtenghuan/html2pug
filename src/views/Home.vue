<template lang="pug">
  .home
    .header
      span HTML to Pug
      a(href="https://github.com/pecopeco/html2pug" target="_blank")
        img(src="@/assets/github.png")
    .text-wrap
      textarea.text(v-model="text")
      textarea.pugText(v-model="pugText")
    .footer a Conversion tool built from vue + pug + stylus 
</template>

<script>
import { scope } from '../html2jade'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      text: '',
      pugText: ''
    }
  },
  watch: {
    text (text) {
      scope.convertHtml(text, {}, (err, pug) => {
        this.pugText = pug
        console.log(pug)
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

.home {
  display flex
  flex-direction column
  min-height 100%
  .header {
    position relative
    display flex
    align-items center
    justify-content center
    width 100%
    height 80px
    background #00a86b
    color #fff
    font-size 28px
    img {
      position absolute
      top 20px
      right 30px
      width 35px
      height 35px
      cursor pointer
    }
  }
  .text-wrap {
    flex 1
    display flex
    margin 15px 25px 0
    textarea {
      flex 1
      height inherit
      padding 10px
      border-radius 10px
      background #1b2b34
      color #e0e1e1
      font-size 14px
      outline none
      resize none
      &:first-child {
        margin-right 10px
      }
      &:last-child {
        margin-left 10px
      }
    }
  }
  .footer {
    display flex
    align-items center
    justify-content center
    padding 10px 0
    font-size 13px
  }
}
</style>
