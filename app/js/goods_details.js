;$(function(){
		    	
		    
		var mySwiper = new Swiper('.swiper-container',{
    			direction: 'horizontal',
    			 pagination: '.swiper-pagination',
    			
		})

		//详情与评论切换；
		var $doc = $(document);
		var $btn = $('#btn');
		var $section = $('#details_content');
        var $btn_a = $btn.find('a');
         	$btn.on('singleTap','a',function(){
         	    $btn_a.removeClass();
         	    $(this).addClass('atver');
         		var index = $(this).index();
        		$section.css('marginLeft','-'+index*100+'vw')
        	}) 
       //点击列表图标导航出现
       var $nav = $('#navLsit');
       var $navBtn  = $nav.find("span");
       var $nav_list = $nav.find(".list_box");
       $navBtn.on('singleTap',function(){
       
     		$nav_list.show();
       })
       //点击任意位置隐藏
        $doc.on('doubleTap',function(){
       
     		$nav_list.hide();
       		console.log(123);
       })           	
    


});	