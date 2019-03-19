window.onload = function(){
	//生日插件
	var currYear = new Date().getFullYear();
	$("#birthday").mobiscroll().date({
		theme: 'android-holo-light',
		mode: 'scroller',
		display: 'modal',
		lang: 'zh',
		dateFormat: 'yy-mm-dd',
		defaultValue: new Date(1994, 4, 12),
		startYear: currYear - 100, //开始年份
		endYear: currYear + 100 //结束年份
	});
}