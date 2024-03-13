[](https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html#type-options)

[](http://192.168.1.1:5173/#/pages/adddevice/adddevice)

'''
uni.navigateTo({
    url: '/pages/about/about'
});
  
returnHandle() {
   uni.navigateBack();
}
'''



'''
.container {
  position: relative;
  width: 100px;
  height: 100px;
}

.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  -webkit-mask-image: url("image.svg");
  mask-image: url("image.svg");
  mask-mode: alpha;
  mask-repeat: no-repeat;
  mask-position: center;
}

.container::before {
  fill: red;
}

import { getTheme } from '@/common/utils'; // 只导入特定的函数

const Theme = getTheme()
	
Theme:getTheme()

<img class="loading" :src="'./static/gifs/'+theme+'/Radar-E.gif'" /> 

<view class="aboutview pageview">
			<span @click='returnHandle'>
				<em class="nav-arrow"></em>
			</span>
</uni-section>
			

'''


```vue
<view :class="themeCss" tag="themeCss">
	<div class="cpage">
	
	..
	Theme: getTheme(),
themeCss: getTheme() + 'Theme'

```
