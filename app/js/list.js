

;$(function(){
		
		var $nav = $("nav");
		var $li = $("nav li");
		var $tip = $(".tip");
		
		
		
		/*触摸高亮显示按钮*/
		$li.on("singleTap",function(){ 
			$(this).addClass("nobg");			
			$(this).siblings().removeClass("nobg");
			$(this).find("a").addClass("color");
			$(this).siblings().find("a").removeClass("color");
			$tip.text($(this).text()); /*改变标题*/
			       
		});
		
		/*头部菜单显示/隐藏*/
		var ecaidan = $(".headerlist");
		var $liebiao = $('.icon-liebiao');
		
		$liebiao.on("singleTap",function(){
			if(ecaidan.css("opacity") == 0){
				ecaidan.css({"opacity":0.9});
			}else{
				ecaidan.css({"opacity":0});	
			}
		});	

		



		//ajax加载
		var $nav_li = $(".nav li"); //左导航ul	
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
							$li.addClass(".li"); //添加样式	
							
							//图片
							$("<a/>").addClass("a").attr("href","goods_details.html")
							.html($("<img/>").addClass("img").attr("src",item.imgurl)).appendTo($li);
							//标题							
						    $("<a/>").addClass("title_a").attr("href","goods_details.html")
						    .html($("<p/>").addClass("p").html(item.title)).appendTo($li); //标题
						    $li.appendTo($ul);		
						}
					}
					
					if (i == 1 || i == 4 || i == 7) {
						if (item.page == 2) {
							
							var $li = $("<li/>"); //创建li
							$li.addClass(".li"); //添加样式	
						
							//图片
							$("<a/>").addClass("a").attr("href","goods_details.html")
							.html($("<img/>").addClass("img").attr("src",item.imgurl)).appendTo($li);
							//标题							
						    $("<a/>").addClass("title_a").attr("href","goods_details.html")
						    .html($("<p/>").addClass("p").html(item.title)).appendTo($li); //标题
						    $li.appendTo($ul);			
						}
					}
					if (i == 2 || i == 5 || i == 8 ) {
						if (item.page == 3) {
							
							var $li = $("<li/>"); //创建li
							$li.addClass(".li"); //添加样式	
						
							//图片
							$("<a/>").addClass("a").attr("href","goods_details.html")
							.html($("<img/>").addClass("img").attr("src",item.imgurl)).appendTo($li);
							//标题							
						    $("<a/>").addClass("title_a").attr("href","goods_details.html")
						    .html($("<p/>").addClass("p").html(item.title)).appendTo($li); //标题
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
						
//		var n = 0;
		$(window).on("scroll", function() { //鼠标滚动事件
	
			var scrollTop = $(window).scrollTop(); //获取window的高度
	
			if(scrollTop >= $(document).height() - $(window).height() - 3000) { //距离底部2800的时候加载
//				n++;
//				if(n < 50) { //加载数据，距离底部2800就是一次
					$.ajax();
//				}
	
			}
		});	
		

		
});