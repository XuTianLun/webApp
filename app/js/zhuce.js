
;$(function(){
	
	var $doc = $(document);
	var $navbtn = $('#nav_btn');
	var $navlist = $('#nav_list');
	//导航列表点击显示隐藏
	$navbtn.on('singleTap',function(){
		console.log($navlist.css('display'));
		if($navlist.css('display')=='none'){
			$navlist.show();
		}else{
			$navlist.hide();
		}
		
	})
	$doc.on('singleTap','section',function(){
		if($navlist.css('display')=='block'){
			$navlist.hide();
		};
		
	})
	
	
	
	
	
	
	
	
	
	

//	//获取本地存储
	var userData = localStorage.getItem('userdata');//这里得到的有可能为null
	userData = userData ? JSON.parse(userData) : [];
	console.log(userData);
	var $form = $('#register');
	var $warning = $('#warning');
	var flag1 = false,flag2 = false,flag3= false;

	//验证手机号
	$('#mobile').on('blur',function(){
	
		 //创建正则表达式
   		var re = /1[3578]\d{9}/;
   		var phone = $('#mobile').val();
   		
   		if(!re.test(phone)){
   			$warning.text('请输入正确手机号!')
   			$warning.show();
   			flag1 = false;
   			return;
   		}else{
   		
   			$warning.text('')
   			$warning.hide();
   			flag1 = true;
   		}		
		
	})
	//验证密码	
	 $('#mima1').on('blur',function(){
		var password1 = $('#mima1').val();		
   		var re_p =/^[a-zA-Z]\w{5,15}$/;
		if(!re_p.test(password1)){
   			$warning.text('请输入正确密码!')
   			$warning.show();
   			flag2 = false;
   			return;
		}else{
   			$warning.text('')
   			$warning.hide();
   			flag2 = true;
		}	 	
	 	
	 })
	 $('#mima2').on('blur',function(){	 	
		var password1 = $('#mima1').val();
		var password2 = $('#mima2').val();
		if(password2!=password1){
   			$warning.text('请输入相同密码!')
   			$warning.show();
   			flag1 = false;
   			return;
		}else{
   			$warning.text('')
   			$warning.hide();
   			flag3 = true;
		}	 	
	 	
	 })

	var $succeed = $('#succeed');
	$succeed.hide();
	var $btn = $('#reg_btn')
	//点击提交
	$btn.on('singleTap',function(){
		if(flag1&&flag2&&flag3){
			//条件满足创建本地存储
			var userphone = $('#mobile').val();
			var password =  $('#mima1').val();
	    userData.push({userphone:userphone,password:password});
   			//将数组转换成字符串并添加到本地存储
   		localStorage.setItem('userdata',JSON.stringify(userData));
		//注册成功页面弹出
		$succeed.show();
		}	 
	})
	//关闭注册成功页面
	$('#close').on('singleTap',function(){
		$succeed.hide();
		
	})
	

});

