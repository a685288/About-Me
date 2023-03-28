<template>
	<div id="page4">
    <div class="title">
      <p>Experience</p>
    </div>
    <div class="content">
      <div class="card">
        <div class="companyName">今網智慧科技股份有限公司</div>
        <div class="position">前端工程師</div>
        <div class="time">2021/1 - 2023/2</div>
        <div class="info">
          【大四下實習半年，畢業後即轉正，正職 1.5 年】 <br>
          【擔任部門福委代表，處理公司福委相關活動】<br><br>
          2 項產品負責人，Web、App 各一，負責功能開發與維護、協助安排產品時程規劃、整合回饋提出優化事項，以及帶領同事加入熟悉專案。 <br>
          時常自主性發起維護文件的撰寫（例如：App 包版、送審），以便規範重複性事件的流程；或整合各平台回饋，主動提出產品建議優化事項。
        </div>
      </div>
      <div class="card">
        <div class="companyName">樂衍有限公司</div>
        <div class="position">前端工程師</div>
        <div class="time">2020/9 - 2021/1</div>
        <div class="info">
          【大四上實習半年】<br>
          【完全遠距】<br><br>
          主要負責建置牙醫診所 RWD 官網，使用 Html5、CSS3、JavaScript、Bootstrap 開發，包含功能操作、切版與 css 動畫
        </div>
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
#page4
  background-color: $bgColor3
  min-height: 100vh
  color: $lightFontColor
  .title
    display: grid
    font-size: 10vh
    align-items: center
    p
      margin-top: 80px
  .content
    display: flex
    flex-wrap: wrap
    padding: 30px
    .card
      text-align: left
      background-color: $bgColor
      padding: 30px
      border-radius: 15px
      color: $mainFontColor
      margin: 10px auto
      max-width: 400px
      border: 10px solid $bgColor3
      > div
        line-height: 180%
      .companyName
        font-size: map-get($fontSize, XXXL)
        color: $brownFontColor
        font-weight: bold
      .position,.time
        font-size: map-get($fontSize, M)
        color: $brownFontColor
      .info
        margin-top: 20px
</style>