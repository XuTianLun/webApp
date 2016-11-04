(function(){
	document.addEventListener('DOMContentLoaded',function(){
	var $order_details = $('.order_details');
	//获取本地存储
	var goodsorder = localStorage.getItem('buydata');
	goodsorder = goodsorder ? JSON.parse(goodsorder) : [];
	
	if(goodsorder.length > 0){
		//遍历生成相应信息
		goodsorder.forEach(function(item,idx){
			var $div = $('<div/>');
			var $header = $('<div/>').addClass('header').html('<span>'+'店铺一'+'</span>'+'<span>'+'交易完成'+'</span>').appendTo($div);
			var $content = $('<div/>').addClass('content').appendTo($div);
			var $total = $('<div/>').addClass('total').html('共<span>'+item.shuliang+'</span>件商品，合计:<span>￥'+item.shuliang*item.price+'</span>').appendTo($div);
			var $btn = $('<div/>').addClass('btn').html('<span>付款</span>'+'<span>删除订单</span>'+'<span>查看物流</span>').appendTo($div);
			var $section = $('<section/>').appendTo($content);
			    $('<img/>').attr({'src':item.img}).appendTo($section);
			    $('<div/>').html('<span>'+item.name+'</span>'+'<span>￥'+item.price+'</span>').appendTo($section);
			    $('<span/>').html(item.shuliang).appendTo($section);
				$order_details.append($div);
				
				//删除订单
				$btn.find('span').eq(1).singleTap(function(){
				
					var goodsorder = localStorage.getItem('buydata');
					goodsorder = goodsorder ? JSON.parse(goodsorder) : [];
					if(goodsorder.length > 0){
						var idx = $(this).parent().parent().index();
						$(this).parent().parent().remove();
						console.log(idx);
						goodsorder.splice(idx,1);
						localStorage.setItem('buydata',JSON.stringify(goodsorder));
					}
				});
				
				$('.type').on('singleTap','span',function(){
					$(this).css({"color":"#F16E42"}).siblings().css({"color":"#333"});
				});
		});
	}
	
	});
})();
