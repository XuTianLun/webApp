
/*完善资料js*/
/*本地存储localStorage*/

	document.addEventListener("DOMContentLoaded",function(){
		
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
		
		
		//ajax请求数据生成地址
		
		
		
		
		//本地存储
		//获取元素节点
		var btn = $(".btn"); //提交按钮
		var username = $("#username");  //昵称
		var telephone = $("#telephone"); //电话
		var list1 = $("#list_1"); //省
		var list2 = $("#list_2"); //市
		var list3 = $("#list_3"); //县
		var txt = $("#txt"); //具体地址
				
		var datalist = localStorage.getItem("datalist"); //本地取数组的数据
		datalist = datalist ? JSON.parse(datalist) : []; //JSON解析		
		
		btn.on("singleTap",function(){  //点击提交按钮
			
			if (username.val() != "" && telephone.val() != "" &&list1.val() != "" &&list2.val() != "" && list3.val() != "") {				
				var obj = {}; 		//设置一个空对象
				obj.username = username.val(); //昵称
				obj.telephone = telephone.val(); //电话
				obj.address = list1.val() + list2.val() + list2.val() + txt.val(); //地址				
				datalist.push(obj); //把输入的信息存入数组
				
				//保存到本地数据
				localStorage.setItem("datalist",JSON.stringify(datalist));
			}else{
				confirm("请输入完整信息")
			}
		})
	
	});

