<template>
	<view class="device-page updateview">
		<uni-section class="mb-10 section" title="Device update">
			<span @click='returnHandle'>
				<em class="nav-img"></em></span>
		</uni-section>
		
		<view v-if="step1">
		   <view class="device-logo">
				<RadialProgress class="progress"
				  :diameter="200"
				  :completed-steps="completedSteps"
				  :total-steps="totalSteps"
				   :startColor="'#db792f'"
				   :stopColor="'#191918'"
				   :innerStrokeColor="'#191918'"
				  >
				   <!-- Your inner content here -->
				 </RadialProgress>
			</view>
			
			<view class="update">
				<p>Checking for update...</p>
				<small>Current version 1.0.02</small>
			</view>
		</view>
		
		<view v-if="step2">
		    <view class="device-logo">
				<image style="width:15rem;height:15rem;" src="/static/Images/Device update - dark.png"></image> 
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
				<RadialProgress class="progress"
				  :diameter="200"
				  :completed-steps="completedSteps"
				  :total-steps="totalSteps"
				   :startColor="'#db792f'"
				   :stopColor="'#191918'"
				   :innerStrokeColor="'#191918'"
				  >
				  <span class="progress-percentage">{{ completedSteps / totalSteps * 100 }}%</span>
				  
				 </RadialProgress>
			</view>
			
			<view class="update">
				<p>Checking for update...</p>
				<small>Current version 1.0.02</small>
			</view>
		</view>
		
	</view>
</template>

<script>
	// https://github.com/jairoblatt/vue3-radial-progress?tab=readme-ov-file
	import RadialProgress from "vue3-radial-progress";
	 
	
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
			}
		},
		components: {
		    RadialProgress
		  },
		methods: {
			returnHandle:function() {
				uni.navigateTo({
					url: '/pages/device_settings/device_settings'
				}); 
			},			 
			updateHandle:function() {
				uni.navigateTo({
					url: '/pages/device_update/device_update'
				});
			},
		 
		},
		mounted() {
			  // 启动定时器，每秒增加一次完成的步骤
			  this.interval = setInterval(() => {
				if (this.completedSteps < this.totalSteps) {
				  this.completedSteps++;
				} else {
				  // 当完成的步骤等于总步骤时，清除定时器
				  clearInterval(this.interval);
				  this.step1 = false;
				  this.step2 = true;
				}
			  }, 1000); // 每秒更新一次
			  
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
