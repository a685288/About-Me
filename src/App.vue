<template>
  <div id="app">
    <Header />
    <transition>
      <router-view />
    </transition>
    <Footer />
    <Popup ref="popup">
      此網頁使用 Vue cli 建置<br>
      主要語法：Vue2<br>
      其中所有版面皆為手刻，沒有使用外部 UI 庫<br>
      並且同步實做 RWD
      <template v-slot:confirm>我知道了！</template>
      <template v-slot:cancel>關閉</template>
    </Popup>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Popup from '@/components/Popup'
export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Popup
  },
  data(){
    return {
    }
  },
  mounted() {
    // setTimeout(() => {
      this.$refs.popup.changeVisible(true)
    // }, 3000)
  },
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  margin: 0px
  overflow: auto
  .v-enter-active, .v-leave-active
    transition: opacity 2s
  .v-enter-from, .v-leave-to
    opacity: 0
  .v-enter-to, .v-leave-from
    opacity: 1
</style>