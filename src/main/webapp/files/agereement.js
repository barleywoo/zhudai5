
$(document).ready(function() {
	//pc端和移动端弹框都用到
	$('#btn_gou').click(function() {
		var agereement = $('#agereement').val();
		if(agereement == 0){
			$('#agereement').val(1);
		}
		if(agereement == 1){
			$('#agereement').val(0);
		}
	});
	$('#btn_gou2').click(function() {
		var agereement = $('#agereement2').val();
		if(agereement == 0){
			$('#agereement2').val(1);
		}
		if(agereement == 1){
			$('#agereement2').val(0);
		}
	});

	
	
	//PC端申请协议弹出框
	$("#text_in").click(function(){
		$(".agreement").fadeIn(200);
	});
	$("#text_close").click(function(){
		$(".agreement").fadeOut(200);
	});
	//PC端信用贷里面申请协议弹出框//text_close2 id名区分
	$("#text_in").click(function(){
		$(".agreement").fadeIn(200);
	});
	$("#text_close2").click(function(){
		$(".agreement").fadeOut(200);
	});
	//PC端信用贷里面申请协议弹出框//text_close2 id名区分
	$("#text_in02").click(function(){
		$(".agreement02").fadeIn(200);
	});
	$("#text_close02").click(function(){
		$(".agreement").fadeOut(200);
	});
	
	//移动端申请协议赠险条款勾选选项
	$('#btn_gou').click(function() {
		var agereement_wap = $('#agereement_wap').val();
		if(agereement_wap == 0){
			$('#agereement_wap').val(1);
			$('#btn_gou img').show();
		}
		if(agereement_wap == 1){
			$('#agereement_wap').val(0);
			$('#btn_gou img').hide();
		}
	});
	//赠险条款
	$('#btn_zxtk').click(function() {
		var agereement_wap = $('#copy_zxtk').val();
		if(agereement_wap == 0){
			$('#copy_zxtk').val(1);
			$('#btn_zxtk img').show();
		}
		if(agereement_wap == 1){
			$('#copy_zxtk').val(0);
			$('#btn_zxtk img').hide();
		}
	});
	
	//移动端申请协议点击弹框显示与隐藏
		$("#btn_sec").click(function(){
			$(".secur").show();
		});
		$("#header_i").click(function(){
			$(".secur").hide();
		});
		
	//移动端申请协议点击弹框显示与隐藏
		$("#btn_sec").click(function(){
			$(".security").show();
		});
		$("#header_i").click(function(){
			$(".security").hide();
		});
		$("#btn_sec").click(function(){
			$(".security_yd").show();
		});
		$("#header_i").click(function(){
			$(".security_yd").hide();
		});
	//赠险条款通用
		$("#btn_zengxian").click(function(){
			$("#zengxian_text").show();
		});
		$("#header_i02").click(function(){
			$("#zengxian_text").hide();
		});
	//赠险条款勾选选项
	$('#btn_gou02').click(function() {
		var gou_l = $('#gou_l').val();
		if(gou_l == 0){
			$('#gou_l').val(1);
			$('#btn_gou02 img').show();
		}
		if(gou_l == 1){
			$('#gou_l').val(0);
			$('#btn_gou02 img').hide();
		}
	});
	
	
	//申请框内男女选择
	$('[name="xuanzhe_box"]').click(function(e){
	    $('[name="xuanzhe_box"]').find('dl').hide();
	    $(this).find('dl').show();
		e.stopPropagation();
	});
	$('[name="xuanzhe_box"] dt').hover(function(e){
		$(this).toggleClass('on');
		e.stopPropagation();
	});
	$('[name="xuanzhe_box"] dt').click(function(e){
		var val = $(this).text();
		$(this).parents('[name="xuanzhe_box"]').find('input').val(val);
		$('[name="xuanzhe_box"] dl').hide();
		e.stopPropagation();
	});
	$(document).click(function(){
		$('[name="xuanzhe_box"] dl').hide();
	});	
});