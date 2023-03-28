<template>
  <div id="page1">
    <div class="aboutMe">
      <div class="box box1">
        <img src="@/assets/img/me.png" alt="" srcset="">
      </div>
      <div class="box box2">
        <div class="name">劉佩穎</div>
        <div class="englishName">LIU, PEI - YING</div>
        <div class="content">前端工程師</div>
      </div>
    </div>
    <div class="scroll">
      <div>SCROLL</div>
      <svg viewBox="0 0 24 24">
        <line class="st1" x1="12" y1="1" x2="12" y2="22.5" />
        <line class="st1" x1="12.1" y1="22.4" x2="18.9" y2="15.6" />
        <line class="st1" x1="11.9" y1="22.4" x2="5.1" y2="15.6" />
      </svg>
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
#page1
  background-color: $bgColor
  .aboutMe
    height: calc( 100vh - 160px )
    display: flex
    flex-wrap: wrap
    align-items: center
    padding-top: 80px
    .box
      flex: 1
      min-width: 375px
      &.box1
        img
          width: 200px
          border-radius: 50%
      &.box2
        .name
          font-size: map-get($fontSize,XXXXL)
          font-weight: bold
          margin-bottom: 10px
        .englishName
          font-size: map-get($fontSize,XXL)
          margin-bottom: 20px
        .content
          color: $brownFontColor
          font-size: map-get($fontSize,L)
          font-weight: bold
  .scroll
    height: 80px
    letter-spacing: 0.2em 
    font-size: map-get($fontSize,XS)
    svg 
      margin-top: 10px
      width: 18px
      height: 18px
      -webkit-animation: scroll 0.95s ease-in-out alternate infinite
      animation: scroll 0.95s ease-in-out alternate infinite
      fill: none
      stroke: #000000
      stroke-linecap: round
      stroke-miterlimit: 10
      stroke-width: 1
      @keyframes scroll
        0%
          transform: translateY(0) 
        100% 
          transform: translateY(10px) 
</style>