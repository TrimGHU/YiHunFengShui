$(function() {
	// 动态设置li大小
	// var headerWidth = $("#nav_list .nav_menu").outerWidth(true);
	// var aWidth = $(".nav_menu li a").css("width",headerWidth/7);
	$("#Message_Board").click(function() {
		$(".phone").hide();
		$(".wechat").hide();
		$(".qq").hide();
		if ($(".feedback").css("display") == "none") {
			$(".feedback").show();
		} else {
			$(".feedback").hide();
		}
	});
	
	$("#phone").click(function() {
		$(".qq").hide();
		$(".wechat").hide();
		$(".feedback").hide();
		if ($(".phone").css("display") == "none") {
			$(".phone").show();
		} else {
			$(".phone").hide();
		}
	});
	
	$("#qq").click(function() {
		$(".phone").hide();
		$(".wechat").hide();
		$(".feedback").hide();
		if ($(".qq").css("display") == "none") {
			$(".qq").show();
		} else {
			$(".qq").hide();
		}
	});
	
	$("#wechat").click(function() {
		$(".phone").hide();
		$(".qq").hide();
		$(".feedback").hide();
		if ($(".wechat").css("display") == "none") {
			$(".wechat").show();
		} else {
			$(".wechat").hide();
		}
	});
	

	// 发送按钮
	$(".feedback_btn").click(function() {
		var MessageBoard = {};
		var content = $("#textarea_content").val();
		var name = $("#name").val();
		var phone = $("#tel_num").val();
		MessageBoard.content = content;
		MessageBoard.name = name;
		MessageBoard.phone = phone;
		var num = 0;
		$('.feedback').find('input,textarea').each(function() {
			if (!$(this).val()) {
				$(this).addClass('red')
				num++;
			} else {
				$(this).removeClass('red');
				if (num > 0)
					num--;
			}
		})

		if (num == 0) {
			$('.feedback').hide();
		}else{
			return;
		}

		$.ajax({
			url : '/contactus/sendemail',
			type : 'get',
			data : MessageBoard,
			dataType : 'text',
			success : function(data, status) {
				$('.feedback').find('input,textarea').each(function() {
					$(this).val('');
				});
				alert(data);
			}
		})
	});

});
