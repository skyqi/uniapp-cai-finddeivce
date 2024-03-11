<template>
	<view class="device-grid">
		<div class="header-bar ">
			<img class="address-logo" :src="'/static/Images/'+theme+'/logo with text.png'" />
			<view class="right">
				<em class='grid-ico1' v-if="!rowlist_mod" @click="rowlist_mod=!rowlist_mod"></em>
				<em class='grid-ico2' v-if="rowlist_mod" @click="rowlist_mod=!rowlist_mod"></em>
				<em class='dian-ico'></em>
			</view>
		</div>

		<uni-grid v-if="!rowlist_mod" class="device-list" :column="2" :square="false" :highlight="false">
			<uni-grid-item v-for="(item, index) in 4 " :index="index" :key="index">
				<view class="grid-item-box">
					<div class="product">
						<image src="/static/Images/Product  Image - white.png" class="addico"></image>
						<em @click="popHandle" class="product-dianico"></em>
					</div>
					<text class="text">Device Name</text>
					<text class="small">Connected 88%</text>
				</view>
			</uni-grid-item>
		</uni-grid>


		<view class="row-device-body" v-if="rowlist_mod">
			<uni-row class="row-device-row" v-for="i in 4">
				<uni-col :span="5">
					<view class="demo-uni-col device-ico">
						<image src="/static/Images/Product  Image - white.png"></image>
					</view>
				</uni-col>
				<uni-col :span="19">
					<view class="demo-uni-col row-device-col2">
						<text class="text">Device Name</text>
						<text class="small">Connected 88%</text>
						<em class="dian-ico" @click="popHandle"></em>
					</view>
				</uni-col>
			</uni-row>
		</view>

		<view class="btn-group">
			<uni-icons type="plusempty" size="30"></uni-icons>
			<button class="againbtn" @click="addDeviceHandel">Add device</button>
		</view>

		<!-- 底部弹窗 -->
		<uni-popup ref="popup" class="device-popup-wrap"
			style=" ">
			<view class="device-name-wrap">
				<view class="device-name-area">
					<image src="/static/Images/Product  Image - white.png" style="width:4rem;height: 4rem;"></image>
					<text class="device-name">DeviceName</text>
				</view>

				<view class="popup-content"><text class="text languagetxt">Change ringtone</text></view>

				<view class="popup-content theme"><text class="text themetxt">Out of range alert</text>
					<view class="dark">
						<text class="dark-text"></text>
						<view class="icon">
							<span><em></em></span>
						</view>
					</view>
				</view>


				<view class="popup-content" @click="unpairBntHandle">
					<text class="text abouttxt">Unpair devcie</text>
				</view>
			</view>
		</uni-popup>

		<view>
			<!-- ----- 1 bluetooth ----- -->
			<uni-popup ref="bluetoothPopup" class="bluetoothPopup">
				<view class="Unpair">
					<h3>Unpair DeviceName?</h3>
					<p>You will no longer be able to monitoryour Pulse through the app.</p>

					<view class="button-group">
						<ul>
							<li @click="canclebluetoothHandle">Cancle</li>
							<li @click="UnpairHandle">Unpair</li>
						</ul>
					</view>
				</view>
			</uni-popup>
		</view>

		<view class="pairing" v-if="visible_pairing">
			<RadialProgress class="progress" :diameter="60" :completed-steps="completedSteps" :total-steps="totalSteps"
				:startColor="'#db792f'" :stopColor="'#191918'" :innerStrokeColor="'#191918'" :strokeWidth="5"
				:innerStrokeWidth="5">
			</RadialProgress>
			<p>Unpairing</p>
		</view>

	</view>

</template>

<script>
	import RadialProgress from "vue3-radial-progress";
	import {
		getTheme
	} from '@/common/utils'; // 只导入特定的函数	
	export default {
		data() {
			return {
				rowlist_mod: false,
				visible_pairing: false,
				completedSteps: 0,
				totalSteps: 10,
				theme: getTheme(),
			}
		},
		components: {
			RadialProgress
		},
		methods: {
			addDeviceHandel: function() {
				// this.$refs.popup.open("bottom");
			},
			popHandle: function() {
				this.$refs.popup.open("bottom");
			},
			canclebluetoothHandle: function() {
				this.$refs.bluetoothPopup.close();
			},
			UnpairHandle: function() {
				this.$refs.bluetoothPopup.close();
				this.visible_pairing = true;
				this.completedHandle();

				setTimeout(function() {
					uni.navigateTo({
						url: '/pages/index/index'
					});
				}, 3000)
			},
			unpairBntHandle: function() {
				this.$refs.popup.close();
				this.$refs.bluetoothPopup.open("center");
				// setTimeout(function(){	
				// 	uni.navigateTo({
				// 	    url: '/pages/index/index'
				// 	});

				// },1000)
			},
			completedHandle() {
				let interval2 = setInterval(() => {
					if (this.completedSteps < this.totalSteps) {
						this.completedSteps++;
					} else {
						// 当完成的步骤等于总步骤时，清除定时器						 
						clearInterval(interval2);
					}
				}, 100); // 每秒更新一次
			},
		},
		mounted() {
			 
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

 	.uni-grid-item {}

	.uni-list[data-v-c2f1266a] {
		display: flex;
		background-color: var(--main-bg-color);
	}

	::v-deep .uni-grid-item--border {
		align-items: center;
		padding: 1rem;
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
		position: relative;
		border-radius: 100%;

	}

	.grid-item-box .addico {
		width: 8rem;
		height: 8rem;
	}

	.grid-item-box .dianico {
		width: 3rem;
		position: absolute;
		top: -7rem;
		z-index: 30;
		left: 6.5rem;
	}

 
	.device-list {
		position: absolute;
		z-index: 10;
		top: 7rem;
		width: 100vw;
	}

	.btn-group {
		color: black;
		position: fixed;
		bottom: 5%;
		width: 9rem;
		margin: 0 20px;
		z-index: 10;
		left: 50%;

	}

	.btn-group .uni-icons {
		position: absolute;
		top: .8rem;
		left: 1rem;
		width: 1rem;
		height: 1rem;
		z-index: 30;

	}

	.againbtn {
		background-color: #ee8332;
		text-align: right;
		padding-right: 20px;
		height: 3.5rem;
		line-height: 3.5rem;
		border-radius: 1rem;
	}

	.row-device-body {
		padding-top: 8rem;
		text-align: center;
		margin-left: 5%;
		margin-right: 0;
		width: 90%;
		border-radius: 10px;
	}

	.row-device-body .row-device-row {
		background-color: #333230;
		text-align: left;
		border-radius: 10px;
		margin-bottom: 1rem;
	}

	::v-deep .row-device-body .device-ico uni-image {
		height: 5rem;
		width: 5rem;
	}

	.row-device-body .row-device-col2 {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		position: relative;
		color: white;
	}

	.row-device-body .row-device-col2 .small {
		font-size: 12px;
	}

	.row-device-body .row-device-col2 .dian-ico {
		height: 3rem;
		position: absolute;
		left: 85%;
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



	.device-name-area {
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 1px solid #302e2e;

	}

	.bluetoothPopup {
		background-color: white;
	}


	.pairing {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 3.5rem;	 
		margin: 1.5rem;
		border-radius: 10px;
		position: absolute;
		width: 85%;
		top: 40%;
		z-index: 50;
	}



	::v-deep .pairing uni-image {
		width: 3rem;
		height: 3rem;
		border: 1px solid;
		margin-left: 1rem;
	}

	::v-deep .pairing p {
		margin-left: 1rem;
		 
	}
 
</style>