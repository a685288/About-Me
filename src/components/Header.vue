<template>
  <div id="header">
    <div class="left"></div>
    <div class="right">
      <div v-for="(item, index) in menu" :key="index" class="item">
        <router-link :to="item.path">{{ item.name }}</router-link>
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
          name: '首頁',
          path: '/'
        },
        {
          name: '專業技能',
          path: 'skill'
        },
        {
          name: '經歷',
          path: 'experience'
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
  background-color: $bgColor
  display: flex
  position: sticky
  top: 0
  left: 0
  max-height: 56px
  z-index: 2001
  padding: 0 10px
  .left
    flex: auto
  .right
    display: flex
    .item
      margin: 20px
      a
        color: $mainFontColor
        &:hover
          color: $subColor
          font-weight: bold
</style>