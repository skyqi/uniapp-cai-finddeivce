<template>
	<div class="header-bar">
		<img class="address-logo" src="/static/Images/Dark mode logo with text.png" 		  />
		<img class="dian-ico" src="/static/Images/Menu.svg"	@click="toggle('bottom')"	  />
	 </div>
	 
	<uni-grid class="device-list" :column="2"  :square="false" :highlight="false" @change="change">
		<uni-grid-item v-for="(item, index) in 1 " :index="index" :key="index">
			<view class="grid-item-box">
				<div class="add-wrap">
				<img src="/static/Images/Add.svg" class="addico"   />
				</div>
				<text class="text">Add device</text>
			</view>
		</uni-grid-item>
	</uni-grid>
			 
				 
	<!-- 底部弹窗 -->
	<uni-popup ref="popup" class="popup-wrap" background-color="#262524" @change="change">
		<view class="popup-content" ><text
				class="text languagetxt">Language</text></view>
		<view class="popup-content" ><text
				class="text abouttxt">About</text></view>
		<view class="popup-content theme"><text
				class="text themetxt">Theme</text>
				<view class="dark">
					<text class="dark-text">Dark</text>
					<view class="icon">
						<span><em></em></span>
					</view>
				</view>
		</view>
	</uni-popup>		 
	
	<!-- 居中弹窗 -->
	<uni-popup ref="popupfind" class="popupfind" background-color="#ffffff" @change="change">
		<view class="popup-content" >
			<img class="icon" src="http://via.placeholder.com/10x10" />
		</view>
		<view class="popup-content" >
			<text class="text size-dot-8" style="text-align: left;">
				Allow Pulse to find,connect to and determine the relative position on nearby devices?
			</text>
		</view>
		<view class="popup-content" >
			<text class="text co-blue ">Allow</text>
		</view>
		<view class="popup-content  ">
			<text class="text  co-blue ">Donit allow</text>				
		</view>
	</uni-popup>
		 
</template>

<script>
	export default {
		data() {
			return {
				type:'bottom' 
			}
		},
		methods: {
			toggle() {
				let type = 'bottom' 
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			},
		},
		mounted() {
			// this.$refs.popup.open('bottom' )
			this.$refs.popupfind.open('center')
		}
	}
</script>

<style lang="scss">
	 

	.text {
		font-size: 14px;
		margin-top: 5px;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		// display: block;
		/* #endif */
	}

	.grid-dynamic-box {
		margin-bottom: 15px;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		background-color: #262524;
		width: 8rem;
		    border-radius: 10px;
	}

	.grid-item-box-row {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
		
	}
	
	.uni-grid-item {
		
	}
	
	.uni-list[data-v-c2f1266a] {
	    display: flex;
	    background-color: var(--main-bg-color);
	}
		
	::v-deep  .uni-grid-item--border {
		align-items: center;
		padding:1rem;
		border: 0px;
	}
	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}

	.swiper {
		height: 420px;
	}
		 
	.grid-item-box .add-wrap {
		background-color: #3b3a39;
		border-radius: 100%;
		margin-top: 1rem;
		
	}
	.grid-item-box .addico {
		width: 3rem;
		height: 3rem;
	}
	.grid-item-box .text {
		color:white;
		height: 3rem;
		    line-height: 4rem;
	}
	 
	 
	 .header-bar{
		 display: flex;
		 background-color: #191918;
		 justify-content: space-between;
		 height: 8rem;
		 line-height: 8rem;
		 align-items: center;
		 position: fixed;
		 left:0px;
		 z-index:50;
		 width: 100vw;
	 }
	 .header-bar .address-logo{
		 height: 2rem;
		 margin-left: 1rem;
	 }
	 .header-bar .dian-ico{
		 margin-right: 1rem;
	 }
	 
	 

	.device-list {
		position: absolute;
		z-index:10;
		top:7rem;
		width: 100vw;
	}


	/* #ifdef H5 */
	@media screen and (min-width: 768px) and (max-width: 1425px) {
		.swiper {
			height: 630px;
		}
	}

	@media screen and (min-width: 1425px) {
		.swiper {
			height: 830px;
		}
	}

	/* #endif */
	.popup-wrap  {
		background-color:#262524 ; 
		color:white;
	}
	
	.popup-wrap .popup-content{
		margin: 1rem;
	}
	
	.popup-wrap  .theme {
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		
	}
	
	.popup-wrap .dark{
		    display: flex;
		    flex-direction: row;
		    align-items: center;
	}
	
	.popup-wrap .text{
		margin-left:30px;
		position: relative;
	}
	
	.popup-wrap .languagetxt::before{
		content: "";
		    background-image: url(/static/Images/Language.svg);
		    width: 30px;
		    height: 30px;
		    display: inline-block;
		    background-repeat: no-repeat;
		    position: absolute;
		    top: 0px;
		    left: -30px;
	}
	
	.popup-wrap .abouttxt::before{
		content: "";
		background-image: url(/static/Images/info.svg);
		width: 30px;
		height: 30px;
		display: inline-block;
		background-repeat: no-repeat;
		position: absolute;
		top: 0px;
		left:-30px;
	}
	
	.popup-wrap .themetxt::before{
		content: "";
		background-image: url(/static/Images/dark_mode.svg);
		width: 30px;
		height: 30px;
		display: inline-block;
		background-repeat: no-repeat;
		position: absolute;
		top: 0px;
		left: -30px;
	}
	
	
	.popup-wrap .dark .dark-text{
		    margin-right: 10px;
	}
	
	.popup-wrap .dark .icon {
		width: 3.2rem;
		    height: 1.8rem;
		    background-color: #e6ab7f;
		    position: relative;
		    text-align: right;
		    border-radius: 20px;
	}
	.popup-wrap .dark span {
		width: 1.5rem;
		    height: 1.5rem;
		    background-color: #ee8332;
		    position: absolute;
		    text-align: right;
		    border-radius: 20px;
		    display: inline-block;
		    left: 28px;
		    top: 3px;
	}
	
	 
		
	.popup-wrap .dark span em{
		position: absolute;
		width: 1rem;
		height: 1rem;
		background-color:white;
		display: inline-block;
		z-index:5;
	    mask: url("/static/Images/dark_mode.svg");
		left: 4px;
		top: 4px;
	}
	
	::v-deep  .popupfind .uni-popup__wrapper {
		width:20rem;
		border-radius: 1rem;
		    display: flex;
		    flex-direction: column;
		    align-items: center;
	}
	
	::v-deep  .popupfind .popup-content {
		border-bottom: 1px solid #e3e3e3;
		display: block;
		width: 90%;
		text-align: center;		
	}
	
	::v-deep  .popupfind .popup-content:first-child {
		border : 0px;
		 
	}
	
	
	::v-deep  .popupfind .uni-popup__wrapper .text {
		margin:  1rem;
		display:  block;
		
	}
	
	::v-deep  .popupfind .uni-popup__wrapper  .icon{
		width:20px;
		margin-top: 10px;
	}
	
	.popupfind .text{
		
	}
	
	.co-blue {
		color:#5396ed;
	}
	.size-dot-8 {
		font-size: 0.825rem;
	}
</style>