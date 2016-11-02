;(function(){
	document.addEventListener('DOMContentLoaded',function(){
		//获取本地存储
		var register = localStorage.getItem('register');
		register = register ? JSON.parse(register) : [];
		if(register.length>0){
		 $('#phone').val(register.usename);
		 $('#password').val(register.passWord);
		}
		$('form').submit(function(){
			var useName = $('#phone').val();
			var pwd = $('#password').val();
			var register = [];
	var registermessage = {
		usename:useName,
		passWord:pwd
	}
	goods.push(registermessage);
	localStorage.setItem('register',JSON.stringify(register));
	});
	});
})();
