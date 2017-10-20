window.onload=function () {
	var btn=document.getElementById('bt-login');
	btn.onclick=function(){
		login();
	}

}
function login(){
		//获取页面高宽
	var mHeight=document.documentElement.scrollHeight;
	var mWidth=document.documentElement.scrollWidth;
	//获取可视区域
	var sHeight=document.documentElement.clientHeight;
	var sWidth=document.documentElement.clientWidth;


	var mask=document.createElement("div");
	mask.id="mask";
	mask.style.height=mHeight+"px";
	mask.style.width=mWidth+"px";
	document.body.appendChild(mask);

	var dialog=document.createElement("div");
	dialog.id="dialog";
	dialog.innerHTML="<div class='dialogCon'><div id='close'</div></div>"
	document.body.appendChild(dialog);
	//获取元素的大小
	var xHeight=dialog.offsetHeight;
	var xWidth=dialog.offsetWidth;
	dialog.style.top=(sHeight-xHeight)/2+"px";
	dialog.style.left=(sWidth-xWidth)/2+"px";

	var close=document.getElementById('close');
	mask.onclick=close.onclick=function(){
		cancel();
	}
}
function cancel(){
	var mask=document.getElementById('mask');
	var dialog=document.getElementById('dialog');
	document.body.removeChild(mask);
	document.body.removeChild(dialog);
}