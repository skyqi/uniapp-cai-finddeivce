<template>
	<view class="device-page">
		<uni-section class="mb-10 section" title="DeviceName">
			<span @click='returnHandle'>
				<em class="nav-img"></em></span>
		</uni-section>
		
	   <view class="device-logo">
		   <image src="/static/Images/Product  Image - white.png"></image>
	   </view>
	   
	   <view class="device-items">
		   <ul class="current">
			   <li>Connected</li>
			   <li class="ico">
				   88%
			   </li>
		   </ul>
		   <ul>
			   <li>Ring your Pulse</li>
			   <li class="ico"><image src="/static/Images/Ring Device.svg"></image></li>
		   </ul>
		   <ul @click="locateHandle()">
		   			   <li >Locate your Pulse</li>
		   			   <li class="ico"><image src="/static/Images/Locate Device.svg"></image></li>
		   </ul>
		   <ul @click="settingHandle()">
		   			   <li>Device Settings</li>
		   			   <li class="ico"><image src="/static/Images/settings.svg"></image></li>
		   </ul>
		   
	   </view>
	   
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			returnHandle:function() {
				uni.navigateTo({
					url: '/pages/home/home'
				}); 
			},
			locateHandle:function() {
				uni.navigateTo({
					url: '/pages/locate/locate'
				});
								
			},
			settingHandle:function() {
				uni.navigateTo({
					url: '/pages/device_settings/device_settings'
				});
			}
		}
	}
</script>

<style>
.device-page .nav-img::before {		
	mask-image: url("/static/Images/Back.svg");
	mask-repeat: no-repeat;
	mask-position: center;
	
}

/deep/ .uni-section .uni-section-header__content .distraction span {
    margin-left: 50px;
}
</style>
