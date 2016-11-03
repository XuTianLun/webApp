(function(){
	document.addEventListener('DOMContentLoaded',function(){
		
		var $liebiao = $('.liebiao');
		
			//列表菜单
		$liebiao.on('singleTap',function(){
			if($(this).find('.caidan').css("display") == "none"){
			$(this).parent().find('.caidan').css({"display":"block"});
			}else{
			$(this).find('.caidan').css({"display":"none"});	
			}
		});
		
		//获取完善资料页的号码   显示到个人中心
		var getdatalist = localStorage.getItem("datalist");
		getdatalist =getdatalist ? JSON.parse(getdatalist) : [];
		console.log(getdatalist);
		var myTel = $('#mytel')
		$.each(getdatalist, function(idx,item){
			myTel.html(item.telephone)
		});
		
		//点击箭头跳到完善资料页
		$('.jiantou .badge').on('click',function(){
			location.href = "perfect.html"
		});
		
	})
})();
