// JavaScript Document
function getcity(){
	var weburl = window.location.href;//获取当前网址

	var json_data = {
		'weburl':weburl
	};

	$.ajax({
		type: 'GET',  //这里用GET
		url: jiekou_site_url+'/other/getcityid.html',
		dataType: 'jsonp',  //类型
		data: json_data,
		jsonp: 'jcallback', //jsonp回调参数，必需
		async: false,
		success: function(data) { //返回的json数据
			init_location(data.provinceid,data.cityid,'profile');
			return;
		},
		timeout: 3000
	});
}
//getcity();