<template>
  <div id="page2">
    <div class="title">About Me</div>
    <div class="content">
      我今年24歲，畢業於國立臺中科技大學資訊管理系，目前工作經驗2.5年，其中一年是大四一整年的實習工作，我擁有三年前端 Web、App 開發經驗，精通 Vue，責任感強，且擅於溝通、自學能力高，能夠高度配合團隊分工，尤其注重工作及學習效率。
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  mounted() {

  },
}
</script>
<style lang="sass">
#page2
  background-color: $bgColor2
  height: 100vh
  color: $lightFontColor
  .title
    display: grid
    font-size: 10vh
    height: 50%
    align-items: center
  .content
    line-height: 28px
    font-size: map-get($fontSize, L)
    padding: 0 15%
    @include mobile
      padding: 5%
</style>