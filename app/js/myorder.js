(function(){
	document.addEventListener('DOMContentLoaded',function(){
		var $liebiao = $('.icon-liebiao');
	$liebiao.click(function(){
		if($(this).find('.caidan').css("opacity") == 0){
		$(this).find('.caidan').css({"opacity":0.9});
		}else{
		$(this).find('.caidan').css({"opacity":0});	
		}
	})
	})
})();
