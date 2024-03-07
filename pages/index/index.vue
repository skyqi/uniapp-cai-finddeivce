<template>
	<div class="header-bar">
		<img class="address-logo" :src="'/static/Images/'+Theme+'/logo with text.png'" />
		<view class="dian-ico" @click="toggle('bottom')" ></view>
	</div>
	<!--  -----index.vue---------------- -->
	<uni-grid class="device-list" :column="2" :square="false" :highlight="false"  >
		<uni-grid-item v-for="(item, index) in 1 " :index="index" :key="index">
			<view class="grid-item-box" @click="show_allow">
				<div class="add-wrap"><em class="ico"></em></div>
				<text class="label">Add device</text>
			</view>
		</uni-grid-item>
	</uni-grid>
	 
	<!-- 底部弹窗 -->
	<uni-popup ref="popup" class="popup-wrap language-wrap" background-color="var(--language-wrap)"  >
		<view class="popup-content"><text class="text languagetxt" @click="languagePopupHandle">Language</text></view>
		<view class="popup-content"><text class="text abouttxt" @click="goAbout">About</text></view>
		<view class="popup-content theme"><text class="text themetxt">Theme</text>
			<view class="dark" @click="switchTheme">				 
				<view class="icon">
					<span><em></em></span>
				</view>
			</view>
		</view>
	</uni-popup>

	<!-- 居中弹窗 -->
	<uni-popup ref="popupfind" class="popupfind"  style="background-color:#f7f7f7">
		<view class="popup-content" style="background-color:#f7f7f7">
			<img class="icon" src="http://via.placeholder.com/10x10" />
		</view>
		<view class="popup-content" style="background-color:#f7f7f7" >
			<text class="text size-dot-8" style="text-align: left;color:#000000">
				Allow Pulse to find,connect to and determine the relative position on nearby devices?
			</text>
		</view>
		<view class="popup-content" @click="allowHandle" style="background-color:#f7f7f7">
			<text class="text co-blue ">Allow</text>
		</view>
		<view class="popup-content  " @click="donitallowHandle" style="background-color:#f7f7f7">
			<text class="text  co-blue ">Donit allow</text>
		</view>
	</uni-popup>

	<view>
		<!-- Select app language 弹窗 -->
		<uni-popup ref="languagePopup" class="languagePopup" background-color=" ">
			<view class="example language">
				<h3>Select app language</h3>
				<uni-forms ref="baseForm" :modelValue="baseFormData">
					<uni-forms-item>
						<uni-data-checkbox v-model="lang" :localdata="langs" />
					</uni-forms-item>

				</uni-forms>

				<view class="button-group">

					<li @click="langCanclehandel">Cancle</li>
					<li @click="langCanclehandel">Confirm</li>

				</view>
			</view>
		</uni-popup>
	</view>

</template>

<script>
	import $themeConf from '@/common/config';
	import { getTheme } from '@/common/utils'; // 只导入特定的函数

	const Theme = getTheme()
	// document.body.style.backgroundColor = $themeConf[Theme]['body-bg-color'];
	console.log(Theme)
	export default {
		data() {
			return {
				langs: [{
					text: 'English',
					value: 0
				}, {
					text: 'Espanol',
					value: 1
				}, {
					text: 'Francais',
					value: 3
				}, {
					text: 'Itailano',
					value: 2
				}],
				// themeConf:$themeConf[Theme],
				Theme:getTheme()
			}
		},
		methods: {
			toggle() {
				this.$refs.popup.open('bottom')
			},
			show_allow() {
				this.$refs.popupfind.open('center')
			},
			donitallowHandle() {
				this.$refs.popupfind.close()
			},
			allowHandle() {
				this.$refs.popupfind.close()
				uni.navigateTo({
					url: '/pages/adddevice/adddevice'
				});
			},
			langCanclehandel() {
				this.$refs.languagePopup.close()
			},
			languagePopupHandle() {
				this.$refs.languagePopup.open('center')
			},
			goAbout() {
				uni.navigateTo({
					url: '/pages/about/about'
				});
			},
			switchTheme() {	
				let theme = localStorage.getItem('theme');
				if (!theme) {
					localStorage.setItem('theme','light');
				}else if (theme=='dark') {
					localStorage.setItem('theme','light');
				}else {
					localStorage.setItem('theme','dark');
				}
				 window.location.reload();
			}
		},
		mounted() {
			// let theme = getTheme(); // 调用公共函数			
			 
			console.log(this.themeConf);
		}
	}
</script>

<style >
	.text {
		font-size: 14px;
		margin-top: 5px;
	}

	.example-body {}

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



 

	.device-list {
		position: absolute;
		z-index: 10;
		top: 7rem;
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
	

	::v-deep .popupfind .uni-popup__wrapper {
		width: 20rem;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	::v-deep .popupfind .popup-content {
		border-bottom: 1px solid #e3e3e3;
		display: block;
		width: 90%;
		text-align: center;
	}

	::v-deep .popupfind .popup-content:first-child {
		border: 0px;

	}


	::v-deep .popupfind .uni-popup__wrapper .text {
		margin: 1rem;
		display: block;

	}

	::v-deep .popupfind .uni-popup__wrapper .icon {
		width: 20px;
		margin-top: 10px;
	}

	.popupfind .text {}

	.co-blue {
		color: #5396ed;
	}

	.size-dot-8 {
		font-size: 0.825rem;
	}

	::v-deep .uni-section {
		background-color: var(--main-bg-color);


	}

	::v-deep .uni-section .uni-section-header__content .distraction span {
		font-size: 16px;
		margin-left: 20px;
		color: white;
	}

	.unable {
		position: absolute;
		left: 0px;
		/* top: 50%;
			left: 45%;
			transform: translate(-50%, -50%); */
		width: 100%;
		display: flex;
		flex-direction: column;
		top: 60%;
		align-items: center;
		background-color: transparent;
	}

	.unable li {
		color: white;
		margin-bottom: .5rem;
		display: block;
		text-align: center;
	}

	.unable small {
		color: #a15621;
	}

	  ::v-deep .uni-section .uni-section-header__content .distraction span::before {
	  	content: '';
	  	position: absolute;
	  	left: 2%;
	  	top: 35%;
	  	overflow: hidden;
	  	zoom: 1;
	  	width: 0.7rem;
	  	height: 0.7rem;
	  	text-indent: -99999px;
	  	border-left: 0.1rem solid #b2b2b2;
	  	border-top: 0.1rem solid #b2b2b2;
	  	transform: rotate(-45deg);
	  	-0-transform: rotate(-45deg);
	  	-moz-transform: rotate(-45deg);
	  	-webkit-transform: rotate(-45deg);
	  }

	::v-deep .permission .uni-list-item__extra-text {
		color: #a15621;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: flex-end;
	}


	.button-group li {
		list-style: none;
		color: #a15621;
		margin: 0 10px;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
	}

	::v-deep .uni-data-checklist .checklist-group {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}

	::v-deep .uni-data-checklist .checklist-group .checklist-box {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		margin: 5px 0;
		margin-right: 25px;
		height: 40px;
	}

	::v-deep .uni-data-checklist .checklist-group .checklist-box .checklist-content .checklist-text {
		margin-left: 10px;
	}


	::v-deep .uni-popup .uni-popup__wrapper {
		border-radius: 20px;
		margin: 5%;
		width: 70%;
	}

	
	::v-deep .uni-table {
		background-color: var(--main-bg-color);
		padding: 10px;
	}

	::v-deep .uni-table-td {
		border-bottom: 1px #5f6163 solid;
		font-weight: 400;
		height: 50px;
	}

	.devicel_value {
		color: #a15621;
	}

	.flatline {
		display: flex;
		justify-content: center;
	}

	.againbtn {
		background-color: #ee8332;
		color: black;
		position: fixed;
		bottom: 5%;
		width: 90%;
		margin: 0 20px;
		z-index: 10;
	}

	.device_select {
		display: flex;
		flex-direction: column;
		margin-top: 10rem;
	}

	.device_select h3 {
		color: white;
		display: inline-block;
		text-align: center;
	}

	.device_select .select-bar {
		color: white;
		display: flex;
		justify-content: space-between;
		background-color: #333230;
		margin: 20px;
		padding: 20px;
		border-radius: 10px;
	}

	.device_select text {
		color: #ee8332;
	}

	.pairing {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 3.5rem;
		background-color: #262524;
		margin: 1.5rem;
		border-radius: 10px;
		position: absolute;
		width: 85%;
		top: 40%
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

	::v-deep .bluetoothPopup .uni-popup__wrapper {
		background-color: transparent !important;
	}

/* 	.languagePopup ::v-deep.uni-popup .uni-popup__wrapper {} */
	
	::v-deep .unpairBtn {font-size:14px}
	
	
	.grid-item-box {
		background-color: var(--bg-device);
	}
	
	/* ::v-deep .uni-popup .uni-popup__wrapper {
		background-color: #f7f7f7 !important;
	} */
</style>