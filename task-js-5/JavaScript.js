var test =document.getElementById('test');
var show =document.getElementById('ul');
var show_item =document.getElementById('ul').getElementsByTagName('li');
function judege(){
	if (!(getData())){
    	alert("is null");
    	return false;
	}
	else if(10>getData()-0){
		alert("<10 error");
		return false;
	}
	else if(getData()-0>100){
		alert(">100 errror");
		return false;
	}
	else if(show_item.length>60){
		alert("总数 大于 60 errror");
		return false;
	}
	return true;
}
	//将队列中的元素显示
    function renderQueue() {
        content = ""
        for (var ele in queue) {
            content +="<div class='outer'>";
            content += "<button class='bar' style='height: " + queue[ele] + "px;background-color:#2288" + queue[ele] + "'></button>";
            // content += "<button class='bar' style='height: " + queue[ele] + "px'></button>";
            content +="</div>";
        }
        show.innerHTML = content;
    }
function leftIn(){
	if(!judege())
		return;
	var element=document.createElement("li");
	element.value=getData();
	show.insertBefore(element,show.childNodes[0]);
	delet(element);//增加删除监听
    element.style.height=(getData()-0)*3+"px";//设置高度
}

function rightIn(){
	if(!judege())
		return;
	var element=document.createElement("li");
	element.value=getData();
	show.appendChild(element);
	delet(element);//增加删除监听
    element.style.height=(getData()-0)*3+"px";//设置高度
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
function sort(){

	var a=show_item;
	var i = 0;
	var sortRet =setInterval(function() {
		if (i >= a.length) {
            clearInterval(sortRet);
            return;
        }
		for (var j = i+1; j < a.length; j++) {
		if(a[i].value<a[j].value){
			show.insertBefore(a[j],show.getElementsByTagName('*')[i]);
			}
		}
		i++;
	},100)
	
}	
function sort_2(){

	var a=show_item;
	var i = 0;
	var sortRet =setInterval(function() {
		if (i >= a.length) {
            clearInterval(sortRet);
            return;
        }
		for (var j = i+1; j < a.length; j++) {
		if(a[i].value>a[j].value){
			show.insertBefore(a[j],show.getElementsByTagName('*')[i]);
			}
		}
		i++;
	},100)
	
}

function exchange(){
	oldNode.replaceChild(newNode,oldNode)
}
function init1(){
	for (var i = 0; i < show_item.length; i++) {
			delet(show_item[i]);//增加删除监听
    		show_item[i].style.height=(show_item[i].value-0)*3+"px";
	}
}
init1();