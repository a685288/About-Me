<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'app',
  components: {
    Header
  }

}
</script>

<style lang="sass">
@import '@/assets/sass/_variables.sass'
@import '@/assets/sass/reset.scss'
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  margin: 0px
</style>
