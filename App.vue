<script>	
	import { getTheme } from '@/common/utils';
	const theme = getTheme()
 
	// @import '@/common/'+theme+'/uni.css';
	
	function loadcss(cssPath) {
		const style = document.createElement('style');
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = cssPath;
		document.head.appendChild(link);
	}
	
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			loadcss('/common/'+theme+'/uni.css')
			loadcss('/common/'+theme+'.css')
			console.log('/common/'+theme+'/uni.css')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		} 
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	// @import '@/common/uni.css';
	@import '@/common/main.css';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: var(--main-bg-color);
		color:var(--dark-white-light-block);
		
	}
	 
	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
