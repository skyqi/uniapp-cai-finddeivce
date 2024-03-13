<template>
	<view :class="themeCss" tag="themeCss">
		<div class="cpage"> 
			
	<view class="device-page updateview">
		<uni-section class="mb-10 section" title="Device update">
			<span @click='returnHandle'>
				<em class="nav-img"></em></span>
		</uni-section>
		
		<view v-if="step1">
		   <view class="device-logo">
				
				<l-circle class="progress" strokeColor="#f09653,#f7f7f7" v-model:current="modelVale" :percent="target" size="120px">					   
				</l-circle>	
									
			</view>
			
			<view class="update">
				<p>Checking for update...</p>
				<small>Current version 1.0.02</small>
			</view>
		</view>
		
		<view v-if="step2">
		    <view class="device-logo">
				<img style="width:15rem;height:15rem;" :src="'./static/Images/'+Theme+'/Device-update.png'" />
			</view>
			
			<view class="update">
				<p>A new version is available</p>
				<small>New version 1.0.3</small>
			</view>
			
			<view class="btn-bar" >
				<button class="btn" @click="updateHandle">Update</button>
			</view>
		</view>
		
		<view v-if="step3">
		   <view class="device-logo">
				<l-circle class="progress" strokeColor="#f09653,#f7f7f7" v-model:current="modelVale" :percent="target" size="120px">	
				 <text class="progress-text">{{modelVale}}%</text>
				</l-circle>	
			</view>
			
			<view class="update">
				<p>Checking for update...</p>
				<small>Current version 1.0.02</small>
			</view>
		</view>		
	</view>
	</div></view>
</template>

<script>
	 
	import {
		getTheme
	} from '@/common/utils'; // 只导入特定的函数
	
	const Theme = getTheme()
	 
	
	export default {
		data() {
			return {
				completedSteps:0,
				totalSteps :10,
				// startColor:"'#db792f'",
				// stopColor:'#191918',
				// innerStrokeColor:'#db792f',
				interval:null,			
				strokeWidth:40,
				innerStrokeWidth:30,
				step1:true,
				step2:false,
				step3:false,
				Theme:getTheme(),
				themeCss: getTheme() + 'Theme',
				target:100,
				modelVale:0,
				
			}
		},
		 
		methods: {
			returnHandle:function() {
				uni.navigateTo({
					url: '/pages/device_settings/device_settings'
				}); 
			},			 
			updateHandle:function() {
				// uni.navigateTo({
				// 	url: '/pages/device_update/device_update'
				// });
				this.step1 = false;
				this.step2 = false;
				this.step3 = true;
				// setTimeout(()=>{
				// 	this.step1 = false;
				// 	this.step2 = true;
				// 	uni.navigateTo({
				// 	 	url: '/pages/device_update/device_update'
				// 	});
				// },3000)  
			},
		 
		},
		mounted() {
			  // 启动定时器，每秒增加一次完成的步骤
			 
			setTimeout(()=>{
				this.step1 = false;
				this.step2 = true;
			},3000)  
		}
	}
</script>

<style>
.device-page .device-logo {
	    text-align: center;
	    margin-top: 3rem;
}
::v-deep .device-page .device-logo  uni-image{
	height: 12rem;
	width: 10rem;
}

.device-page .device-logo {
 
}

.device-page .progress {
	text-align: center;
	margin: 0 auto;
 
}

.update {
	display: flex;
	flex-direction: column;
	align-items: center;
	color:white;
	margin-top: 5rem;
}

.update p {
	line-height: 2rem;
}

.btn-bar {}
.btn-bar .btn{ position: fixed;
    background-color: #ee8332;
    margin: 2rem;
    width: 80%;
    bottom: 2rem;}
	
.progress-percentage {
  position: absolute; /* 绝对定位 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 定位到圆的中心 */
  font-size: 1.2em;
  color: #FFFFFF;
  z-index: 1; /* 确保文本在进度条之上 */
}

/deep/ .uni-section .uni-section-header__content .distraction span {
	margin-left:50px;
}
</style>
