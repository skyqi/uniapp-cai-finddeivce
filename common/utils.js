export const myFunction = () => {
  console.log('这是一个公共函数');
};

export const getTheme = () => {
	const theme = uni.getStorageSync('theme');
	console.log("7 theme==",theme)
	if (!theme) {
		uni.setStorageSync('theme', 'light');
		return 'light';			
	} else {
		return theme;
	}	
	 
	 // uni.setStorageSync('theme', 'dark');
	 // return 'dark';
}

