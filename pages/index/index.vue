<template>
	<div class="header-bar">
		<img class="address-logo" src="/static/Images/Dark mode logo with text.png" 		  />
		<img class="dian-ico" src="/static/Images/Menu.svg"		  />
	 </div>
	 
	<uni-grid class="device-list" :column="2"  :square="false" :highlight="false" @change="change">
		<uni-grid-item v-for="(item, index) in 3 " :index="index" :key="index">
			<view class="grid-item-box">
				<div class="add-wrap">
				<img src="/static/Images/Add.svg" class="addico"   />
				</div>
				<text class="text">Add device</text>
			</view>
		</uni-grid-item>
	</uni-grid>
			 
				 
			 
		 
</template>

<script>
	export default {
		data() {
			return {
				 
			}
		},
		methods: {

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
</style>