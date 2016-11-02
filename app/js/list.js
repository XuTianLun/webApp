

	$(function(){
		
		var $nav = $("nav");
		var $li = $("nav li");
		var $tip = $(".tip");
										
		var $click = $(".click"); /*点击下面的除第一个*/
		var $active = $(".active"); /*点击第一个高亮*/
		
		
		
		/*触摸高亮显示按钮*/
		$li.on("click",function(){ 
			$(this).addClass("active").siblings().removeClass("active");
			$tip.text($(this).text()); /*改变标题*/
			       
		});
		

	


		var $article = $("article article");
		var $ul = $(".datalist");

		$.ajaxSetup({
			
			url:"../json/goods.json",  //请求地址
			success : function(res){
										
				$.each(res, function(idx,item) {
					var $li = $("<li/>"); //创建li
					$li.addClass(".li"); //添加样式	
					
						$("<img/>").addClass("img").attr("src",item.imgurl).appendTo($li);
					    $("<p/>").addClass("p").html(item.title).appendTo($li); //产地			
					    $li.appendTo($ul);							
					
				});				
				$ul.appendTo($article);				
			}
		});
		
		$.ajax();
		//默认显示,数据加载
		//获取window的高度		
		
		
		
		var n = 0;
		$(window).on("scroll", function() { //鼠标滚动事件
	
			var scrollTop = $(window).scrollTop(); //获取window的高度
	
			if(scrollTop >= $(document).height() - $(window).height() - 2800) { //距离底部2800的时候加载
				n++;
				if(n < 3) { //加载两次数据，距离底部2800就是一次
					$.ajax();
				}
	
			}
		});	
		
		
		
		
//		$click.on("touchstart",function(){
//			
//			
//			//获取window的高度
//			var scrollTop = $(window).scrollTop(); 
//			var n = 0;
//			if(scrollTop >= $(document).height() - $(window).height() - 1000) { 
//				n++;	//懒加载效果		
//	
//	
//			var $article = $("article article");
//			var $ul = $(".datalist");
//
//			$.ajaxSetup({
//				
//				url:"../json/goods.json",  //请求地址
//				success : function(res){
//											
//					$.each(res, function(idx,item) {
//						var $li = $("<li/>"); //创建li
//						$li.addClass(".li"); //添加样式	
//												
//						$("<img/>").addClass("img").attr("src",item.imgurl2).appendTo($li);
//					    $("<p/>").addClass("p").html(item.title2).appendTo($li); //产地			
//					    $li.appendTo($ul);
//					});
//					
//					$ul.appendTo($article);				
//				}
//			});
//			
//			$.ajax();
//			
//			
//			$(window).on("scroll", function() { //鼠标滚动事件
//						$.ajax();	
//				})		
//			
//		
//			};
//		})
//		

		
		
		
	});