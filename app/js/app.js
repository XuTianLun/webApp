;(function(){
	document.addEventListener('DOMContentLoaded',function(){
		//头部列表菜单
		var $liebiao = $('.liebiao');
		$liebiao.on('singleTap',function(){
			if($(this).find('.caidan').css("display") == "none"){
			$(this).parent().find('.caidan').css({"display":"block"});
			}else{
			$(this).find('.caidan').css({"display":"none"});	
			}
		});
		
		
		//获取注册登录的号码   显示到个人中心
		var getregister = localStorage.getItem("userdata");
		getregister =getregister ? JSON.parse(getregister) : [];
		var myTel = $('#mytel')
		$.each(getregister, function(idx,item){
			myTel.html(item.userphone);
			console.log(item.userphone);
		});



		
		//点击箭头跳到完善资料页
		$('.jiantou .badge').on('click',function(){
			location.href = "perfect.html"
		});
		
	})
})();


//底部高亮
$(function(){
//	$("#homeicon1").css({"color":"#8e488e"});
	$(".footer li").eq(0).click(function(){
		$("#homeicon1").css({"color":"#8e488e"});
		$("#homeicon2").css({"color":"#777"});
		$("#homeicon3").css({"color":"#777"});
		$("#homeicon4").css({"color":"#777"});
		$("#homeicon5").css({"color":"#777"});
	})
	$(".footer li").eq(1).click(function(){
		$("#homeicon1").css({"color":"#777"});
		$("#homeicon2").css({"color":"#8e488e"});
		$("#homeicon3").css({"color":"#777"});
		$("#homeicon4").css({"color":"#777"});
		$("#homeicon5").css({"color":"#777"});
	})
	$(".footer li").eq(2).click(function(){
		$("#homeicon1").css({"color":"#777"});
		$("#homeicon2").css({"color":"#777"});
		$("#homeicon3").css({"color":"#8e488e"});
		$("#homeicon4").css({"color":"#777"});
		$("#homeicon5").css({"color":"#777"});
	})
	$(".footer li").eq(3).click(function(){
		$("#homeicon1").css({"color":"#777"});
		$("#homeicon2").css({"color":"#777"});
		$("#homeicon3").css({"color":"#777"});
		$("#homeicon4").css({"color":"#8e488e"});
		$("#homeicon5").css({"color":"#777"});
	})
	$(".footer li").eq(4).click(function(){
		$("#homeicon1").css({"color":"#777"});
		$("#homeicon2").css({"color":"#777"});
		$("#homeicon3").css({"color":"#777"});
		$("#homeicon4").css({"color":"#777"});
		$("#homeicon5").css({"color":"#8e488e"});
	})
	
});
	
;
$(function() {
	var $doc = $(document);
	var $navbtn = $('#nav_btn');
	var $navlist = $('#nav_list');
	//导航列表点击显示隐藏
	$navbtn.on('singleTap', function() {
		console.log(123);
		if($navlist.css('display') == 'none') {
			$navlist.show();
		} else {
			$navlist.hide();
		}

	})
	$doc.on('singleTap', function() {
		if($navlist.css('display') == 'block') {
			$navlist.hide();
		};

	})

	//swiper实现图片轮播；
	var mySwiper1 = new Swiper('.swiper-container1', {
		direction: 'horizontal',
		pagination: '.swiper-pagination',
	})	
	
	
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		autoHeight: true, //高度随内容变化
	})
	//详情与评论切换；
		var $doc = $(document);
		var $btn = $('#btn');
		var $btn_a = $btn.find('a');
		$btn.on('singleTap', 'a', function() {
				$btn_a.removeClass();
				$(this).addClass('atver');
				var index = $(this).index();
	
			mySwiper.slideTo(index, 500, false);//切换到指定一个slide，速度为1秒
				
			})


	//删除本地存储
	//		localStorage.clear();
	//点击加入购物车
	//获取本地存储，防止被覆盖
	var goodsData = localStorage.getItem('goodsdata'); //这里得到的有可能为null
	goodsData = goodsData ? JSON.parse(goodsData) : [];
	$("#goods_num").text(goodsData.length);

	var $shoppingcart_btn = $('#s_cart');

	$shoppingcart_btn.on('singleTap', function() {
		//获取商品名字
		var name = $("#goods_name").text();
		//获取商品价格
		var price = $("#price").text();

		//获取商品图片

		var img = $('#goods_img').find('img').attr('src');

		goodsData.push({
			name: name,
			price: price,
			img: img
		});
		//将数组转换成字符串
		localStorage.setItem('goodsdata', JSON.stringify(goodsData));

		//设置顶部购物车显示的商品数
		goodsData = localStorage.getItem('goodsdata');
		goodsData = JSON.parse(goodsData);

		$("#goods_num").text(goodsData.length);

	})

});
;(function(){
	document.addEventListener('DOMContentLoaded',function(){
		var $liebiao = $('.liebiao');
    console.log($liebiao);
	$liebiao.on('singleTap',function(){
		if($(this).find('.caidan').css("display") == "none"){
		$(this).parent().find('.caidan').css({"display":"block"});
		}else{
		$(this).find('.caidan').css({"display":"none"});	
		}
	});
	})
	
})();

window.onload = function(){
	
	//轮播图
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 2000,//可选选项，自动滑动
		loop:true, //循环（无缝轮播）
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
//				console.log(res);

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
//				console.log(res);

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
//				console.log(res);
			
				// 生成一个ul
				$.each(res,function(idx,item){
					var $li = $('<li/>');
					$('<a/>').attr({href:item.url}).html('<img data-original="'+item.imgurl+'"/>').appendTo($li);
					$('<p/>').addClass('title').html(item.title).appendTo($li);
					$('<p/>').addClass('price').html( '<span>&yen;' + item.price).appendTo($li);
					$li.appendTo($ul3);
//						console.log(item.imgurl)
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
;(function(){
	document.addEventListener('DOMContentLoaded',function(){
		
		var arr =[false,false];
		//获取本地存储
		var userData = localStorage.getItem('userdata');
		userData = userData ? JSON.parse(userData) : [];
		console.log(userData);
		if(userData.length>0){
			
		 $('#phone').val(userData[0].userphone);
		 $('#password').val(userData[0].password);
		 arr[0] = true;
		 arr[1] = true;
		 console.log(arr);
		}
		 //验证手机号码
		  

		    $('#phone').blur(function(){
		    	var num = $(this).val();
		    	if(num!=""){
		    	var istrue = /^[1-3]\d{10}$/.test(num);
		    	if(istrue){
		    		arr[0] = true;
           	  	}
           	  	else{
		    		arr[0] = false;
           	  	}
           	 }
		    });
			$('#password').blur(function(){
				var pwd = $(this).val();
				if(pwd.length >= 6){
					arr[1] = true;
				}else{
					arr[1] = false;
				}
			})
		$('form').submit(function(){
			var istrue = true;
			for(var i = 0;i<arr.length;i++){
				if(arr[i] == false){
					istrue = false;
				}
			}
			console.log(arr);
			if(istrue){
				var useName = $('#phone').val();
				var pwd = $('#password').val();
				console.log(useName);
				console.log(pwd);
				var register = [];
				var registermessage = {
					userphone:useName,
					password:pwd
				}
				register.push(registermessage);
				localStorage.setItem('userdata',JSON.stringify(register));
				
			}else{
				if(arr[0] == false){
					$('.prompt').css({'display':'block'}).html("请正确填写手机号码哦");
					$('#phone').css({'border':'1px solid #F16E42'});
					setTimeout(function(){
					$('.prompt').css({'display':'none'}).html('');
					$('#phone').css({'border':'1px solid #D1D5D8'});
					},5000);
				}
				if(arr[1] == false){
					$('.prompt1').css({'display':'block'}).html("至少填写6个字符");
					$('#password').css({'border':'1px solid #F16E42'});
					setTimeout(function(){
					$('.prompt1').css({'display':'none'}).html('');
					$('#password').css({'border':'1px solid #D1D5D8'});
					},5000);
				}
				
				return false;
			}
			
	});
	});
})();

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

;(function(){
	document.addEventListener('DOMContentLoaded',function(){
	var ecaidan = document.querySelector(".caidan");
	var edetails = document.querySelector('.details');
	var i = 1;
	$.ajax({
		type:"get",
		url:"../json/myvault.json",
		dataType:'json',
		async:true,
		success: function(res){
			var $edetails = $('.details');
			$.each(res, function(idx,item) {
				if(i == 1){
					if(item.num == 1){
						add();
					}
				}
				function add(){
				var $div = $('<div/>');
				$div.html('<span>'+item.type+'</span>'+'<span>'+item.balance+'</span>'+'<span>'+item.note+'</span>'+'<span>'+item.time+'</span>');
				$edetails.append($div);
			};
			});
			
		}
		
	});
	//懒加载,改变i的值，不同的值加载不同的数据
	$(window).on('scroll',function(){
				// 获取滚动条滚动过的距离
				var scrollTop = $(window).scrollTop();
				// 当差不多滚动到底部是加载更多内容
				if(scrollTop >= $(document).height() - $(window).height() - 200 ){
					i++;
					if(i > 15){
						return;
					}
					console.log(i);
					$.ajax({
						type:"get",
						url:"../json/myvault.json",
						dataType:'json',
						async:true,
						success: function(res){
							var $edetails = $('.details');
							$.each(res, function(idx,item){
								if(i < 5){
									if(item.num == 2){
										add();
									}
								}
								if(i < 10 && i>5){
									if(item.num == 3){
										add();
									}
								}
								if(i < 15 && i>10){
									if(item.num == 4){
										add();
									}
								}
								function add(){
								var $div = $('<div/>');
								$div.html('<span>'+item.type+'</span>'+'<span>'+item.balance+'</span>'+'<span>'+item.note+'</span>'+'<span>'+item.time+'</span>');
								$edetails.append($div);
							};
							});
							
						}
						
					});
									
				}
	});
});
})();


/*完善资料js*/
/*本地存储localStorage*/

;(function(){ 
		document.addEventListener("DOMContentLoaded",function(){
							
		//ajax请求数据生成地址
		//获取三个datalist元素节点
		var $province = $("#province");  //省
		var $city = $("#city");  //市
		var $county = $("#county");  //区
		
//		$.ajax({
//			url:"../json/address.json",
//			success : function(res){				
//				$.each(res, function(idx,item) {
//					
//						//创建一个option
//						//省
//						var $option = $("<option/>");
//						$option.attr({"value":item.name,"label":item.name}).text(item.name); //省
//						$option.appendTo($province);
//						
//						var city = item.cities; //取到json里面的城市
//						$.each(city, function(idx,item) {
//						var $option2 = $("<option/>");
//						$option2.attr({"value":item.name,"label":item.name}).text(item); 
//						$option2.appendTo($city);	
//					});
//				});				
//			}
//		});

		//封装函数
		//两次遍历
		function myajax() {
			$.ajax({
				url: "../json/address.json", //请求数据
				success: function(res) {
					$.each(res, function(idx, item) { //第一次遍历
						if($("#list_1").val() == item.name) { //省
							$(".city").find("option").remove();  //先移除上一个的数据存留
						} else {
							$("<option/>").attr("value",item.name).text(item.name).appendTo($(".province")); //省
						}
						$.each(item.cities, function(idx, item) {
							$("<option/>").attr("value",item).text(item).appendTo($(".city"));  //市
						});
					});
				}
			});
		}
		myajax();
		$("#list_1").on("change", function() { //当省输入框里面的值改变的时候
			myajax();
		})		
		
		
		//在点击事件里面判断条件
		var $username = $("#username");//昵称
		var $telephone = $("#telephone");//手机号码	
		
		//手机号码
		//1开头第二位3589的11位数字号码
		d1 = 0;
		$telephone.on("blur",function(){
			var $tel = $(this).val();
			var isTure = /^1[3578]\d{9}/g.test($tel);
			if (isTure) {
				d1 = 1; //正确
			}else{
				d1 = 0; //错误
			}
		})			
		

		//本地存储
		//获取元素节点
		var $btn = $(".btn"); //提交按钮
		var $username = $("#username");  //昵称
		var $telephone = $("#telephone"); //电话
		var $list1 = $("#list_1"); //省
		var $list2 = $("#list_2"); //市
		var $list3 = $("#list_3"); //县
		var $txt = $("#txt"); //具体地址
		
		var datalist = localStorage.getItem("datalist"); //本地取数组的数据
		datalist = datalist ? JSON.parse(datalist) : []; //JSON解析		
		
		$btn.on("singleTap",function(){  //点击提交按钮		
			
			//对输入的昵称和手机号码进行判断
			if (d1 == 1) {
				var obj = {}; 		//设置一个空对象
				obj.username = $username.val(); //昵称
				obj.telephone = $telephone.val(); //电话
				obj.address = $list1.val() + $list2.val() + $list3.val() + $txt.val(); //地址				
				datalist.push(obj); //把输入的信息存入数组
				
				//手机输入正确才能保存数据
				//保存到本地数据
				localStorage.setItem("datalist",JSON.stringify(datalist));

				alert("提交成功!");
				open("center.html"); //跳转到个人中心
			}else{
				alert("提交失败,手机号码不合格!")
			}	
		
		})
	
	});
	
	
 })();

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
					$aName.addClass('name');
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
			//获取本地存储
			goodsData = localStorage.getItem('goodsdata');
			goodsData = JSON.parse(goodsData);

		for(var i =check.length-1; i >-1; i--) {
			if(check[i].checked) {
				var img =  $(check[i]).parent('li').find('img').attr('src');
				var name = $(check[i]).parent('li').find('.name').text();
				var shuliang = $(check[i]).parent('li').find('.shuliang').val();
				var price = $(check[i]).parent('li').find('.price').html();				
				buyData.push({name:name,shuliang:shuliang,price:price,img:img});
				goodsData.splice(i,1);	
				console.log(goodsData);
			}

		}
			//设置本地存储
		
		localStorage.setItem('goodsdata',JSON.stringify(goodsData));	
		localStorage.setItem('buydata', JSON.stringify(buyData));
		})
});
//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  var touch = {},
    touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,
    longTapDelay = 750,
    gesture

  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >=
      Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
  }

  function longTap() {
    longTapTimeout = null
    if (touch.last) {
      touch.el.trigger('longTap')
      touch = {}
    }
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout)
    longTapTimeout = null
  }

  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout)
    if (tapTimeout) clearTimeout(tapTimeout)
    if (swipeTimeout) clearTimeout(swipeTimeout)
    if (longTapTimeout) clearTimeout(longTapTimeout)
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
    touch = {}
  }

  function isPrimaryTouch(event){
    return (event.pointerType == 'touch' ||
      event.pointerType == event.MSPOINTER_TYPE_TOUCH)
      && event.isPrimary
  }

  function isPointerEventType(e, type){
    return (e.type == 'pointer'+type ||
      e.type.toLowerCase() == 'mspointer'+type)
  }

  $(document).ready(function(){
    var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType

    if ('MSGesture' in window) {
      gesture = new MSGesture()
      gesture.target = document.body
    }

    $(document)
      .bind('MSGestureEnd', function(e){
        var swipeDirectionFromVelocity =
          e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null
        if (swipeDirectionFromVelocity) {
          touch.el.trigger('swipe')
          touch.el.trigger('swipe'+ swipeDirectionFromVelocity)
        }
      })
      .on('touchstart MSPointerDown pointerdown', function(e){
        if((_isPointerType = isPointerEventType(e, 'down')) &&
          !isPrimaryTouch(e)) return
        firstTouch = _isPointerType ? e : e.touches[0]
        if (e.touches && e.touches.length === 1 && touch.x2) {
          // Clear out touch movement data if we have it sticking around
          // This can occur if touchcancel doesn't fire due to preventDefault, etc.
          touch.x2 = undefined
          touch.y2 = undefined
        }
        now = Date.now()
        delta = now - (touch.last || now)
        touch.el = $('tagName' in firstTouch.target ?
          firstTouch.target : firstTouch.target.parentNode)
        touchTimeout && clearTimeout(touchTimeout)
        touch.x1 = firstTouch.pageX
        touch.y1 = firstTouch.pageY
        if (delta > 0 && delta <= 250) touch.isDoubleTap = true
        touch.last = now
        longTapTimeout = setTimeout(longTap, longTapDelay)
        // adds the current touch contact for IE gesture recognition
        if (gesture && _isPointerType) gesture.addPointer(e.pointerId)
      })
      .on('touchmove MSPointerMove pointermove', function(e){
        if((_isPointerType = isPointerEventType(e, 'move')) &&
          !isPrimaryTouch(e)) return
        firstTouch = _isPointerType ? e : e.touches[0]
        cancelLongTap()
        touch.x2 = firstTouch.pageX
        touch.y2 = firstTouch.pageY

        deltaX += Math.abs(touch.x1 - touch.x2)
        deltaY += Math.abs(touch.y1 - touch.y2)
      })
      .on('touchend MSPointerUp pointerup', function(e){
        if((_isPointerType = isPointerEventType(e, 'up')) &&
          !isPrimaryTouch(e)) return
        cancelLongTap()

        // swipe
        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
            (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))

          swipeTimeout = setTimeout(function() {
            if (touch.el){
              touch.el.trigger('swipe')
              touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
            }
            touch = {}
          }, 0)

        // normal tap
        else if ('last' in touch)
          // don't fire tap when delta position changed by more than 30 pixels,
          // for instance when moving to a point and back to origin
          if (deltaX < 30 && deltaY < 30) {
            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
            // ('tap' fires before 'scroll')
            tapTimeout = setTimeout(function() {

              // trigger universal 'tap' with the option to cancelTouch()
              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
              var event = $.Event('tap')
              event.cancelTouch = cancelAll
              // [by paper] fix -> "TypeError: 'undefined' is not an object (evaluating 'touch.el.trigger'), when double tap
              if (touch.el) touch.el.trigger(event)

              // trigger double tap immediately
              if (touch.isDoubleTap) {
                if (touch.el) touch.el.trigger('doubleTap')
                touch = {}
              }

              // trigger single tap after 250ms of inactivity
              else {
                touchTimeout = setTimeout(function(){
                  touchTimeout = null
                  if (touch.el) touch.el.trigger('singleTap')
                  touch = {}
                }, 250)
              }
            }, 0)
          } else {
            touch = {}
          }
          deltaX = deltaY = 0

      })
      // when the browser window loses focus,
      // for example when a modal dialog is shown,
      // cancel all ongoing events
      .on('touchcancel MSPointerCancel pointercancel', cancelAll)

    // scrolling the window indicates intention of the user
    // to scroll, not tap or swipe, so cancel all ongoing events
    $(window).on('scroll', cancelAll)
  })

  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
    $.fn[eventName] = function(callback){ return this.on(eventName, callback) }
  })
})(Zepto)


;$(function(){
	
	var $doc = $(document);
	var $navbtn = $('#nav_btn');
	var $navlist = $('#nav_list');
	//导航列表点击显示隐藏
	$navbtn.on('singleTap',function(){
		console.log($navlist.css('display'));
		if($navlist.css('display')=='none'){
			$navlist.show();
		}else{
			$navlist.hide();
		}
		
	})
	$doc.on('singleTap','section',function(){
		if($navlist.css('display')=='block'){
			$navlist.hide();
		};
		
	})
	
	//设置验证码
	var $check_number = $('#checknum');
	var $getchecknumber = $('#get');
		//创建一新子符串
		var num =String();
		//页面刷新，显示一组随机验证码
 		for(var i=0;i<4;i++){
 			num=num+parseInt(Math.random()*10);
 		}
 		//赋值
 		$check_number.text(num);
 		//点击验证码，跟换一组新的验证码
 		$getchecknumber.on('singleTap',function(){
 		num="";
 		$check_number.text("");
 		for(var i=0;i<4;i++){
 		num=num+parseInt(Math.random()*10);
 					
 		}
 		$check_number.text(num); 
 					
 				})	
	
	var $form = $('#register');
	var $warning = $('#warning');
	var flag1 = false,flag2 = false,flag3= false,flag4=false;

	//验证手机号
	$('#mobile').on('blur',function(){
	
		 //创建正则表达式
   		var re = /1[3578]\d{9}/;
   		var phone = $('#mobile').val();
   		
   		if(!re.test(phone)){
   			$warning.text('请输入正确手机号!')
   			$warning.show();
   			flag1 = false;
   			return;
   		}else{
   		
   			$warning.text('')
   			$warning.hide();
   			flag1 = true;
   		}		
		
	})
	//验证验证码
	$('#checknumber').on('blur',function(){
		var incheck = $('#checknumber').val();
		var getcheck = $check_number.text();
		if(incheck!=getcheck){
   			$warning.text('请输入正确验证码!')
   			$warning.show();
   			flag4 = false;
   			return;			
   		}else{
   		
   			$warning.text('')
   			$warning.hide();
   			flag4 = true;
   		}	
		
	})
	
	
	
	//验证密码	
	 $('#mima1').on('blur',function(){
		var password1 = $('#mima1').val();		
   		var re_p =/^[a-zA-Z]\w{5,15}$/;
		if(!re_p.test(password1)){
   			$warning.text('请输入正确密码!')
   			$warning.show();
   			flag2 = false;
   			return;
		}else{
   			$warning.text('')
   			$warning.hide();
   			flag2 = true;
		}	 	
	 	
	 })
	 $('#mima2').on('blur',function(){	 	
		var password1 = $('#mima1').val();
		var password2 = $('#mima2').val();
		if(password2!=password1){
   			$warning.text('请输入相同密码!')
   			$warning.show();
   			flag1 = false;
   			return;
		}else{
   			$warning.text('')
   			$warning.hide();
   			flag3 = true;
		}	 	
	 	
	 })

	var $succeed = $('#succeed');
	var $btn = $('#reg_btn')
	//点击提交
//	//获取本地存储
	var userData = localStorage.getItem('userdata');//这里得到的有可能为null
	userData = userData ? JSON.parse(userData) : [];	
	$btn.on('singleTap',function(){
		console.log(flag1,flag2,flag3,flag4);
		if(flag1&&flag2&&flag3&&flag4){
			//条件满足创建本地存储
			var userphone = $('#mobile').val();
			var password =  $('#mima1').val();
	    userData.push({userphone:userphone,password:password});
   			//将数组转换成字符串并添加到本地存储
   		localStorage.setItem('userdata',JSON.stringify(userData));
		//注册成功页面弹出
		$succeed.show();
		}	
	console.log(localStorage.getItem('userdata'))
	})
	
	//关闭注册成功页面
	$('#close').on('singleTap',function(){
		$succeed.hide();
		
	})
	

});

