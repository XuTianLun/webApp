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
