;$(function(){
	
	  //点击列表图标导航出现
	  var $doc = $(document);
       var $nav = $('#navLsit');
       var $navBtn  = $nav.find("span");
       var $nav_list = $nav.find(".list_box");
       $navBtn.on('singleTap',function(){
       
     		$nav_list.show();
       })
       //点击任意位置隐藏
        $doc.on('doubleTap',function(){
       
     		$nav_list.hide();
       		
       })           	
			//加载商品
			//尝试获取cookie
		var goodsData = localStorage.getItem('goodsdata');//这里得到的有可能为null
		goodsData = goodsData ? JSON.parse(goodsData) : [];
        
        //  创建匿名函数
        (function(){
             //获取商品要显示的区域
		    var $goodsList = $("#goods_list")
		    	//创建价格合计变量
		    var total_price =0;
		  		//判断获取到的cookie长度是否为0
			if(goods_list.length!=0){
              //遍历cookie
		    for(var i=0;i<goods_list.length;i++)
		    {
	           //计算总价钱 
	         total_price = total_price+JSON.parse(goods_list[i].price);
	        } 
	          
	          //创建复选框并添加属性 
	       	var $input = $("<input/>").attr("type","checkbox").addCalss('check');

	       		//创建img标签并添加属性值
	       	var $img =$("<img/>").attr("src",goods_list[i].img);

	     		//创建放置商品信息的p标签并赋值
	     	var $p = $('<p/>');	
	        var $aName =$("<a/>").attr("href","#").html(goods_list[i].name);            	

				//创建放置商品单价的标签
			var $pPrice =  $("<span/>").html(goods_list[i].price).addClass("price");
				//创建对商品进行操作的加减按钮
				//容器
			var $i = $('<i/>').addClass('number');
				//减
			var $btn_minus = $('<button/>').addClass('minus'); 
				//数量
			var $input = $("<input/>").attr('src','text');
				//加
			var $btn_add = $('<button/>').addClass('add'); 
			
			
				//创建删除按钮			
			var $aRemove = $("<a/>").attr("href","#").addClass("remove").text("删除");
				//添加到商品进行操作的p
				$aMove.appendTo($pOperation);
				$aRemove.appendTo($pOperation);
				//给放置商品的li添加类名
			var $li = $("<li/>")
				//所有添加到li
				$input.appendTo($li);
				$aImg.appendTo($li);
				$aName.appendTo($li);
				$pSize.appendTo($li);
				$pPrice.appendTo($li);
				$pOperation.appendTo($li);
				//li添加到页面显示区域
				$li.appendTo($goodsList);	        	
        	
        })()
	    	









			var $goodslist = $('#goods_list');
			var $btn_minus = $goodslist.find('li').find('.minus');
			var $btn_add = $goodslist.find('li').find('.add');

		//设置商品数量 点击“加”时商品数量加1
			$goodslist.on('singleTap','.add',function(){
				var index = $(this).parent().parent().parent().index();
				console.log(index);
				var count=$(this).prev('input').val();
				count++;
				$(this).prev('input').val(count);
			})
//		//设置商品数量 点击“减”时商品数量减1	
			$btn_minus.on('singleTap',function(){
				var count=$(this).next('input').val();
//		      //判断是否减到0；到0则等于1；					
				if(count==1){
					count=1;
				}else{
					count--;
				}
			$(this).next('input').val(count);
			})


	
	
	
	
	
	
	
})
