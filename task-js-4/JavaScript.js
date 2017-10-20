var test =document.getElementById('test');
var show =document.getElementById('ul');

function leftIn(){
	if (!(getData())){
	    alert("is null");
	    return;
	}
	var element=document.createElement("li");
	element.innerHTML=getData();
	show.insertBefore(element,show.childNodes[0]);
	delet(element);
}

function rightIn(){
	if (!(getData())){
	    alert("is null");
	    return;
	}
	var element=document.createElement("li");
	element.innerHTML=getData();
	show.appendChild(element);
	delet(element);
}

function leftOut(){
	show.removeChild(show.childNodes[0]);
}

function rightOut(){
	show.removeChild(show.childNodes[show.childNodes.length-1]);
}

function getData(){
	var data=document.getElementsByTagName('input');

	var value= data[0].value;
	
	return value;
	
}
//删除事件
var delet = function(del){
	del.addEventListener('click',function(){
		show.removeChild(this);
	});
}
