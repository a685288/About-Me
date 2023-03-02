<template>
	<div id="footer">
    <div class="way">
      <div class="item">0981-685288</div>
      <div class="item">a685288@gmail.com</div>
    </div>
    <div class="way right">
      <div class="item">最後更新時間 2023/03/02</div>
      <div class="item">© 2023 by Pei Ying.</div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="sass">
#footer
  background-color: $secondaryColor
  padding: 20px 10%
  color: $lightFontColor
  display: flex
  flex-wrap: wrap
  text-align: left
  min-height: 52px
  z-index: 2000
  .way
    flex: auto
    min-width: 170px
    .item
      padding: 5px
    &.right
      text-align: right
      @include mobile
        text-align: left
</style>