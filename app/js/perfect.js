
/*完善资料js*/
/*本地存储localStorage*/

	document.addEventListener("DOMContentLoaded",function(){
		
		//获取元素节点
		var btn = document.querySelector(".btn"); //提交按钮
		var username = document.querySelector("#username");  //昵称
		var telephone = document.querySelector("#telephone"); //电话
		var list1 = document.querySelector("#list_1"); //省
		var list2 = document.querySelector("#list_2"); //市
		var list3 = document.querySelector("#list_3"); //县
		var txt = document.querySelector("#txt"); //具体地址
		
		
		var datalist = localStorage.getItem("datalist"); //本地取数组的数据
		datalist = datalist ? JSON.parse(datalist) : []; //JSON解析		
		
		btn.onclick = function(){  //点击提交按钮
			
			if (username.value != "" && telephone.value != "" &&list1.value != "" &&list2.value != "" && list3.value != "") {
				
				var obj = {}; 		//设置一个空对象
				obj.username = username.value; //昵称
				obj.telephone = telephone.value; //电话
				obj.address = list1.value + list2.value + list2.value + txt.value; //地址
				
				datalist.push(obj); //把输入的信息存入数组
				
				//保存到本地数据
				localStorage.setItem("datalist",JSON.stringify(datalist));
			}else{
				confirm("请输入完整信息")
			}
		}
		
	});