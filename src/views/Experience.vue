<template>
  <div id="experience">
    <div v-for="(item, index) in data" :key="index" class="card">
      <div class="left">
        <div class="title">{{ item.title }}</div>
        <div class="subTitle">{{ item.subTitle }}</div>
      </div>
      <div class="right">{{ item.time }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      data: [
        {
          title: '今網智慧科技股份有限公司',
          subTitle: '前端工程師（大四實習後轉正）',
          time: '2021.01 - Present'
        },
        {
          title: '樂衍有限公司',
          subTitle: '前端工程師（大四實習）',
          time: '2020.09 - 2021.01'
        },
        {
          title: '國立臺中科技大學',
          subTitle: '資管系 大學畢業',
          time: '2017.09 - 2021.06'
        }
      ]
    }
  },
}
</script>
<style lang="sass">
#experience
  min-height: calc( 100vh - 148px )
  padding-top: 40px
  box-sizing: border-box
  .card
    padding: 20px
    width: 50%
    margin: 0px auto 40px
    display: flex
    text-align: left
    line-height: 1.5
    background-color: $mainColor
    box-shadow: 10px 10px 0px $bgColor
    color: $lightFontColor
    border-radius: 10px
    flex-wrap: wrap
    .left
      flex: 1
      min-width: 200px
      .title
        font-size: 34px
        font-weight: bold
        @include pad
          font-size: 26px
      .subTitle
        font-size: 18px
    .right
      font-weight: bold
      padding-left: 20px
      @include pad
        padding-left: 0
        padding-top: 20px
</style>