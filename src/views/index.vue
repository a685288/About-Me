<template>
	<div id="index">
		<div class="content">
			<div class="card">
				<img src="@/assets/img/me.jpg" alt="" srcset="">
				<div class="name">劉佩穎</div>
				<div class="line"></div>
				<div class="position">前端工程師</div>
			</div>
			<ul class="info">
				<li v-for="(item, index) in info" :key="index">{{ item }}</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	data(){
    return{
      info: [
        '擁有 3 年以上 Web、App 開發經驗',
        '擁有 3 年以上 Vue 開發經驗',
				'因疫情關係，過去有長時間遠距上班經驗，能夠自律地完成工作',
				'多項專案負責人，負責開發與維護、協助安排時程規劃、整合回饋提出優化事項',
				'帶領新同仁熟悉專案，包含技術指導與 coding style 規範'
      ]
    }
  },
}
</script>
<style lang="sass">
#index
	.content
		min-height: calc( 100vh - 148px )
		display: flex
		flex-wrap: wrap
		align-items: center
		@include pad
			width: 100vw
		.card
			background-color: #EBE3DB
			width: 300px
			height: 400px
			box-shadow: 0 1px 4px rgba(0,0,0,.6)
			position: relative
			left: 20vw
			border-radius: 10px
			margin: 30px
			@include pad
				margin: 30px auto
				left: 0
			img
				margin: 40px
				width: 160px
				border-radius: 50%
			.name
				margin: 15px
				font-size: 36px
				font-weight: bold
			.line
				background-color: #fff
				height: 2px
				width: 40px
				margin: 0 auto
			.position
				margin-top: 20px
				font-size: 22px
		.info
			position: relative
			left: 26vw
			text-align: left
			line-height: 28px
			width: 400px
			@include pad
				width: 300px
				left: 0
				padding: 40px
			li
				list-style-type: disc

</style>