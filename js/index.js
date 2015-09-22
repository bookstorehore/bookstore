

window.onload = function(){
	dataRequest();
	slide();
	isLogin();
}

function dataRequest(){
	
	// var products =AV.Object.extend("Products");
	var query = new AV.Query("Products");
	query.limit(20);
	query.find({
		success:function(results){
			loadDom(results);
		},
		error:function(){
			loadError();
		}
	});
}

function loadDom(results){
	var length = results.length;
	var dom = '';
	for(var i = 0; i < length; i = i + 1){
		dom = dom + "<div class=\"panel\"><a href=\""+window.location.origin+"/view/detail.html?"+results[i].id+"\"><div class=\"panelmedia\"><img src=\""+ results[i].attributes.ProCover+"\"></div><div class=\"panelcontent\"><div class=\"bookname\">"+results[i].attributes.BookName+"</div><div class=\"bookauthor\"><small>"+results[i].attributes.BookAuthor+"</small></div><div class=\"bookprice\">¥"+results[i].attributes.ProPrice.toFixed(2)+"</div></div></a><div class=\"cover\"></div></div>";
	}
	document.querySelector(".panellist").insertAdjacentHTML("beforeend",dom);
}

function loadError(){
	var dom = "<h1>页面加载出错了</h1>";
	document.querySelector(".panellist").insertAdjacentHTML("beforeend",dom);

}