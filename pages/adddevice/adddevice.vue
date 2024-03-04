<template>
	<view class="permission">
		<uni-section class="mb-10 section" title="Add device">
		</uni-section>

		<view class="unable" @click="openPopup" v-if="tips.title" >	
			<view class="unable_inwrap">
				<li>{{tips.title}}</li>
				<small v-if="tips.txt">{{tips.txt}}</small>
			</view>
		</view>
		
		<view>
			<!-- ----- 1 ----- -->
			<uni-popup ref="popup" class="popup" background-color="#fff" @change="change">
				<view class="example">
					<h3>Turn on Bluetooth?</h3>
					<p>Pulse requires Bluetooth to scan for new devices</p>
 
					<view class="button-group">
						 
							<li @click="canclehandel"  >Cancle</li>
							<li @click="trunhandel">Trun on</li>
					 
					</view>
				</view>
			</uni-popup>
		</view> 
		
		<view>
			<!-- ----- 2 ----- -->
			<uni-popup ref="popup_pair" class="popup-pair" background-color="#fff"  >
				<view class="example">
					<h3>Pair with DeviceName?</h3>					
					<view class="button-group">						 
							<li @click="canclePairhandel()"  >Cancle</li>
							<li @click="Pairhandel">Pair</li>
					 
					</view>
				</view>
			</uni-popup>
		</view> 
		
		 
		<view class="pairing" v-if="visible_pairing" >			
			<uni-icons type="spinner-cycle" size="50"></uni-icons>
			<p>Pairing</p>
		</view>
		 

		<view class="flatline" v-if="visible_flat">
			<image :src="flatimg"></image>  
		</view>
		
		<view class="device_select" v-if="visible_device_select">
			<h3>Device found</h3>
			<div class="select-bar" @click="show_device_select">
				<label>DeviceName</label>
				<text>Select</text>
			</div>
		</view>
		
		<view v-if="visible_trydevice">
			<button class="againbtn"   @click="againSubmit">Try again</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips: {
					title:'Unable to Scan',
					txt:'Turn on Bluetooth'
				},
				visible_flat:false,
				visible_trydevice:false,
				visible_device_select:false,
				visible_pairing:false,
				flatimg:'/static/gifs/flatline- dark mode.gif',
			}
		},
		methods: {
			change: function() {

			},
			 
			canclehandel:function() {
				this.$refs.popup.close() 
				return false;
			},
			canclePairhandel:function() {
				this.$refs.popup_pair.close()
			},
			openPopup:function() {
				this.$refs.popup.open('center')
			},
			trunhandel:function() {
				this.visible_flat = true;
				this.tips.title ='Scanning...',
				this.tips.txt='Searching for devices'
				let _this = this;
				setTimeout(function(){
					_this.tryDevice();
				},1000)
				 
			},
			tryDevice:function() {
				this.visible_flat = true;
				this.tips.title ='No devices found',
				this.tips.txt='Make sure your device is chargedand within range'
				this.visible_trydevice  = true;
				 
			},
			againSubmit:function() {
				this.flatimg = "/static/gifs/Device Found - Dark mode.gif";
				this.visible_device_select = true;
				this.visible_trydevice = false;
				this.tips.title = '';
				 
			},
			show_device_select:function() {
				this.visible_pairing = true;
			}
		},
		mounted() {
			 
		}
	}
</script>

<style>
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
		left:0px;
		/* top: 50%;
		left: 45%;
		transform: translate(-50%, -50%); */
		width: 100%;
		display: flex;
		flex-direction: column;		 
		top:60%; 
		align-items: center;
		background-color: transparent;
	}
	
	.unable li { color:white;margin-bottom:.5rem; display: block;text-align: center;}
	.unable small {color: #a15621;}

	/* ::v-deep .uni-list-item {
		background-color: transparent !important;
	}

	::v-deep .uni-list-item__container {
		background-color: var(--main-bg-color);

	}

	::v-deep .uni-list-item__content-title span {
		color: white;
	}

	::v-deep .uni-list--border-top {
		background-color: transparent;

	}

	::v-deep .uni-list--border-bottom {
		background-color: transparent;
	}
 */
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

	.left-arrow {
		position: absolute;
		left: 6%;
		top: 50%;
		overflow: hidden;
		zoom: 1;
		width: 0.4rem;
		height: 0.4rem;
		text-indent: -99999px;
		border-left: 0.1rem solid #b2b2b2;
		border-top: 0.1rem solid #b2b2b2;
		transform: rotate(-45deg);
		-0-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
	}


	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group  {
		margin-top: 15px;
		display: flex;	  
		justify-content: flex-end;
	}

 
	.button-group li { list-style: none;  color: #a15621;
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

	 
	
	.example {
		padding: 15px;
		background-color: #262524;
		border-radius: 20px;
		margin: 10px;
	}
 

	.example h3,p {
		color: white;
		margin-bottom: 10px;
	}

	::v-deep .uni-popup .uni-popup__wrapper {
		background-color: #262524 !important;
		border-radius: 20px;
		margin: 5%;
	}

	::v-deep .example .uni-link {
		width: 5rem;
		display: inline-block;
		text-align: right;
		color: #d0702b !important;
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
		z-index:10;
	}
	
	.device_select {
		display: flex;
		flex-direction: column;
		margin-top: 10rem;
	}
	
	.device_select h3{
		color:white;
		display: inline-block;
		text-align: center;
	}
	
	.device_select .select-bar {
		color:white;
		display: flex;
		justify-content: space-between;
		background-color:#333230;
		margin: 20px;
		padding: 20px;
		border-radius: 10px;
	}
	.device_select  text{
		color:#ee8332;
	}
	
	.pairing {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 3.5rem;
		background-color:#262524 ;
		margin: 1.5rem;
		border-radius: 10px;
		position: absolute;
		width: 85%;
		top:40%
	}
	
	 
	
	::v-deep .pairing uni-image{ width: 3rem; height: 3rem; border: 1px solid; margin-left:1rem;}
	::v-deep .pairing p{margin-left:1rem;}
</style>