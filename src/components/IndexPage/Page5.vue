<template>
	<div id="page5">
    <img src="@/assets/img/graduationPhoto.jpg" alt="" srcset="">
    <div class="content">
      <div class="title">Education</div>
      <div class="card">
        <div class="schoolName">國立臺中科技大學</div>
        <div class="time">2017/9 - 2021/6</div>
        <div class="item">資訊管理系　畢業</div>
        <div class="item">　　美容系　轉系</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
    }
  }
}
</script>
<style lang="sass">
#page5
  text-align: left
  background-color: $bgColor
  min-height: 100vh
  display: flex
  flex-wrap: wrap
  img
    object-fit: cover
    object-position: center center
    max-width: 50vw
    height: auto
    max-height: 100vh
    @include pad
      margin: 50px auto
  .content
    padding: 100px 30px
    @include pad
      width: 100%
      margin: 0 auto
      padding: 0 50px
    .title
      font-size: 6vh
    .card
      margin-top: 100px
      @include pad
        margin-top: 30px
      > div
        line-height: 160%
      .schoolName
        font-size: map-get($fontSize, XXXL)
      .time
        font-size: map-get($fontSize, L)
        margin-bottom: 30px
</style>