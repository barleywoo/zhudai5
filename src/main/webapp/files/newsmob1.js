// JavaScript Document
/**
 * 发送验证码
 * @returns {Boolean}
 */
function sendcode()
{
	var mobile = $.trim($('#mobile').val());
	if(mobile == "") {  alert("请输入您的手机号码！"); return; }

	document.getElementById("btnSendCode").value="发送中...";
	var json_data = {'mobile':mobile};
	$.ajax({
	    type: 'GET',  //这里用GET
	    url: jiekou_site_url+'/other/sms_code_apply_login.html',
	    dataType: 'jsonp',  //类型
	    data: json_data,
	    jsonp: 'jcallback', //jsonp回调参数，必需
	    async: false,
	    success: function(resData) { //返回的json数据
			if( resData.status == 1 ) {
				countdown();
				return;
			} else {
				document.getElementById("btnSendCode").value="获取验证码";
				alert(resData.msg);
				return;
			}
	    },
	    timeout: 3000
	});
}

//倒计时
function countdown()
{
	var i = 60;
	//“获取验证码”按钮内容
	def_html = "重新发送";

	function auto(){
		if(i){
			$("#btnSendCode").attr("disabled", true);
			document.getElementById("btnSendCode").value='('+i+')';
			i--;
			//倒计时
			setTimeout(function(){auto();},1e3);
		}else{
			//倒计时结束，重置按钮内容
			$("#btnSendCode").attr("disabled", false);
			document.getElementById("btnSendCode").value = def_html;
		}
	}
	auto();
}


// 点击立即申请
function firstloan(){
	/*************用户协议**********/
	var agereement_wap = $("#agereement_wap").val();
	if(agereement_wap == 0){
		alert('请勾选《服务协议》');
		return false;
	}
	/*************用户协议**********/
	var weburl = window.location.href;		//获取当前网址
	var name = $('#name').val();			//姓名
	var mobile = $('#mobile').val();		//手机号码
	var sex = $('#sex').val();				//性别
	var loanmoney = $('#loanmoney').val();	//贷款金额
	var ismove = 1;							//是否移动端
	var source = $('#t').val();				//来源-模板code
	var third_uid = $('#u').val();			//第三方UID
	var mid = $('#mid').val();				//推广经理ID
	var city = $('#profile_sublocation option:selected').text();	//城市
	var successTmpl = 'sem';				//成功后的模板

	var han = /^[\u4e00-\u9fa5]+$/gi;
	var reg2 = /^(1[0-9]{10})$/;
	var num = /([1-9]\d*(\.\d*[1-9])?)/;

	if(name =='')      { alert("姓名不能为空");return; }
	if(!han.test(name)){ alert("请输入中文姓名！");return; }
	if(name.length > 4){ alert("请输入正确的姓名！");return; }
	if(sex=='')        { alert("请选择性别");return; }
	if(!reg2.test(mobile)){ alert("手机号码格式不正确");return; }
	if(!num.test(loanmoney)){ alert('请输入开头不为0的数字！'); return; }
	if(loanmoney<1)    { alert('金额必须大于1'); return; }
	if(city=='请选择市'){ alert("请选择您所在的城市"); return;}

	mobile = tests(mobile);
	$('.ljpd1').hide();
	$('.ljpd2').show();

	var json_data = {
		'name':name, 'mobile':mobile, 'sex':sex, 'city':city,
		'money':loanmoney,'source':source,
		'weburl':weburl,'ismove':ismove,'mid':mid,
		'thirdUid':third_uid,'isdecode':1
	};
	$.ajax({
	    type: 'POST',  //这里用GET
	    url: jiekou_site_url+'/Apply01Servlet',
	    dataType: 'json',  //类型
	    data: json_data,
	    //jsonp: 'jcallback', //jsonp回调参数，必需
	    async: false,
	    success: function(d) { //返回的json数据
			if(d == '2') {
				alert('系统繁忙，请稍后再试...');
				$('.ljpd1').show();
				$('.ljpd2').hide();
				return;
			}else if(d == '3'){
				alert('亲，24小时内只允许申请一次');
				$('.ljpd1').show();
				$('.ljpd2').hide();
				return;
			}else if(d == '5'){
				alert('系统繁忙');
				$('.ljpd1').show();
				$('.ljpd2').hide();
				return;
			}else if(d == '6'){
				alert('无法提交贷款申请，如有贷款需求或其它疑问，请直接拨打免费热线：400-77777-11，感谢配合！');
				$('.ljpd1').show();
				$('.ljpd2').hide();
				return;
			}else if(d == '7'){
				alert('无法提交贷款申请，如有贷款需求或其它疑问，请直接拨打免费热线：400-77777-11，感谢配合！');
				$('.ljpd1').show();
				$('.ljpd2').hide();
				return;
			}else {
				alert('提交贷款申请成功，如有疑问，请直接拨打免费热线：400-000-1020，感谢配合！');

				location.href = "http://www.jzrd.com.cn";
				/*
				$(".mui-input-group1").hide();
				$(".mui-input-group2").show();
				$('#id').val(d);
				if(typeof(conversion)=="function"){
					conversion();
				}
				*/
				return;
			}
	    },
	    timeout: 3000
	});
}
//第二页
//是否有房

$(function(){
	//.有无房产
	$('#house_side .btn').click(function(){
		$('#house_side .btn').removeClass('btn-active');
		$(this).addClass('btn-active');
		var house = $(this).val();
		$('#house').val(house);
	});
	//.有无车产
	$('#car_side .btn').click(function(){
		$('#car_side .btn').removeClass('btn-active');
		$(this).addClass('btn-active');
		var car = $(this).val();
		$('#car').val(car);
	});
	//.有无公积金
	$('#shebao_side .btn').click(function(){
		$('#shebao_side .btn').removeClass('btn-active');
		$(this).addClass('btn-active');
		var gongjijin = $(this).val();
		$('#gongjijin').val(gongjijin);
	});
	//.有无保单
	$('#policy_side .btn').click(function(){
		$('#policy_side .btn').removeClass('btn-active');
		$(this).addClass('btn-active');
		var baodan_is = $(this).val();
		$('#baodan_is').val(baodan_is);
	});
	//.有无信用卡
	$('#credit_side .btn').click(function(){
		$('#credit_side .btn').removeClass('btn-active');
		$(this).addClass('btn-active');
		var credit_card = $(this).val();
		$('#credit_card').val(credit_card);
	});
	//.有无社保
	$('#social_side .btn').click(function(){
		$('#social_side .btn').removeClass('btn-active');
		$(this).addClass('btn-active');
		var work_shebao = $(this).val();
		$('#work_shebao').val(work_shebao);
	});
	//.工资代发
	$('#undertake_side .btn').click(function(){
		$('#undertake_side .btn').removeClass('btn-active');
		$(this).addClass('btn-active');
		var work_wage_give_type = $(this).val();
		$('#work_wage_give_type').val(work_wage_give_type);
	});
	//.有无微粒贷
	$('#particles_side').change(function(){
		var particles_side = $('#particles_side').val()
		$('#weili').val(particles_side);
	});
	//.有无芝麻信用
	$('#sesame_side .btn').click(function(){
		$('#sesame_side .btn').removeClass('btn-active');
		$(this).addClass('btn-active');
		var sesame = $(this).val();
		$('#zhima').val(sesame);
	});
});

function secondloan(){
	var weburl = window.location.href;		//获取当前网址
	var id = $('#id').val();
	var successTmpl = 'sem1';				//成功后的模板
	var is_gx = $('#gou_l').val();				//是否勾选
	var city = $('#profile_sublocation option:selected').text();	//城市

	var birthday = $('#birthday').val();    //生日
	var house = $('#house').val();			//是否有房
	var car = $('#car').val();				//是否有车
	var baodan_is = $('#baodan_is').val();	//是否有保单
	var gongjijin = $('#gongjijin').val();    //有无公积金
	var credit_card = $('#credit_card').val();    //有无信用卡
	var work_shebao = $('#work_shebao').val();    //有无社保
	var work_wage_give_type = $('#work_wage_give_type').val();    //工资代发
	var weili = $('#weili').val();    //有无微粒贷
	var zhima = $('#zhima').val();    //有无芝麻信用


	
	if(birthday==''){ alert("请填定出生日期"); return;}
	if(house == '请选择')      { alert("请选择是否有房");return; }
	if(car == '请选择')      { alert("请选择是否有车");return; }
	if(gongjijin == '请选择') { alert("请选择是否有公积金"); return;}
	if(baodan_is == '请选择'){ alert("请选择是否有保单");return; }
	if(credit_card == '请选择'){ alert("请选择是否有信用卡"); return;}
	if(work_shebao == '请选择'){ alert("请选择是否有社保"); return;}
	if(work_wage_give_type == '请选择'){ alert("请选择是否工资代发"); return;}
	if(weili=='请选择'){ weili=0;}
	if(zhima=='请选择'){ zhima=0;}

	var json_data = {
		'id':id,'is_gx':is_gx,'house':house,'car':car, 'baodan_is':baodan_is,
		'birthday':birthday,'gongjijin':gongjijin,'creditcard_situation':credit_card,
		'shebao':work_shebao,'work_wage_give_type':work_wage_give_type,'weili':weili,'zhima':zhima
	};
	$.ajax({
	    type: 'GET',  //这里用GET
	    url: jiekou_site_url+'/Apply02Servlet',
	    dataType: 'jsonp',  //类型
	    data: json_data,
	    jsonp: 'jcallback', //jsonp回调参数，必需
	    async: false,
	    success: function(d) { //返回的json数据
			if(d == '2') {
				alert('系统繁忙，请稍后再试...');
				return;
			}else if(d == '3'){
				alert('亲，24小时内只允许申请一次');
				return;
			}else if(d == '5'){
				alert('系统繁忙');
				return;
			}else if(d == '6'){
				alert('无法提交贷款申请，如有贷款需求或其它疑问，请直接拨打免费热线：400-77777-11，感谢配合！');
				return;
			}else if(d == '7'){
				alert('无法提交贷款申请，如有贷款需求或其它疑问，请直接拨打免费热线：400-77777-11，感谢配合！');
				return;
			}else if(d == '8'){
				alert('请填定出生日期');
				return;
			} else {
				alert('提交贷款申请成功，如有疑问，请直接拨打免费热线：400-000-1020，感谢配合！');

			location.href = "http://www.jzrd.com.cn";
			//_taq.push({convert_id: "59155326349", event_type: "form"});//完成后统计一次
			return;
			}
	    },
	    timeout: 3000
	});
}