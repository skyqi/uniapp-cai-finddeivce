<template>
	<view class="settings">
		<uni-section class="mb-10 section" title="Device settings">
			<span @click='returnHandle'>
			  <em class="nav-arrow"></em>
			</span>
		</uni-section>


		<view class="device-items" style="margin-top: 2rem;">
			<ul @click="renameHandle">
				<li>Name</li>
				<li>
					DeviceName
				</li>
			</ul>
			<ul @click="ringtoneHandle">
				<li>Ringtone</li>
				<li class="txt">Tone</li>
			</ul>
			<ul>
				<li>Device colour </li>
				<li class="txt">White</li>
			</ul>
			<ul @click="updateHandle">
				<li>Device update</li>
				<li class="ico">
					<image src="/static/Images/Forward Arrow.svg"></image>
				</li>
			</ul>
			<ul @click="locateHandle()" style="border-bottom: 0px;">
				<li style="margin-top: .8rem;">Out of range alert</li>
				<li class="ico" @click="switchThemem">
					<view class="dark">
						<view class="icon">
							<span><em></em></span>
						</view>
					</view>
				</li>
			</ul>

			<p class="alerted" style="margin:1rem 1rem 2rem 2rem;font-size:12px;">
				Be alerted when your phone moves out of range of yourpulse unit
			</p>
			<button class="unpairBtn">Unpair device</button>


		</view>

		<view>
			<!-- 弹窗 -->
			<uni-popup ref="devPopup" class="devPopup"  >
				<view class="devPopup-inbox">
					<h3>Rename Device</h3>
					<uni-forms ref="baseForm" :modelValue="baseFormData">
						<uni-forms-item>
							<uni-easyinput class="renamedevice-input" placeholder="DeviceName" />
						</uni-forms-item>
					</uni-forms>

					<view class="button-group">
						<li @click="canclehandel">Cancle</li>
						<li @click="canclehandel">Confirm</li>
					</view>
				</view>
			</uni-popup>
		</view>

<view>
			<!-- 弹窗 -->
			<uni-popup ref="ringtonePopup" class="ringtone-select"  >
				<uni-forms ref="baseForm" class="ringtone-Form" >
					<uni-forms-item class="ringtone-Form-item" >
						<uni-data-checkbox class="ringtone-data-checkbox" :localdata="tones" />
					</uni-forms-item>
				
				</uni-forms>
			</uni-popup>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tones: [
					{text: 'Tone',value: 0},{text: 'Tone',value: 1},
					{text: 'Tone',value: 2},{text: 'Tone',value: 3},	
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Toness',value: 0},								
				]
			}
		},
		methods: {
			returnHandle() {
				uni.navigateTo({
					url: '/pages/index/index'
				});
			},
			renameHandle() {
				this.$refs.devPopup.open("center")
			},
			canclehandel() {
				this.$refs.devPopup.close()
			},
			updateHandle() {
				uni.navigateTo({
					url: '/pages/device_update/device_update'
				});
			},
			ringtoneHandle() {
				this.$refs.ringtonePopup.open("bottom")
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
			
		}
	}
</script>

<style>
	.dark {
		margin-left: 40%;
		margin-top: .5rem;
	}

	.dark span {
		left: 25px;
	}

	.dark span em {
		mask: url(/static/Images/Active.svg);
	}

	.device-items {
		font-size: 14px;
	}

	.device-items li:nth-child(2) {
		color: #ee8332;
		text-align: right;
	}


	.unpairBtn {
		margin: 2rem;
		background-color: transparent;
		color: #ee8332;
		border: 1px solid #ee8332;
	}

	/* ::v-deep .uni-popup .uni-popup__wrapper {		 
		border-radius: 10px;
		background-color: #262524 !important;
		padding-bottom:  0px;		
	}

	::v-deep .uni-popup .uni-popup__wrapper h3 {
		color: white;
		text-align: left;
		margin: .5rem;
	}

	::v-deep .uni-easyinput__content-input {
		background-color: #333230;
		margin: 20px;
		border-bottom: 1px solid #ee8332;
	} */

	::v-deep .is-input-border {
		border: 0;
		margin: 0;
		background-color: transparent !important;
	}

	.button-group {
		margin-bottom: 1rem;
	}

	.ringtone_select {
		padding-top: 1rem;
		background: #252525;
		border-radius: 30px;

	}

	::v-deep .uni-data-checklist .checklist-group {
		display: flex;
		flex-direction: column;
	}

	::v-deep .uni-forms-item__content {}

	::v-deep .uni-data-checklist .checklist-group .checklist-box {
		padding-left: 1rem;
		margin: 0rem;
	}

	::v-deep .uni-data-checklist .checklist-group .checklist-box .radio__inner {}

	::v-deep .uni-data-checklist .checklist-group .checklist-box .checklist-content .checklist-text {
		border-bottom: 1px solid #5a5a5a;
		padding-bottom: 1rem;
		padding-top: 1rem;
		width: 100%;
		color: white;
		padding-left: 1rem;
	}

	/deep/ .uni-data-checklist .checklist-group .checklist-box:last-child .checklist-content .checklist-text {
		/* border-bottom: 0px; */
	}
	
	/deep/ .uni-forms-item {
		position: relative;
		display: flex;
		z-index: 50;
		padding-bottom: 0px;
		margin-bottom:0px;
	}
	
	
	
</style>