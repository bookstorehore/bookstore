window.onload = function(){
	tabInit();
	isLogin();
	loadInfo();
}


document.getElementById("buy").onclick = function(e){
	var currentuser = AV.User.current();
	if(currentuser){
		document.querySelector(".affirmorder").style.display = "block";
		
		var addresses = new AV.Query("Addr");
		addresses.equalTo("userId",currentuser.id);
		addresses.find({
			success:function(){
				alert();
			},
			error:function(){
				alert();
			}
		});
	}else{
		document.location.href="/login"
	}
}
function tabInit(){
	var panels = document.querySelectorAll(".addresspanel");
	for(var i = 0;i<panels.length;i++){
		panels[i].onclick = function(e){
			for(var j=0;j<panels.length;j++){
				panels[j].classList.remove("addressactive");
			}
			e.currentTarget.classList.add("addressactive");
		}
	}
}
function loadInfo(){
	var para = getRequest();
	var obId = para.id;
	var book = new AV.Query("Products");
	book.equalTo("objectId",obId);
	book.find({
		success:function(results){
			if(results.length > 0){
				loadBookInfo(results);
			}else{
				alert("没有获取到数据！");
				window.history.go(-1)
			}
		},
		error:function(){
			alert("没有相关图书信息");
			window.history.go(-1);
		}
	});
}

function loadBookInfo(results){
	document.querySelector(".bookcover").src = results[0].attributes.ProCover;
	document.querySelector(".bookname").innerHTML = "<h1>"+results[0].attributes.BookName+"</h1>";
	document.querySelector(".bookauthor").innerHTML = results[0].attributes.BookAuthor;
	document.querySelector(".price").innerHTML = "¥" + results[0].attributes.Proprice.toFixed(2);
	document.querySelector(".bookdesc").innerHTML = results[0].attributes.ProDesc;
}

