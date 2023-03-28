<template>
  <div id="header">
    <div class="left"></div>
    <div class="right">
      <div v-for="(item, index) in menu" :key="index" class="item">
        <a :href="item.path">{{ item.name }}</a>
        <!-- <router-link :to="item.path">{{ item.name }}</router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      menu: [
        {
          name: 'Home',
          path: '#page1'
        },
        {
          name: 'About Me',
          path: '#page2'
        },
        {
          name: 'Skills',
          path: '#page3'
        },
        {
          name: 'Experience',
          path: '#page4'
        },
        {
          name: 'Education',
          path: '#page5'
        }
      ]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="sass">
#header
  width: 100vw
  height: 50px
  display: flex
  position: fixed
  top: 0
  left: 0
  z-index: 2001
  padding: 0 10px
  box-sizing: border-box
  background-color: #D1C7B590
  .left
    flex: auto
  .right
    display: flex
    .item
      font-weight: bold
      margin: 20px
      a
        color: $mainFontColor
        &:hover
          color: $subColor
</style>