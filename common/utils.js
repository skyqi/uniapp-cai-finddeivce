export const myFunction = () => {
  console.log('这是一个公共函数');
};

export const getTheme = () => {
	const theme = localStorage.getItem('theme');
	if (!theme) {
		localStorage.setItem('theme','light');
		return 'light';
	} else {
		return theme;
	}	 
}

