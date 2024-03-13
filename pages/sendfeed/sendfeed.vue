<template>
	<view :class="themeCss" tag="themeCss">
		<div class="cpage">
			<view class="sendfeedview pageview">
				<uni-section class="mb-10 section" title="Send feedback">
					<span @click='returnHandle'>
						<em class="nav-arrow"></em>
					</span>
				</uni-section>

				<p style="margin:0rem 1rem; font-size: 14px;">
					Share your feedback, suggestions, or reportany bugs you encountered.
				</p>
				<p style="margin:2rem 1rem;font-size: 14px;">
					The more details you provide, the better we canunderstand and address the issue.
				</p>

				<uni-forms class="topicFrom">

					<uni-easyinput class="input" placeholder="Topic" />
					<uni-easyinput class="input desc" type="textarea" placeholder="Description" />
					<p class="screenshot" style="margin-bottom: 2rem;">Add a screenshot</p>
					<button class="submitbtn" style="background-color:#ee8332;" @click="Submit">Submit</button>

				</uni-forms>

			</view>
		</div>
	</view>
</template>

<script>
	import {
		getTheme
	} from '@/common/utils'; // 只导入特定的函数
	export default {
		data() {
			return {
				themeCss: getTheme() + 'Theme'
			}
		},
		methods: {
			returnHandle() {
				uni.navigateBack();
			}
		}
	}
</script>

<style>
	.sendfeedview {
		color: var(--dark-white-light-block)
	}
</style>