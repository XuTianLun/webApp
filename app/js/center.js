;(function(){
	document.addEventListener('DOMContentLoaded',function(){
		//头部列表菜单
		var $liebiao = $('.liebiao');
		$liebiao.on('singleTap',function(){
			if($(this).find('.caidan').css("display") == "none"){
			$(this).parent().find('.caidan').css({"display":"block"});
			}else{
			$(this).find('.caidan').css({"display":"none"});	
			}
		});
		
		
		//获取注册登录的号码   显示到个人中心
		var getregister = localStorage.getItem("userdata");
		getregister =getregister ? JSON.parse(getregister) : [];
		var myTel = $('#mytel')
		$.each(getregister, function(idx,item){
			myTel.html(item.userphone);
			console.log(item.userphone);
		});



		
		//点击箭头跳到完善资料页
		$('.jiantou .badge').on('click',function(){
			location.href = "perfect.html"
		});
		
	})
})();
