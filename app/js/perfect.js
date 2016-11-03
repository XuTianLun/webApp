
/*完善资料js*/
/*本地存储localStorage*/

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
		function ajax() {
			$.ajax({
				url: "../json/address.json", //请求数据
				success: function(res) {
					$.each(res, function(idx, item) { //第一次遍历
						if($("#list_1").val() == item.name) { //省
							$(".city").find("option").remove();  //先移除上一个的数据存留
						} else {
							$("<option/>").text(item.name).appendTo($(".province")); //省
						}
						$.each(item.cities, function(idx, item) {
							$("<option/>").text(item).appendTo($(".city"));  //市
						});
					});
				}
			});
		}
		ajax();
		$("#list_1").on("change", function() { //当省输入框里面的值改变的时候
			ajax();
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
			}else{
				alert("提交失败,手机号码不合格")
			}	
		
		})
	
	});

