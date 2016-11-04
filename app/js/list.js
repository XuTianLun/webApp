

;jQuery(function(){
		
		var $li = $(".nav_s .nav li");
		var $tip = $("h1.tip"); /*右边标题*/
		
		/*触摸高亮显示左导航*/
		$li.on("singleTap",function(){ 
			$(this).addClass("my_nobg");			
			$(this).siblings().removeClass("my_nobg");
			$(this).find("a").addClass("my_color");
			$(this).siblings().find("a").removeClass("my_color");
			$tip.text($(this).text()); /*改变标题*/
			       
		});

		//ajax加载
		var $nav_li = $(".nav_s .nav li"); //左导航ul	
		var $article = $("article article");
		var $ul = $(".datalist");	//数据加载的容器	
		var i = 0; //定义全局i=0
		
		$($nav_li).click(function(){ /*委托左导航ul,li*/
			i = $(this).index();
			$ul.empty();
			$.ajax();
		});			
		
		
		$.ajaxSetup({			
			url:"../json/goods.json",  //请求地址
			success : function(res){		

				$.each(res, function(idx,item) {
					
					if (i == 0 || i == 3 || i == 6 || i == 9) {
						if (item.page == 1) {							
							var $li = $("<li/>"); //创建li
							$li.addClass(".my_li"); //添加样式	
							
							//图片
							$("<a/>").addClass("my_a").attr("href","goods_details.html")
							.html($("<img/>").addClass("my_img").attr("src",item.imgurl)).appendTo($li);
							//标题							
						    $("<a/>").addClass("title_a").attr("href","goods_details.html")
						    .html($("<p/>").addClass("my_p").html(item.title)).appendTo($li); 
						    $li.appendTo($ul);		
						}
					}
					
					if (i == 1 || i == 4 || i == 7) {
						if (item.page == 2) {							
							var $li = $("<li/>"); //创建li
							$li.addClass(".my_li"); //添加样式	
						
							//图片
							$("<a/>").addClass("my_a").attr("href","goods_details.html")
							.html($("<img/>").addClass("my_img").attr("src",item.imgurl)).appendTo($li);
							//标题							
						    $("<a/>").addClass("title_a").attr("href","goods_details.html")
						    .html($("<p/>").addClass("my_p").html(item.title)).appendTo($li); //标题
						    $li.appendTo($ul);			
						}
					}
					if (i == 2 || i == 5 || i == 8 ) {
						if (item.page == 3) {							
							var $li = $("<li/>"); //创建li
							$li.addClass(".my_li"); //添加样式	
						
							//图片
							$("<a/>").addClass("my_a").attr("href","goods_details.html")
							.html($("<img/>").addClass("my_img").attr("src",item.imgurl)).appendTo($li);
							//标题							
						    $("<a/>").addClass("title_a").attr("href","goods_details.html")
						    .html($("<p/>").addClass("my_p").html(item.title)).appendTo($li); //标题
						    $li.appendTo($ul);			
						}
					}					
				});									
				$ul.appendTo($article);				
			}
		});
		
		$.ajax();
		//默认显示,数据加载
		//获取window的高度		
						
		$(window).on("scroll", function() { //鼠标滚动事件	
			var scrollTop = $(window).scrollTop(); //获取window的高度	
			if(scrollTop >= $(document).height() - $(window).height() - 3000) { //距离底部2800的时候加载
					$.ajax();	
			}
		})					
});