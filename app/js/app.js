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


!function(){document.addEventListener("DOMContentLoaded",function(){var n=$(".liebiao");n.on("singleTap",function(){"none"==$(this).find(".caidan").css("display")?$(this).parent().find(".caidan").css({display:"block"}):$(this).find(".caidan").css({display:"none"})});var e=localStorage.getItem("userdata");e=e?JSON.parse(e):[];var o=$("#mytel");$.each(e,function(n,e){o.html(e.userphone),console.log(e.userphone)}),$(".jiantou .badge").on("click",function(){location.href="perfect.html"})})}(),$(function(){$(".footer li").eq(0).click(function(){$("#homeicon1").css({color:"#8e488e"}),$("#homeicon2").css({color:"#777"}),$("#homeicon3").css({color:"#777"}),$("#homeicon4").css({color:"#777"}),$("#homeicon5").css({color:"#777"})}),$(".footer li").eq(1).click(function(){$("#homeicon1").css({color:"#777"}),$("#homeicon2").css({color:"#8e488e"}),$("#homeicon3").css({color:"#777"}),$("#homeicon4").css({color:"#777"}),$("#homeicon5").css({color:"#777"})}),$(".footer li").eq(2).click(function(){$("#homeicon1").css({color:"#777"}),$("#homeicon2").css({color:"#777"}),$("#homeicon3").css({color:"#8e488e"}),$("#homeicon4").css({color:"#777"}),$("#homeicon5").css({color:"#777"})}),$(".footer li").eq(3).click(function(){$("#homeicon1").css({color:"#777"}),$("#homeicon2").css({color:"#777"}),$("#homeicon3").css({color:"#777"}),$("#homeicon4").css({color:"#8e488e"}),$("#homeicon5").css({color:"#777"})}),$(".footer li").eq(4).click(function(){$("#homeicon1").css({color:"#777"}),$("#homeicon2").css({color:"#777"}),$("#homeicon3").css({color:"#777"}),$("#homeicon4").css({color:"#777"}),$("#homeicon5").css({color:"#8e488e"})})}),$(function(){var n=$(document),e=$("#nav_btn"),o=$("#nav_list");e.on("singleTap",function(){console.log(123),"none"==o.css("display")?o.show():o.hide()}),n.on("singleTap",function(){"block"==o.css("display")&&o.hide()});var t=(new Swiper(".swiper-container1",{direction:"horizontal",pagination:".swiper-pagination"}),new Swiper(".swiper-container",{direction:"horizontal",autoHeight:!0})),n=$(document),a=$("#btn"),i=a.find("a");a.on("singleTap","a",function(){i.removeClass(),$(this).addClass("atver");var n=$(this).index();t.slideTo(n,500,!1)});var s=localStorage.getItem("goodsdata");s=s?JSON.parse(s):[],$("#goods_num").text(s.length);var l=$("#s_cart");l.on("singleTap",function(){var n=$("#goods_name").text(),e=$("#price").text(),o=$("#goods_img").find("img").attr("src");s.push({name:n,price:e,img:o}),localStorage.setItem("goodsdata",JSON.stringify(s)),s=localStorage.getItem("goodsdata"),s=JSON.parse(s),$("#goods_num").text(s.length)})}),function(){document.addEventListener("DOMContentLoaded",function(){var n=$(".liebiao");console.log(n),n.on("singleTap",function(){"none"==$(this).find(".caidan").css("display")?$(this).parent().find(".caidan").css({display:"block"}):$(this).find(".caidan").css({display:"none"})})})}(),window.onload=function(){new Swiper(".swiper-container",{autoplay:2e3,loop:!0,pagination:".swiper-pagination"});$(function(){var n=$(".datalist1"),e=$("<ul/>");$.ajax({type:"get",async:!0,url:"json/datalist1.json",success:function(o){$.each(o,function(n,o){var t=$("<li/>");$("<a/>").attr({href:o.url}).html('<img src="'+o.imgurl+'"/>').appendTo(t),t.appendTo(e)}),n.append(e)}})}),$(function(){var n=$(".datalist2"),e=$("<ul/>");$.ajax({type:"get",async:!0,url:"json/datalist2.json",success:function(o){$.each(o,function(n,o){var t=$("<li/>");$("<a/>").attr({href:o.url}).html('<img data-original="'+o.imgurl+'"/>').appendTo(t),t.appendTo(e)}),n.append(e),$("img").lazyload({effect:"fadeIn"})}})}),$(function(){var n=$(".datalist3"),e=$("<ul/>");$.ajax({type:"get",async:!0,url:"json/datalist3.json",success:function(o){$.each(o,function(n,o){var t=$("<li/>");$("<a/>").attr({href:o.url}).html('<img data-original="'+o.imgurl+'"/>').appendTo(t),$("<p/>").addClass("title").html(o.title).appendTo(t),$("<p/>").addClass("price").html("<span>&yen;"+o.price).appendTo(t),t.appendTo(e)}),n.append(e),$("img").lazyload({effect:"fadeIn"})}})}),$(function(){$(".comeback").hide(),$(window).scroll(function(){$(window).scrollTop()>500?$(".comeback").fadeIn():$(".comeback").fadeOut()}),$(".comeback").on("click",function(){$("html body").animate({scrollTop:0})})}),$(function(){$("#homeicon1").css({color:"#8e488e"})})},jQuery(function(){var n=$(".nav_s .nav li"),e=$("h1.tip");n.on("singleTap",function(){$(this).addClass("my_nobg"),$(this).siblings().removeClass("my_nobg"),$(this).find("a").addClass("my_color"),$(this).siblings().find("a").removeClass("my_color"),e.text($(this).text())});var o=$(".nav_s .nav li"),t=$("article article"),a=$(".datalist"),i=0;$(o).click(function(){i=$(this).index(),a.empty(),$.ajax()}),$.ajaxSetup({url:"../json/goods.json",success:function(n){$.each(n,function(n,e){if((0==i||3==i||6==i||9==i)&&1==e.page){var o=$("<li/>");o.addClass(".my_li"),$("<a/>").addClass("my_a").attr("href","goods_details.html").html($("<img/>").addClass("my_img").attr("src",e.imgurl)).appendTo(o),$("<a/>").addClass("title_a").attr("href","goods_details.html").html($("<p/>").addClass("my_p").html(e.title)).appendTo(o),o.appendTo(a)}if((1==i||4==i||7==i)&&2==e.page){var o=$("<li/>");o.addClass(".my_li"),$("<a/>").addClass("my_a").attr("href","goods_details.html").html($("<img/>").addClass("my_img").attr("src",e.imgurl)).appendTo(o),$("<a/>").addClass("title_a").attr("href","goods_details.html").html($("<p/>").addClass("my_p").html(e.title)).appendTo(o),o.appendTo(a)}if((2==i||5==i||8==i)&&3==e.page){var o=$("<li/>");o.addClass(".my_li"),$("<a/>").addClass("my_a").attr("href","goods_details.html").html($("<img/>").addClass("my_img").attr("src",e.imgurl)).appendTo(o),$("<a/>").addClass("title_a").attr("href","goods_details.html").html($("<p/>").addClass("my_p").html(e.title)).appendTo(o),o.appendTo(a)}}),a.appendTo(t)}}),$.ajax(),$(window).on("scroll",function(){var n=$(window).scrollTop();n>=$(document).height()-$(window).height()-3e3&&$.ajax()})}),function(){document.addEventListener("DOMContentLoaded",function(){var n=[!1,!1],e=localStorage.getItem("userdata");e=e?JSON.parse(e):[],console.log(e),e.length>0&&($("#phone").val(e[0].userphone),$("#password").val(e[0].password),n[0]=!0,n[1]=!0,console.log(n)),$("#phone").blur(function(){var e=$(this).val();if(""!=e){var o=/^[1-3]\d{10}$/.test(e);o?n[0]=!0:n[0]=!1}}),$("#password").blur(function(){var e=$(this).val();e.length>=6?n[1]=!0:n[1]=!1}),$("form").submit(function(){for(var e=!0,o=0;o<n.length;o++)0==n[o]&&(e=!1);if(console.log(n),!e)return 0==n[0]&&($(".prompt").css({display:"block"}).html("请正确填写手机号码哦"),$("#phone").css({border:"1px solid #F16E42"}),setTimeout(function(){$(".prompt").css({display:"none"}).html(""),$("#phone").css({border:"1px solid #D1D5D8"})},5e3)),0==n[1]&&($(".prompt1").css({display:"block"}).html("至少填写6个字符"),$("#password").css({border:"1px solid #F16E42"}),setTimeout(function(){$(".prompt1").css({display:"none"}).html(""),$("#password").css({border:"1px solid #D1D5D8"})},5e3)),!1;var t=$("#phone").val(),a=$("#password").val();console.log(t),console.log(a);var i=[],s={userphone:t,password:a};i.push(s),localStorage.setItem("userdata",JSON.stringify(i))})})}(),function(){document.addEventListener("DOMContentLoaded",function(){var n=$(".order_details"),e=localStorage.getItem("buydata");e=e?JSON.parse(e):[],e.length>0&&e.forEach(function(e,o){var t=$("<div/>"),a=($("<div/>").addClass("header").html("<span>店铺一</span><span>交易完成</span>").appendTo(t),$("<div/>").addClass("content").appendTo(t)),i=($("<div/>").addClass("total").html("共<span>"+e.shuliang+"</span>件商品，合计:<span>￥"+e.shuliang*e.price+"</span>").appendTo(t),$("<div/>").addClass("btn").html("<span>付款</span><span>删除订单</span><span>查看物流</span>").appendTo(t)),s=$("<section/>").appendTo(a);$("<img/>").attr({src:e.img}).appendTo(s),$("<div/>").html("<span>"+e.name+"</span><span>￥"+e.price+"</span>").appendTo(s),$("<span/>").html(e.shuliang).appendTo(s),n.append(t),i.find("span").eq(1).singleTap(function(){var n=localStorage.getItem("buydata");if(n=n?JSON.parse(n):[],n.length>0){var e=$(this).parent().parent().index();$(this).parent().parent().remove(),console.log(e),n.splice(e,1),localStorage.setItem("buydata",JSON.stringify(n))}}),$(".type").on("singleTap","span",function(){$(this).css({color:"#F16E42"}).siblings().css({color:"#333"})})})})}(),function(){document.addEventListener("DOMContentLoaded",function(){var n=(document.querySelector(".caidan"),document.querySelector(".details"),1);$.ajax({type:"get",url:"../json/myvault.json",dataType:"json",async:!0,success:function(e){var o=$(".details");$.each(e,function(e,t){function a(){var n=$("<div/>");n.html("<span>"+t.type+"</span><span>"+t.balance+"</span><span>"+t.note+"</span><span>"+t.time+"</span>"),o.append(n)}1==n&&1==t.num&&a()})}}),$(window).on("scroll",function(){var e=$(window).scrollTop();if(e>=$(document).height()-$(window).height()-200){if(n++,n>15)return;console.log(n),$.ajax({type:"get",url:"../json/myvault.json",dataType:"json",async:!0,success:function(e){var o=$(".details");$.each(e,function(e,t){function a(){var n=$("<div/>");n.html("<span>"+t.type+"</span><span>"+t.balance+"</span><span>"+t.note+"</span><span>"+t.time+"</span>"),o.append(n)}n<5&&2==t.num&&a(),n<10&&n>5&&3==t.num&&a(),n<15&&n>10&&4==t.num&&a()})}})}})})}(),function(){document.addEventListener("DOMContentLoaded",function(){function n(){$.ajax({url:"../json/address.json",success:function(n){$.each(n,function(n,e){$("#list_1").val()==e.name?$(".city").find("option").remove():$("<option/>").attr("value",e.name).text(e.name).appendTo($(".province")),$.each(e.cities,function(n,e){$("<option/>").attr("value",e).text(e).appendTo($(".city"))})})}})}$("#province"),$("#city"),$("#county");n(),$("#list_1").on("change",function(){n()});var e=$("#username"),o=$("#telephone");d1=0,o.on("blur",function(){var n=$(this).val(),e=/^1[3578]\d{9}/g.test(n);e?d1=1:d1=0});var t=$(".btn"),e=$("#username"),o=$("#telephone"),a=$("#list_1"),i=$("#list_2"),s=$("#list_3"),l=$("#txt"),c=localStorage.getItem("datalist");c=c?JSON.parse(c):[],t.on("singleTap",function(){if(1==d1){var n={};n.username=e.val(),n.telephone=o.val(),n.address=a.val()+i.val()+s.val()+l.val(),c.push(n),localStorage.setItem("datalist",JSON.stringify(c)),alert("提交成功!"),open("center.html")}else alert("提交失败,手机号码不合格!")})})}(),$(function(){function n(){for(var n=document.getElementsByClassName("check"),e=0;e<n.length;e++){var o=n[e];o.checked=!o.checked}}function e(){for(var n=s.find("li").find(".check"),e=0,o=0;o<n.length;o++)if(n[o].checked){var t=$(n[o]).parent("li").find(".shuliang").val(),a=$(n[o]).parent("li").find(".price").html();e+=parseInt(a)*t}$("#buy").find("span").text(e)}var o=$(document),t=$("#nav_btn"),a=$("#nav_list");t.on("singleTap",function(){"none"==a.css("display")?a.show():a.hide()}),o.on("singleTap","section",function(){"block"==a.css("display")&&a.hide()});var i=localStorage.getItem("goodsdata");i=i?JSON.parse(i):[],function(){var n=$("#goods_list");if(0!=i.length)for(var e=0;e<i.length;e++){var o=$("<input/>").attr("type","checkbox");o.addClass("check");var t=$("<img/>").attr("src",i[e].img),a=$("<p/>"),s=$("<a/>").attr("href","#").html(i[e].name);s.addClass("name");var l=$("<span/>").html(i[e].price).addClass("price"),c=$("<i/>").addClass("number"),r=$("<button/>").addClass("minus").text("-"),d=$("<input/>").attr("src","text").val("1");d.addClass("shuliang");var p=$("<button/>").addClass("add").text("+"),u=$("<button/>").addClass("remove iconfont icon-lajixiang").text("删除");r.appendTo(c),d.appendTo(c),p.appendTo(c),s.appendTo(a),l.appendTo(a),u.appendTo(a),c.appendTo(a);var m=$("<li/>");o.appendTo(m),t.appendTo(m),a.appendTo(m),m.appendTo(n)}}();var s=$("#goods_list"),l=s.find("li").find(".minus");s.find("li").find(".add");s.on("singleTap",".add",function(){var n=($(this).parent().parent().parent().index(),$(this).prev("input").val());n++,$(this).prev("input").val(n),e()}),l.on("singleTap",function(){var n=$(this).next("input").val();1==n?n=1:n--,$(this).next("input").val(n),e()}),s.on("singleTap",".remove",function(){i=localStorage.getItem("goodsdata"),i=JSON.parse(i);var n=$(this).parent().parent().index();s.find("li").eq(n).remove(),i.splice(n,1),localStorage.setItem("goodsdata",JSON.stringify(i)),e()}),s.on("singleTap",".check",function(){e()}),$("#allcheck").on("singleTap",function(){n(),e()});var c=$("#buy"),r=localStorage.getItem("buydata");r=r?JSON.parse(r):[],console.log(c),c.on("touchstart",function(){var n=s.find("li").find(".check");i=localStorage.getItem("goodsdata"),i=JSON.parse(i);for(var e=n.length-1;e>-1;e--)if(n[e].checked){var o=$(n[e]).parent("li").find("img").attr("src"),t=$(n[e]).parent("li").find(".name").text(),a=$(n[e]).parent("li").find(".shuliang").val(),l=$(n[e]).parent("li").find(".price").html();r.push({name:t,shuliang:a,price:l,img:o}),i.splice(e,1),console.log(i)}localStorage.setItem("goodsdata",JSON.stringify(i)),localStorage.setItem("buydata",JSON.stringify(r))})}),function(n){function e(n,e,o,t){return Math.abs(n-e)>=Math.abs(o-t)?n-e>0?"Left":"Right":o-t>0?"Up":"Down"}function o(){d=null,u.last&&(u.el.trigger("longTap"),u={})}function t(){d&&clearTimeout(d),d=null}function a(){l&&clearTimeout(l),c&&clearTimeout(c),r&&clearTimeout(r),d&&clearTimeout(d),l=c=r=d=null,u={}}function i(n){return("touch"==n.pointerType||n.pointerType==n.MSPOINTER_TYPE_TOUCH)&&n.isPrimary}function s(n,e){return n.type=="pointer"+e||n.type.toLowerCase()=="mspointer"+e}var l,c,r,d,p,u={},$=750;n(document).ready(function(){var m,h,g,f,v=0,y=0;"MSGesture"in window&&(p=new MSGesture,p.target=document.body),n(document).bind("MSGestureEnd",function(n){var e=n.velocityX>1?"Right":n.velocityX<-1?"Left":n.velocityY>1?"Down":n.velocityY<-1?"Up":null;e&&(u.el.trigger("swipe"),u.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(f=s(e,"down"))&&!i(e)||(g=f?e:e.touches[0],e.touches&&1===e.touches.length&&u.x2&&(u.x2=void 0,u.y2=void 0),m=Date.now(),h=m-(u.last||m),u.el=n("tagName"in g.target?g.target:g.target.parentNode),l&&clearTimeout(l),u.x1=g.pageX,u.y1=g.pageY,h>0&&h<=250&&(u.isDoubleTap=!0),u.last=m,d=setTimeout(o,$),p&&f&&p.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(n){(f=s(n,"move"))&&!i(n)||(g=f?n:n.touches[0],t(),u.x2=g.pageX,u.y2=g.pageY,v+=Math.abs(u.x1-u.x2),y+=Math.abs(u.y1-u.y2))}).on("touchend MSPointerUp pointerup",function(o){(f=s(o,"up"))&&!i(o)||(t(),u.x2&&Math.abs(u.x1-u.x2)>30||u.y2&&Math.abs(u.y1-u.y2)>30?r=setTimeout(function(){u.el&&(u.el.trigger("swipe"),u.el.trigger("swipe"+e(u.x1,u.x2,u.y1,u.y2))),u={}},0):"last"in u&&(v<30&&y<30?c=setTimeout(function(){var e=n.Event("tap");e.cancelTouch=a,u.el&&u.el.trigger(e),u.isDoubleTap?(u.el&&u.el.trigger("doubleTap"),u={}):l=setTimeout(function(){l=null,u.el&&u.el.trigger("singleTap"),u={}},250)},0):u={}),v=y=0)}).on("touchcancel MSPointerCancel pointercancel",a),n(window).on("scroll",a)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){n.fn[e]=function(n){return this.on(e,n)}})}(Zepto),$(function(){var n=$(document),e=$("#nav_btn"),o=$("#nav_list");e.on("singleTap",function(){console.log(o.css("display")),"none"==o.css("display")?o.show():o.hide()}),n.on("singleTap","section",function(){"block"==o.css("display")&&o.hide()});for(var t=$("#checknum"),a=$("#get"),i=String(),s=0;s<4;s++)i+=parseInt(10*Math.random());t.text(i),a.on("singleTap",function(){i="",t.text("");for(var n=0;n<4;n++)i+=parseInt(10*Math.random());t.text(i)});var l=($("#register"),$("#warning")),c=!1,r=!1,d=!1,p=!1;$("#mobile").on("blur",function(){var n=/1[3578]\d{9}/,e=$("#mobile").val();return n.test(e)?(l.text(""),l.hide(),c=!0,void 0):(l.text("请输入正确手机号!"),l.show(),void(c=!1))}),$("#checknumber").on("blur",function(){var n=$("#checknumber").val(),e=t.text();return n!=e?(l.text("请输入正确验证码!"),l.show(),void(p=!1)):(l.text(""),l.hide(),p=!0,void 0)}),$("#mima1").on("blur",function(){var n=$("#mima1").val(),e=/^[a-zA-Z]\w{5,15}$/;return e.test(n)?(l.text(""),l.hide(),r=!0,void 0):(l.text("请输入正确密码!"),l.show(),void(r=!1))}),$("#mima2").on("blur",function(){var n=$("#mima1").val(),e=$("#mima2").val();return e!=n?(l.text("请输入相同密码!"),l.show(),void(c=!1)):(l.text(""),l.hide(),d=!0,void 0)});var u=$("#succeed"),m=$("#reg_btn"),h=localStorage.getItem("userdata");h=h?JSON.parse(h):[],m.on("singleTap",function(){if(console.log(c,r,d,p),c&&r&&d&&p){var n=$("#mobile").val(),e=$("#mima1").val();h.push({userphone:n,password:e}),localStorage.setItem("userdata",JSON.stringify(h)),u.show()}console.log(localStorage.getItem("userdata"))}),$("#close").on("singleTap",function(){u.hide()})});
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

