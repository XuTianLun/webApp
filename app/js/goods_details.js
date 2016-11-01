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

		//点击加入购物车
		
		var $shoppingcart_btn = $('#s_cart');
		var goodsData = [];
	//判断cookie是否存在，防止被覆盖
			try{goodsData = JSON.parse(getCookie("goods"))}
			catch(err){};
	$shoppingcart_btn.on('singleTap',function(){
			//获取商品名字
		console.log(123)	
		var name=$("#goods_name").text();
		    //获取商品价格
		var price=$("#prcie").text();
        	//获取商品图片
      var img=$('#goods_img').find('img').attr('src');
	      
	    goodsData.push({name:name,price:price,img:img});
 		    //创建cookie过期时间
 		 console.log(goodsData);   
 		var d = new Date;
 		d.setDate(d.getDate() + 10);
 			//将数组转换成字符串
 		var str_goods = JSON.stringify(goodsData);
 			//设置cookie
 		document.cookie ="goods="+str_goods;			
			
        //设置顶部购物车显示的商品数
		var goods_list = JSON.parse(getCookie("goods"));
		$("#goods_num").text(goods_list.length);		
		
		})



});	