;
$(function() {

	var $doc = $(document);
	var $navbtn = $('#nav_btn');
	var $navlist = $('#nav_list');
	//导航列表点击显示隐藏
	$navbtn.on('singleTap', function() {
		if($navlist.css('display') == 'none') {
			$navlist.show();
		} else {
			$navlist.hide();
		}

	})
	$doc.on('singleTap', 'section', function() {
			if($navlist.css('display') == 'block') {
				$navlist.hide();
			};

		})
		//加载商品
	var goodsData = localStorage.getItem('goodsdata'); //这里得到的有可能为null
	goodsData = goodsData ? JSON.parse(goodsData) : [];
	//  创建匿名函数
	(function() {
		//获取商品要显示的区域
		var $goodsList = $("#goods_list")

		if(goodsData.length != 0) {
			for(var i = 0; i < goodsData.length; i++) {
				//创建复选框并添加属性 
				var $check = $("<input/>").attr("type", "checkbox");
				$check.addClass('check');
				//创建img标签并添加属性值
				var $img = $("<img/>").attr("src", goodsData[i].img);

				//创建放置商品信息的p标签并赋值
				var $p = $('<p/>');
				var $aName = $("<a/>").attr("href", "#").html(goodsData[i].name);

				//创建放置商品单价的标签
				var $Price = $("<span/>").html(goodsData[i].price).addClass("price");
				//创建对商品进行操作的加减按钮
				//容器
				var $i = $('<i/>').addClass('number');
				//减
				var $btn_minus = $('<button/>').addClass('minus').text("-");
				//数量
				var $input = $("<input/>").attr('src', 'text').val('1');
				$input.addClass('shuliang')
					//加
				var $btn_add = $('<button/>').addClass('add').text("+");
				//删除
				var $remove = $('<button/>').addClass('remove iconfont icon-lajixiang').text('删除');
				$btn_minus.appendTo($i);
				$input.appendTo($i);
				$btn_add.appendTo($i);
				$aName.appendTo($p);
				$Price.appendTo($p);
				$remove.appendTo($p);
				$i.appendTo($p);

				var $li = $("<li/>")
					//所有添加到li
				$check.appendTo($li);
				$img.appendTo($li);
				$p.appendTo($li);

				//li添加到页面显示区域
				$li.appendTo($goodsList);
			}

		}

	})()

	var $goodslist = $('#goods_list');
	var $btn_minus = $goodslist.find('li').find('.minus');
	var $btn_add = $goodslist.find('li').find('.add');

	//设置商品数量 点击“加”时商品数量加1
	$goodslist.on('singleTap', '.add', function() {

			var index = $(this).parent().parent().parent().index();

			var count = $(this).prev('input').val();
			count++;
			$(this).prev('input').val(count);
			//计算价格
			totalPrice();

		})
		//		//设置商品数量 点击“减”时商品数量减1	
	$btn_minus.on('singleTap', function() {
		var count = $(this).next('input').val();
		//		      //判断是否减到0；到0则等于1；					
		if(count == 1) {
			count = 1;
		} else {
			count--;
		}
		$(this).next('input').val(count);
		//计算价格
		totalPrice();
	})

	//删除商品

	$goodslist.on('singleTap', '.remove', function() {
			//获取本地存储
			goodsData = localStorage.getItem('goodsdata');
			goodsData = JSON.parse(goodsData);

			//删除元素
			var index = $(this).parent().parent().index();
			console.log(index);
			$goodslist.find("li").eq(index).remove();
			//重新设置本地存储
			goodsData.splice(index, 1);
			localStorage.setItem('goodsdata', JSON.stringify(goodsData));
			//重新计算价格
			totalPrice();

		})
		//单选
	$goodslist.on('singleTap', '.check', function() {

		//计算价格
		totalPrice();
	})

	$('#allcheck').on('singleTap', function() {
			//调用全选反选函数
			SelectAll();
			totalPrice();
		})
		////全选反选函数
	function SelectAll() {
		var checkboxs = document.getElementsByClassName('check');
		for(var i = 0; i < checkboxs.length; i++) {
			var e = checkboxs[i];
			e.checked = !e.checked;
		}
	}
	//创建计算价格的函数；
	function totalPrice() {
		var check = $goodslist.find('li').find('.check');
		//计算价格
		//创建价格合计变量
		var total_price = 0;
		for(var i = 0; i < check.length; i++) {

			if(check[i].checked) {
				var shuliang = $(check[i]).parent('li').find('.shuliang').val();
				var price = $(check[i]).parent('li').find('.price').html();
				total_price = total_price + parseInt(price) * shuliang;
			}
		}
		//输出总价格
		$('#buy').find('span').text(total_price);
	}


		//点击确认支付
		
		var $buy_btn = $("#buy");	
		//获取本地存储，防止被覆盖
		var buyData = localStorage.getItem('buydata'); //这里得到的有可能为null
		buyData = buyData ? JSON.parse(buyData) : [];
		console.log($buy_btn);
		$buy_btn.on('touchstart',function(){
		var check = $goodslist.find('li').find('.check');
		//查找被选择的项
		for(var i = 0; i < check.length; i++) {

			if(check[i].checked) {
				var img =  $(check[i]).parent('li').find('img').attr('src');
				var name = $(check[i]).parent('li').find('.name').val();
				var shuliang = $(check[i]).parent('li').find('.shuliang').val();
				var price = $(check[i]).parent('li').find('.price').html();				
				buyData.push({name:name,shuliang:shuliang,price:price,img:img});

			}
			//设置本地存储
		localStorage.setItem('buydata', JSON.stringify(buyData));
			
		}

		})
		
});