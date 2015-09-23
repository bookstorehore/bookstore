var current = AV.User.current();
if(current) {
	window.onload = function() {
		isLogin();
		tabInit();
		document.getElementById("userinfo").click();
	}
}else {
	window.location.href = '../view/login.html';
}

function tabInit(){
	var tabs = document.querySelectorAll('.managetab li');
	var len = tabs.length;
	for(var i = 0; i < len; i = i + 1) {
		for(var j = 0; j < len; j = j + 1) {
			tabs[j].classList.remove('active');
		}
		tabs[i].onclick = function(e) {
			e.currentTarget.classList.add('active');
			switch(e.currentTarget.id) {
				case 'userinfo' : 
					loadUserInfo();
					break;
				case 'orderinfo' : 
					loadOrderInfo();
					break;
				case 'addrinfo' : 
					loadAddrInfo();
					break;
				default : 
					break;
			}
		}
	}
}


function loadUserInfo(){
	var dom = '<form class="infoform"><fieldset><label for="name">用户姓名</label><input type="text" id="username" value="'+current.attributes.username+'" placeholder="输入姓名" name="name"></fieldset><fieldset><label for="icon">用户头像</label><input type="file" id="userIcon" class="upfile hide" name="icon"><img src="'+ current.attributes.userIcon+'" class="usericon"></fieldset><fieldset><label for="email">用户邮箱</label><input type="email" name="email" id="mail" value="'+current.attributes.email+'" placeholder="输入邮件地址"></fieldset><fieldset><label for="currentpwd">当前密码</label><input type="password" id="oldpwd" for="currentpwd" placeholder="输入当前密码"><label fro="futurepwd">新密码</label><input type="password" id="newpwd" name="futurepwd" placeholder="输入新密码"></fieldset><input type="submit" id="changeuserinfo"></form>';
		document.getElementById("show").innerHTML = dom;
}