<template>
	<div id="footer">
    <div class="way">
      <div class="item">0981-685288</div>
      <div class="item">a685288@gmail.com</div>
    </div>
    <div class="statement">© 2023 by Pei Ying.</div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="sass">
#footer
  background-color: $secondaryColor
  padding: 20px 100px
  color: $lightFontColor
  display: flex
  text-align: left
  max-height: 52px
  z-index: 2000
  .way
    flex: auto
    .item
      padding: 5px
  .statement
    align-self: self-end
    font-weight: bold
</style>