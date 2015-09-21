
document.getElementById("regform").onsubmit = function(e){
	e.preventDefault();
	document.getElementById("reg").click();
}
document.getElementById("reg").onclick = function(e){
	var username = document.querySelector(".user").value;
	var pwd = document.querySelector(".pwd").value;
	var pwdConfirm = document.querySelector(".pwdconfirm").value;
	var email = document.querySelector(".email").value;
	regCheck(username,pwd,pwdConfirm,email);
	regUser(username,pwd,email);
}
function regUser(username,pwd,email){

	var user = new AV.User();
	user.set("username", username);
	user.set("password", pwd);
	user.set("email", email);
	user.signUp(null, {
  		success: function(user) {
    		window.location.href = "login.html";
  		},
  		error: function(user, error) {
    		// 失败了
    		alert("Error: " + error.code + " " + error.message);
  		}
	});
}
