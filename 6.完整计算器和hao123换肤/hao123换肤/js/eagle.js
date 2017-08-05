// 换肤
var arr = document.getElementsByClassName('swh');
var arrUrl1 = [ 
			'images/1.jpg',
			'images/2.jpg',
			'images/3.jpg',
			'images/4.jpg',
			'images/5.jpg' 
			];
var arrCol = [
			'blue',
			'red',
			'black',
			'green',
			'orange'
			];
var num = 0;
var aA = document.getElementsByTagName('a');
for (var i = 0; i < arr.length; i++) {
	arr[i].index = i;
	arr[i].onclick = chgBg;
	}

// 改变背景图片方法	并进行本地存储
function chgBg(){
	num = this.index;
	document.body.style.background = "url("+arrUrl1[num]+")";	//换背景图片
	chgClor(arrCol[num]);  //换色
	
	if (window.localStorage) {
		localStorage.setItem('background',"url("+arrUrl1[num]+")");  //进行本地存储图片	
		localStorage.setItem('color',arrCol[num]);  //进行本地存储颜色
	}
	else{
		Cookie.write('background',"url("+arrUrl1[num]+")");
		Cookie.write('color',arrCol[num]);
	}
			
}
// 获取本地存储并赋值
window.onload = function(){
	var strStoreDate1 = window.localStorage ? localStorage.getItem('background') : Cookie.read('background');//获取图片
	var strStoreDate2 = window.localStorage ? localStorage.getItem('color') : Cookie.read('color');//获取图片

	if (strStoreDate1) {
		document.body.style.background = strStoreDate1; //给body添加本地存储的图片
	}
	if (strStoreDate2) {
		chgClor(strStoreDate2);	//给a添加本地存储颜色值
	}	
}
	
// 改变字体颜色方法
function chgClor(obj){
	for (var j = 0; j < aA.length; j++) {
	aA[j].index = j;
	aA[j].style.color = obj;	
	}
}				


	
// 轮播
var arrUrl2 = [ 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg' ];
var arrText = [ 
				'女子怀孕时出轨初恋，孩子出生后她傻眼了',
				'1200多名中国人在菲律宾被捕现场', 
				'中国这三个省的姑娘 有钱也娶不到', 
				'两列火车相撞 已致36人遇难95人受伤' 
				];
var oDiv = document.getElementById('carousel');
var oImg = oDiv.getElementsByTagName('img')[0];
var oP = oDiv.getElementsByTagName('p')[0];
var oBack = oDiv.getElementsByClassName('back')[0];
var oNext = oDiv.getElementsByClassName('next')[0];	
var timer = null;
var onOff = true;
var n = 0;

// 初始化 
function chgPic(){
	oImg.src = arrUrl2[n];
	oP.innerHTML = arrText[n];
}
chgPic();
// 向前
oBack.onclick = function (){
	n --;
	if( n == -1 ){
		if(onOff){n = arrText.length-1;}else{
			n = 0;
			}
	}
	chgPic();
};
// 向后
oNext.onclick = function (){
	n ++;
	if( n == arrText.length ){
		if(onOff){n = 0;}else{
			n = arrText.length-1;
		}
	}
	chgPic();
};

//自动播放函数	
function autoPlay(){
	timer = setInterval(function(){
		n++;
		n%=arrText.length;
		chgPic();
	}, 8000);
}
//自动播放
setTimeout(autoPlay, 2000 );

oDiv.onmouseover = function (){
	clearTimeout(autoPlay);
};
oDiv.onmouseout = autoPlay;
setInterval(autoPlay, 8000);

