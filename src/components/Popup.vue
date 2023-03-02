<template>
  <div id="popup">
    <div :class="['popup', visible ? 'is-visible' : '']">
      <div class="popup-container">
        <p>
					<slot></slot>
				</p>
        <ul class="buttons">
          <li @click="changeVisible(false)">
						<slot name="confirm"></slot>
					</li>
          <li @click="changeVisible(false)">
						<slot name="cancel"></slot>
					</li>
        </ul>
        <div class="popup-close" @click="changeVisible(false)"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
		return{
			visible: false
		}
  },
  mounted() {
  },
  methods: {
		changeVisible(visible){
			this.visible = visible
		}
  }
}
</script>
<style lang="sass">
#popup
	.popup 
		position: fixed 
		left: 0 
		top: 0 
		height: 100% 
		width: 100% 
		background-color: rgba(94, 110, 141, 0.9) 
		opacity: 0 
		visibility: hidden 
		-webkit-transition: opacity 0.3s 0s, visibility 0s 0.3s 
		-moz-transition: opacity 0.3s 0s, visibility 0s 0.3s 
		transition: opacity 0.3s 0s, visibility 0s 0.3s 
		&.is-visible
			z-index: 2002
			opacity: 1 
			visibility: visible 
			-webkit-transition: opacity 0.3s 0s, visibility 0s 0s 
			-moz-transition: opacity 0.3s 0s, visibility 0s 0s 
			transition: opacity 0.3s 0s, visibility 0s 0s 
	.popup-container 
		position: relative 
		width: 90% 
		max-width: 400px 
		margin: 10em auto 
		background: $bgColor
		border-radius: .25em .25em .4em .4em 
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.2) 
		-webkit-transform: translateY(-40px) 
		-moz-transform: translateY(-40px) 
		-ms-transform: translateY(-40px) 
		-o-transform: translateY(-40px) 
		transform: translateY(-40px) 
		-webkit-backface-visibility: hidden 
		-webkit-transition-property: -webkit-transform 
		-moz-transition-property: -moz-transform 
		transition-property: transform 
		-webkit-transition-duration: 0.3s 
		-moz-transition-duration: 0.3s 
		transition-duration: 0.3s 
		p 
			text-align: left
			padding: 3em 2em 
			line-height: 2em
		.buttons 
			&:after 
				content: "" 
				display: table 
				clear: both 
			li 
				float: left 
				width: 50% 
				height: 60px 
				line-height: 60px 
				text-transform: uppercase 
				color: #FFF 
				-webkit-transition: background-color 0.2s 
				-moz-transition: background-color 0.2s 
				transition: background-color 0.2s 
				cursor: pointer
				&:first-child 
					background: $secondaryColor
					border-radius: 0 0 0 .25em 
				&:last-child 
					color: $mainFontColor
					background: $infoColor
					border-radius: 0 0 .25em 0 
		.popup-close 
			position: absolute 
			top: 8px 
			right: 8px 
			width: 30px 
			height: 30px 
			cursor: pointer
			&::before 
				-webkit-transform: rotate(45deg) 
				-moz-transform: rotate(45deg) 
				-ms-transform: rotate(45deg) 
				-o-transform: rotate(45deg) 
				transform: rotate(45deg) 
				left: 8px 
			&::after 
				-webkit-transform: rotate(-45deg) 
				-moz-transform: rotate(-45deg) 
				-ms-transform: rotate(-45deg) 
				-o-transform: rotate(-45deg) 
				transform: rotate(-45deg) 
				right: 8px 
			&::before, &::after 
				content: '' 
				position: absolute 
				top: 12px 
				width: 14px 
				height: 3px 
				background-color: $mainColor
	.is-visible 
		.popup-container 
			-webkit-transform: translateY(0) 
			-moz-transform: translateY(0) 
			-ms-transform: translateY(0) 
			-o-transform: translateY(0) 
			transform: translateY(0) 
</style>