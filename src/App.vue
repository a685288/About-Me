<template>
  <div id="app">
    <Header />
    <transition>
      <router-view />
    </transition>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
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