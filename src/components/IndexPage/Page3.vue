<template>
	<div id="page3">
    <div class="title">
      <p>Skills</p>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in skills" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      skills: [
        '擁有 3 年 Vue2 開發經驗（Vue3、React 自學中）',
        '擁有 1 年使用 Cordova、Framework7，開發 Android、iOS App 的相關經驗',
        '精通 Html5、CSS3、JavaScript、jQuery、Bootstrap、RWD，可獨立完成切版',
        '精通 SCSS、Sass，善用變數、模組化語法開發及維護',
        '具有串接及管理 API（axios、 RESTful API）、使用UI 套件（Element UI、iView）與使用 HTML 模板語法（pug）的相關開發經驗',
        '使用 git flow 控管版線',
        '熟悉使用 Vuex 進行系統狀態管理',
        '熟悉使用 SQLite 語法存取 App 內暫存資料',
        '擁有 Web 串接實體掃描槍經驗',
        '串接 Firebase Crashlytics 等第三方工具',
        '因疫情關係，過去有長時間遠距上班經驗，能夠自律地完成工作',
        '2 項專案負責人，負責開發與維護、協助安排時程規劃、整合回饋提出優化事項、產品上線送審等',
        '帶領新同仁熟悉專案，包含技術指導、規範 coding style與協助code review'
      ]
    }
  }
}
</script>
<style lang="sass">
#page3
  background-color: $bgColor
  min-height: 100vh
  display: flex
  align-items: center
  flex-wrap: wrap
  .title
    flex: 1
    font-size: 10vh
    p
      margin: 20px
  .content
    flex: 3
    min-width: 375px
    padding-right: 20px
    ul
      max-width: 700px
      text-align: left
      margin: 0 auto
      padding: 20px 10px 20px 40px
      line-height: 26px
      li
        list-style-type: disc
</style>