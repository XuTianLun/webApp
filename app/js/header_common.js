;(function(){
	document.addEventListener('DOMContentLoaded',function(){
		var $liebiao = $('.liebiao');
    console.log($liebiao);
	$liebiao.on('singleTap',function(){
		if($(this).find('.caidan').css("display") == "none"){
		$(this).parent().find('.caidan').css({"display":"block"});
		}else{
		$(this).find('.caidan').css({"display":"none"});	
		}
	});
	})
	
})();
