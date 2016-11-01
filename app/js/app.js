document.addEventListener('DOMContentLoaded',function(){
	
})
document.addEventListener('DOMContentLoaded',function(){
	var ecaidan = document.querySelector(".caidan");
	
	var edetails = document.querySelector('.details');
		
	var xhr =new XMLHttpRequest;
	xhr.open('get','/json/myorder.json',true);
	xhr.send(null);
	
	xhr.onreadystatechange = function(){
		if(xhr.status == 200 && xhr.readyState == 4){
			var res = JSON.parse(xhr.responseText);
			
//			res.forEach(function(item,idx){
//				var ediv = document.createElement('div');
//				ediv.innerHTML = '<span>'+item.type+'</span>'+'<span>'+item.balance+'</span>'+'<span>'+item.note+'</span>'+'<span>'+item.time+'</span>';
//				edetails.appendChild(ediv);
//			})
		}
	}
})