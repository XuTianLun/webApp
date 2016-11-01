document.addEventListener('DOMContentLoaded',function(){
	var ecaidan = document.querySelector(".caidan");
	
	var edetails = document.querySelector('.details');
	var i = 1;
	$.ajax({
		type:"get",
		url:"/json/myvault.json",
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
			}
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
						url:"/json/myvault.json",
						dataType:'json',
						async:true,
						success: function(res){
							var $edetails = $('.details');
							$.each(res, function(idx,item) {
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
							}
							});
							
						}
						
					});
									
				}
	});
})