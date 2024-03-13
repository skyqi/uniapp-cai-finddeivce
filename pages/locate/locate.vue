<template>
	<view :class="themeCss" tag="themeCss">
		<div class="cpage">
			<view class="device-page">
				<uni-section class="mb-10 section" title="">
					<span @click='returnHandle'><em class="nav-img"></em></span>
				</uni-section>

				<h3>Locate your device</h3>
				<img class="loading" :src="'./static/gifs/'+theme+'/Radar-E.gif'" />

				<view class="btn-group">
					<button class="btn ring" @click="ringingHandle">Ring your Pulse</button>
					<button class="btn turn" @click="locatorHandle()">Turn off locator</button>
				</view>

				<view>
					<!-- 普通弹窗 -->
					<uni-popup ref="popup" class="popup" @change="change">
						<view class="popup_inbox">
							<h3>Ringing...</h3>

							<image class="popup_img" :src="'./static/gifs/'+theme+'/ringing.gif'"></image>

							<view class="button-group">
								<button @click="closepopup">Stop</button>
							</view>
						</view>
					</uni-popup>
				</view>

			</view>
		</div>
	</view>
</template>

<script>
	import {
		getTheme
	} from '@/common/utils'; // 只导入特定的函数	 
	const Theme = getTheme()
	export default {
		data() {
			return {
				theme: getTheme(),
				themeCss: getTheme() + 'Theme'
			}
		},
		methods: {
			ringingHandle() {
				this.$refs.popup.open('bottom')
			},
			closepopup() {
				this.$refs.popup.close()
			},
			locateHandle() {

			},
			returnHandle() {
				uni.navigateBack();
			},
			locatorHandle() {
				uni.navigateTo({
					url: '/pages/device_page/device_page'
				});
			}
		},
		mounted() {

		}
	}
</script>

<style>
	::v-deep .uni-section .nav-img {
		width: 1.5rem;
	}

	h3 {
		margin-top: 3rem;
		color: white;
		display: block;
		text-align: center;
		font-size: 18px;
	}

	.btn-group {
		color: black;
		position: fixed;
		bottom: 10%;
		width: 90%;
		margin: 0 5%;
		z-index: 10;

	}

	.btn-group .btn {
		margin: 2rem;
		background-color: #ee8332;
		font-size: 14px;
		padding: 0.3rem;
	}

	.btn-group .btn.turn {
		margin: 2rem;
		background-color: transparent;
		border: 1px solid #ee8332;
		color: #ee8332;
	}

	.btn-group .ring:after {
		content: '';
		position: absolute;
		background-image: url(/static/Images/Ring.svg);
		width: 3rem;
		height: 3rem;
		top: 0.8rem;
		background-size: contain;
		left: 3rem;
		border: 0px;
	}

	.device-page .loading {
		height: 15rem;
		display: block;
		text-align: center;
		margin: 0 auto;
		margin-top: 3rem;
	}

	.popup {
		background-color: #262524;
	}

	::v-deep .uni-popup .uni-popup__wrapper {
		background-color: #262524 !important;
	}

	::v-deep uni-image {
		width: 5rem;
	}

	.popup_inbox {
		text-align: center;
	}

	.popup_inbox h3 {
		color: white;
		padding-top: 1rem;
	}

	.popup .button-group {
		padding-bottom: 2rem;
	}

	.popup .button-group button {
		background-color: #ee8332;
		width: 40%;
	}



	.popup_inbox .popup_img {
		display: flex;
		justify-content: center;
		width: 10rem;
		height: 10rem;
		margin-left: 28%;
	}
</style>