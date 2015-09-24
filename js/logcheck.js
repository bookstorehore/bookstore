
document.getElementById("login").onclick = function(e){
	e.preventDefault();
	var username = document.querySelector(".user").value;
	var pwd = document.querySelector(".pwd").value;
	logCheck(username,pwd);
	logIn(username,pwd);
}

function logCheck(username,pwd){
	if(username&&pwd){
		return;
	}else{
		removeNote();
		addNote(document.getElementById("login"),"<p class=\"noteinfo\">请输入用户名密码！</p>");
	}
}
function logIn(username,pwd){
	if(username == "admin"){
		AV.User.logIn(username,pwd,{
			success:function(){

				window.location.href = "./admin/admin_index.html";
			},
			error:function(){
				window.location.reload();
			}
		});
	} else {
		AV.User.logIn(username,pwd,{
			success:function(){

				window.history.go(-1);
			},
			error:function(){
				window.location.reload();
			}
		});
	}

}
