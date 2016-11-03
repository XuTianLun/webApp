(function(){
	document.addEventListener('DOMContentLoaded',function(){
	var $order_details = $('.order_details');
	//本地存储
//	var goods = []
//	var goodsmessage = {
//		imgurl:"../img/59.jpg",
//		price:"120",
//		theme:"黑灰色短袖连衣裙",
//		num:"2"
//	}
//	goods.push(goodsmessage);
//	localStorage.setItem('goods',JSON.stringify(goods));
	var goodsorder = localStorage.getItem('buydata');
	goodsorder = goodsorder ? JSON.parse(goodsorder) : [];
	var total = 0;
	if(goodsorder.length > 0){
		goodsorder.forEach(function(item,idx){
			total += item.price*item.shuliang;
			var $div = $('<div/>');
			var $header = $('<div/>').addClass('header').html('<span>'+'店铺一'+'</span>'+'<span>'+'交易完成'+'</span>').appendTo($div);
			var $content = $('<div/>').addClass('content').appendTo($div);
			var $total = $('<div/>').addClass('total').html('共<span>'+item.shuliang+'</span>件商品，合计:<span>'+item.shuliang*item.price+'</span>').appendTo($div);
			var $btn = $('<div/>').addClass('btn').html('<span>付款</span>'+'<span>删除订单</span>'+'<span>查看物流</span>').appendTo($div);
			var $section = $('<section/>').appendTo($content);
			    $('<img/>').attr({'src':item.img}).appendTo($section);
			    $('<div/>').html('<span>'+item.name+'</span>'+'<span>'+item.price+'</span>').appendTo($section);
			    $('<span/>').html(item.shuliang).appendTo($section);
				$order_details.append($div);
		})
	}
	
	})
})();
