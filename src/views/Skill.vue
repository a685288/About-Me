<template>
	<div id="skill">
    <div class="group">
      <div class="level">
        <div class="level-1">剛接觸</div>
        <div class="dot">•</div>
        <div class="dot">•</div>
        <div class="dot">•</div>
        <div class="level-5">精通</div>
      </div>
      <div v-for="(item, index) in skill" :key="index" class="skill">
        <div class="name">{{ item.name }}</div>
        <div class="progress">
          <div :class="['progress-bar', 'level-'+item.degree]"></div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <ul class="info">
      <li v-for="(item, index) in info" :key="index">{{ item }}</li>
    </ul>
    <div class="card"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      skill: [
        {
          name: 'Html',
          degree: '5'
        },
        {
          name: 'CSS',
          degree: '5'
        },
        {
          name: 'JavaScript',
          degree: '4'
        },
        {
          name: 'JQuery',
          degree: '3'
        },
        {
          name: 'Vue',
          degree: '4'
        },
        {
          name: 'Bootstrap',
          degree: '3'
        },
        {
          name: 'Cordova',
          degree: '3'
        },
        {
          name: 'Framework7',
          degree: '3'
        },
        {
          name: 'SQLite',
          degree: '2'
        }
      ],
      info: [
        '擁有 3 年以上 Vue 開發經驗',
        '擁有 3 年以上 Vue 開發經驗',
        '精通 Html5、CSS3、JavaScript、jQuery、Bootstrap、RWD，可獨立完成切版',
        '熟悉 Cordova、Framework7，開發 Android、iOS App',
        '精通 SCSS、Sass，善用變數 Variables、模組化（Import、Extend、Mixin、Functions）開發及維護',
        '串接及管理 API：axios、 RESTful API',
        'UI 套件：Element UI、iView',
        'HTML模板語法：pug',
        '使用 git flow 控管版線',
        '串接 Firebase Crashlytics 等第三方工具'
      ]
    }
  }
}
</script>
<style lang="sass">
#skill
  min-height: calc( 100vh - 148px )
  .group
    width: 500px
    margin: 40px auto
    .level
      display: flex
      margin-left: 100px
      > div
        flex: 1
        text-align: right
        color: $secondaryColor
        font-weight: bold
    .skill
      display: flex
      margin: 20px 0
      align-items: center
      .name
        min-width: 100px
        text-align: left
      .progress 
        height: 20px
        width: 400px
        border-radius: 20px
        border: 3px solid $bgColor
        padding: 2px
        .progress-bar
          height: 100%
          border-radius: 20px
          &.level-1
            width: 20%
            background-color: #EBE3DB
          &.level-2
            width: 40%
            background-color: $infoColor
          &.level-3
            width: 60%
            background-color: $mainColor
          &.level-4
            width: 80%
            background-color: $subColor
          &.level-5
            width: 100%
            background-color: #694d42
  .line
    background-color: $secondaryColor
    height: 2px
    width: 40px
    margin: 20px auto
  .info
    text-align: left
    width: 600px
    margin: 0 auto
    padding: 20px
    line-height: 26px
    li
      list-style-type: disc
</style>