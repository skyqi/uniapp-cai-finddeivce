<template>
	<view class="aboutview pageview">
		<uni-section class="mb-10 section" title="About">
			<span @click='returnHandle'>
				<em class="nav-arrow"></em>
			</span>
		</uni-section>
		<view class="version">
			<image class="version-img" :src="'/static/Images/'+Theme+'/mode logo only.png'"></image>
			<text >Plulse</text>
			<text style="font-size: 14px;">Version 1.1.1</text>
		</view>
		
		<view class="device-items">
				   <ul >
					   <li>Rate us</li>
					   <li class="ico">
						   <image src="/static/Images/Forward Arrow.svg"></image>
					   </li>
				   </ul>
				   <ul @click="sendfeedHandle">
				   			   <li >Send Feedback</li>
				   			   <li class="ico" ><image src="/static/Images/Forward Arrow.svg"></image></li>
				   </ul>
				   <ul @click="locateHandle">
				   			   <li >Terms of Service</li>
				   			   <li class="ico"><image src="/static/Images/Forward Arrow.svg"></image></li>
				   </ul>
				   <ul>
					   <li>Shop Pulse</li>
					   <li class="ico">
						   <uni-link class="version_link" href="#" text="getyourpulse.co.uk"></uni-link>
					   </li>
				   </ul>
				   
		</view>
		
		<view class="connect">
			<h3 style="line-height: 2rem">Connect with us</h3>
			<ul class="item">
				<li>
					<image class="sm-img" src="/static/Images/Instagram.svg"></image>
					<span>@getyouplulse</span></li>
				<li><image class="sm-img" src="/static/Images/Facebook.svg"></image>
					<span>Get you Plulse</span></li>
			</ul>
		</view>
			   
	</view>
</template>

<script>
	import $themeConf from '@/common/config';
	import { getTheme } from '@/common/utils'; // 只导入特定的函数
	
	const Theme = getTheme()
	export default {
		data() {
			return {
				Theme:getTheme()
			}
		},
		methods: {
			sendfeedHandle() {
				uni.navigateTo({
				  url: '/pages/sendfeed/sendfeed'
				});
			},
			locateHandle() {
				uni.navigateTo({
				  url: '/pages/locate/locate'
				});
			},
			returnHandle() {
			   uni.navigateBack();
			}
		},
		mounted() {
		 
		}
	}
</script>

<style>

</style>
