/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
var show=document.getElementById('show');
function getData() {
  var list=new Array();
  var source=document.getElementById('source').getElementsByTagName("li");
  var value=document.getElementById('source').getElementsByTagName("b");
  var address;
  var num;
  for (var i = 0; i < source.length; i++) {
    address=source[i].innerText.substring(0,2)+":";
    num=value[i].innerHTML+"<br>";
    var arr=new Array();
    arr[0]=address;
    arr[1]=num;
    list[i]=arr;
    // show.innerHTML+=" "+source[i].innerText.substring(0,2)+":";
    // show.innerHTML+=" "+value[i].innerHTML+"<br>";
  }
    return list;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
    // var list2=new Array();
  for (var i = 0; i < data.length; i++) {
    for (var j = i+1; j < data.length; j++) {
      if(data[i][1]<data[j][1]){
        var tem=new Array();
        tem= data[i];
        data[i] = data[j];
        data[j] = tem;
      }
    }
  }
  return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
    var a=document.getElementById('resort');
    for (i = 0; i < data.length; i++) {
      var element=document.createElement("li");
        element.innerHTML="第"+(i+1)+"名,"+data[i];
        a.appendChild(element);
    }
}

function btnHandle1() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}

function init() {

  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
  var button=document.getElementById('sort-btn');
  button.setAttribute("onclick","btnHandle1()");
}

init();
