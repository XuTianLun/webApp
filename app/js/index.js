window.onload = function(){
	
	//轮播图
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 2000,//可选选项，自动滑动
		loop:true,
		pagination : '.swiper-pagination',
	});
	
	
	//加载图片1
	$(function(){
		var $datalist1 = $('.datalist1');
		var $ul1 = $('<ul/>');
		$.ajax({
			type:"get",
			async:true,
			url:'json/datalist1.json',
			success:function(res){
				console.log(res);

				// 生成一个ul
				$.each(res,function(idx,item){
					var $li = $('<li/>');
					$('<a/>').attr({href:item.url}).html('<img src="'+item.imgurl+'"/>').appendTo($li);
					
					$li.appendTo($ul1);
				});

				$datalist1.append($ul1);
			}
		});
	});
	
	//加载图片2
	$(function(){
		var $datalist2 = $('.datalist2');
		var $ul2 = $('<ul/>');
		$.ajax({
			type:"get",
			async:true,
			url:'json/datalist2.json',
			success:function(res){
				console.log(res);

				// 生成一个ul
				$.each(res,function(idx,item){
					var $li = $('<li/>');
					$('<a/>').attr({href:item.url}).html('<img data-original="'+item.imgurl+'"/>').appendTo($li);
					
					$li.appendTo($ul2);
				});

				$datalist2.append($ul2);
				
		      $("img").lazyload({effect: "fadeIn"});
		  
			}
		});
	});
	
//	加载图片3
	$(function(){
		var $datalist3 = $('.datalist3');
		var $ul3 = $('<ul/>');
		$.ajax({
			type:"get",
			async:true,
			url:'json/datalist3.json',
			success:function(res){
				console.log(res);
			
				// 生成一个ul
				$.each(res,function(idx,item){
					var $li = $('<li/>');
					$('<a/>').attr({href:item.url}).html('<img data-original="'+item.imgurl+'"/>').appendTo($li);
					$('<p/>').addClass('title').html(item.title).appendTo($li);
					$('<p/>').addClass('price').html( '<span>&yen;' + item.price).appendTo($li);
					$li.appendTo($ul3);
						console.log(item.imgurl)
				});
				
				$datalist3.append($ul3);
				$("img").lazyload({effect: "fadeIn"});
			}
		});
	});
	
	//回到顶部
	$(function(){
		$(".comeback").hide();
		$(window).scroll(function(){
			if( $(window).scrollTop()>500 )
			{
				$(".comeback").fadeIn();
			}else{
				$(".comeback").fadeOut();
			}
		});
		$('.comeback').on('click',function(){
			$('html body').animate({scrollTop:0});
		});
	});
	
		
	//底部高亮
	$(function(){
		$("#homeicon1").css({"color":"#8e488e"});

	})
	

}
