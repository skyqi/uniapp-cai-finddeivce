<template>
	<view :class="themeCss" tag="themeCss">
		<div class="cpage">
			<view class="device-page">
				<uni-section class="mb-10 section" title="DeviceName">
					<span @click='returnHandle'>
						<em class="nav-img"></em></span>
				</uni-section>

				<view class="device-logo">
					<image src="/static/Images/Product  Image - white.png"></image>
				</view>

				<view class="device-items">
					
					<ul class="current" style="margin-bottom: 1rem;position: relative;">
						<li>Not Connected</li>
						<li class="circle "  style=" position: relative;">
							<l-circle class="progress" style="position: absolute;top: -10px;left: 7rem;" strokeColor="#f09653,#f7f7f7" v-model:current="modelVale" :percent="target" size="40px">
							</l-circle>	 
						</li>
					</ul>
					
					<ul class="current">
						<li>Connected</li>
						<li class="ico">
							88%
						</li>
					</ul>
					<ul>
						<li>Ring your Pulse</li>
						<li class="ico">
							<image src="/static/Images/Ring Device.svg"></image>
						</li>
					</ul>
					<ul @click="locateHandle()">
						<li>Locate your Pulse</li>
						<li class="ico">
							<image src="/static/Images/Locate Device.svg"></image>
						</li>
					</ul>
					<ul @click="settingHandle()">
						<li>Device Settings</li>
						<li class="ico">
							<image src="/static/Images/settings.svg"></image>
						</li>
					</ul>

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
				themeCss: getTheme() + 'Theme',
				target:100,
				modelVale:0,
			}
		},
		methods: {
			returnHandle: function() {
				uni.navigateTo({
					url: '/pages/home/home'
				});
			},
			locateHandle: function() {
				uni.navigateTo({
					url: '/pages/locate/locate'
				});

			},
			settingHandle: function() {
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
	
	::v-deep .uni-section .uni-section-header__content .distraction {
		margin-left: 3rem;
		margin-top: 0rem;
		color: var(--dark-white-light-block) !important;
		
	}

	/deep/ .uni-section .uni-section-header__content .distraction span {
		margin-left: 50px;
	}
</style>