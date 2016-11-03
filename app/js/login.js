;(function(){
	document.addEventListener('DOMContentLoaded',function(){
		
		var arr =[false,false];
		//获取本地存储
		var userData = localStorage.getItem('userData');
		userData = userData ? JSON.parse(userData) : [];
		if(userData.length>0){
		 $('#phone').val(userData.userphone);
		 $('#password').val(userData.password);
		 arr[0] = true;
		 arr[1] = true;
		}
		 //验证手机号码
		  

		    $('#phone').blur(function(){
		    	var num = $(this).val();
		    	if(num!=""){
		    	var istrue = /^[1-3]\d{10}$/.test(num);
		    	if(istrue){
		    		arr[0] = true;
           	  	}
           	  	else{
		    		arr[0] = false;
           	  	}
           	 }
		    });
			$('#password').blur(function(){
				var pwd = $(this).val();
				if(pwd.length >= 6){
					arr[1] = true;
				}else{
					arr[1] = false;
				}
			})
		$('form').submit(function(){
			var istrue = true;
			for(var i = 0;i<arr.length;i++){
				if(arr[i] == false){
					istrue = false;
				}
			}
			console.log(arr);
			if(istrue){
				var useName = $('#phone').val();
				var pwd = $('#password').val();
				console.log(useName);
				console.log(pwd);
				var register = [];
				var registermessage = {
					usename:useName,
					password:pwd
				}
				register.push(registermessage);
				localStorage.setItem('useData',JSON.stringify(register));
				
			}else{
				if(arr[0] == false){
					$('.prompt').css({'display':'block'}).html("请正确填写手机号码哦");
					$('#phone').css({'border':'1px solid #F16E42'});
					setTimeout(function(){
					$('.prompt').css({'display':'none'}).html('');
					$('#phone').css({'border':'1px solid #D1D5D8'});
					},5000);
				}
				if(arr[1] == false){
					$('.prompt1').css({'display':'block'}).html("至少填写6个字符");
					$('#password').css({'border':'1px solid #F16E42'});
					setTimeout(function(){
					$('.prompt1').css({'display':'none'}).html('');
					$('#password').css({'border':'1px solid #D1D5D8'});
					},5000);
				}
				
				return false;
			}
			
	});
	});
})();
