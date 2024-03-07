<template>
	<view class="permission pageview">
		<uni-section class="mb-10 section" title="Add device">
			<span @click='returnHandle'>
				<em class="nav-arrow"></em>
			</span>
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
				<view class="bluetooth-wrap">
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
				<view class="pairdevice">
					<h3>Pair with DeviceName?</h3>					
					<view class="button-group">						 
							<li @click="canclePairhandel()"  >Cancle</li>
							<li @click="Pairhandel">Pair</li>					 
					</view>
				</view>
			</uni-popup>
		</view> 
		 
		<view class="pairing" v-if="visible_pairing" >			
			
			<RadialProgress class="progress"  
			  :diameter="60"
			  :completed-steps="completedSteps"
			  :total-steps="totalSteps"
			   :startColor="'#db792f'"
			   :stopColor="'#191918'"
			   :innerStrokeColor="'#191918'"
			   :strokeWidth = "5"
			   :innerStrokeWidth="5"	
			   >			   
			</RadialProgress>
			 
			<p>Pairing</p>
		</view>
		 
		<view class="flatline" v-if="visible_flat">
			<image :src="flatimg"></image>  
		</view>
		
		<view class="device_select" v-if="visible_device_select">
			<h3>Device found</h3>
			<div class="select-bar" @click="show_device_select">
				<label>DeviceName</label>
				<text style="color:#ee8332;">Select</text>
			</div>
		</view>
		
		<view v-if="visible_trydevice">
			<button class="againbtn"   @click="againSubmit">Try again</button>
		</view>
	</view>
</template>

<script>
	import RadialProgress from "vue3-radial-progress";
	import { getTheme } from '@/common/utils'; // 只导入特定的函数
	
	const Theme = getTheme()
	
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
				// flatimg:'/static/gifs/flatline- dark mode.gif',
				flatimg:'',
				
				completedSteps:0,
				totalSteps :10,
				// strokeWidth:5,
				// innerStrokeWidth:5,
			}
		},
		components: {
		    RadialProgress
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
			Pairhandel:function() {
				this.$refs.popup.close()
				this.visible_pairing = true;
				this.completedHandle();
				setTimeout(function(){
					uni.navigateTo({
						url: '/pages/device_page/device_page'
					}); 
				},2000 )
				
			},
			completedHandle() {				 			 
				let  interval2 = setInterval(() => {
					if (this.completedSteps < this.totalSteps) {
					  this.completedSteps++;
					} else {
					  // 当完成的步骤等于总步骤时，清除定时器						 
					  clearInterval(interval2);
					}
				}, 100); // 每秒更新一次
			},
			trunhandel:function() {
				this.visible_flat = true;
				this.tips.title ='Scanning...',
				this.tips.txt='Searching for devices'
				let _this = this;
				setTimeout(function(){
					_this.tryDevice();
				},2000)
				 
			},
			tryDevice:function() {
				this.visible_flat = true;
				this.tips.title ='No devices found',
				this.tips.txt='Make sure your device is chargedand within range'
				this.visible_trydevice  = true;
				 
			},
			againSubmit:function() {
				this.flatimg = "/static/gifs/"+Theme+"/Device Found.gif";
				this.visible_device_select = true;
				this.visible_trydevice = false;
				this.tips.title = '';				 
			},
			show_device_select:function() {
				this.$refs.popup_pair.open('centen')
			},
			returnHandle:function() {
				uni.navigateTo({
					url: '/pages/home/home'
				}); 
			},
		},
		mounted() {
			this.flatimg = '/static/gifs/'+Theme+"/line-loading.gif";
		}
	}
</script>

<style>

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
	
	.unable li {  margin-bottom:.5rem; display: block;text-align: center;}
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
 

	::v-deep .permission .uni-list-item__extra-text {
		color: #a15621;
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
	
	
	
</style>