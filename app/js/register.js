;$(function(){

	//获取本地存储
	var userData = localStorage.getItem('userdata');//这里得到的有可能为null
	userData = userData ? JSON.parse(userData) : [];	
	var $form = $('#register');
	var $warning = $('#warning');
	$('#reg_btn').on('singleTap',function(){
		
		 //创建正则表达式
 		var re = /1[3578]\d{9}/;
 		var phone = $('#mobile').val();
 		if(!re.test(phone)){
 			$warning.text('请输入正确手机号')
 			$warning.show();
 		}else{
 			$warning.text('')
 			$warning.hide();
 		}
		var password1 = $('#mima1').val();
		var password2 = $('#mima2').val(); 		
 		var re_p =/^[a-zA-Z]\w{5,15}$/;
		if(!re_p.test(password1)){
 			$warning.text('请输入正确密码')
 			$warning.show();		
		}else{
 			$warning.text('')
 			$warning.hide();			
		}


		
		 
	})
	
	
	
	
	
	
	
});
