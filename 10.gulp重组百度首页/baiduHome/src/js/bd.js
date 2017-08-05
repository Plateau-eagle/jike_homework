// 隐藏显示
show2($(".more"),$(".bd_more"));

show2($(".lg"),$(".user"));

show2($(".set"),$(".setting"));

show2($(".ads_weather"),$(".forecast"));

show1($(".user"));

show1($(".setting"));

function show2(obj1,obj2){

obj1.mouseover(function() {

	obj2.css({

		display: 'block'

	});
});

}

function show1(obj1){

obj1.mouseover(function() {

	obj1.css({

		display: 'block'

	});
});

}

hide1($(".bd_more"));

hide1($(".user"));

hide1($(".setting"));

hide1($(".forecast"));

hide2($(".lg"),$(".user"));

hide2($(".set"),$(".setting"));

hide2($(".ads_weather"),$(".forecast"));

function hide1(obj1) {

	obj1.mouseleave(function() {

	obj1.css({

		display: 'none'

	});
})
}
function hide2(obj1,obj2){

	obj1.mouseout(function() {

	obj2.css({

		display: 'none'

	});

});

}

// ajax获取本地天气数据
$('.forecast').on('mouseover',function(){
url='https://api.thinkpage.cn/v3/weather/daily.json?key=9bo5zcpq0gjtxb71&location=丽水&language=zh-Hans&unit=c&start=0&days=5';
$.ajax({
	url: url,
	dataType: "json",
	type:"get",
	success:function(data){
		var location = data.results.location;
		var daily = data.results.daily;
		html = ('<div class="now">'+ daily.date + ' ' + daily.text_day + ' ' + daily.temperature + ' ' + daily.code_day + ' ' + daily.wind_scale + '</div>');
		html += '<ul class="future"><li>'+daily.date + ' ' + daily.text_day + ' ' + daily.temperature + ' ' + daily.code_day + ' ' + daily.wind_scale+'</li>';
      	html += '<li>'+daily.date + ' ' + daily.text_day + ' ' + daily.temperature + ' ' + daily.code_day + ' ' + daily.wind_scale+'</li>';
      	html += '<li>'+daily.date + ' ' + daily.text_day + ' ' + daily.temperature + ' ' + daily.code_day + ' ' + daily.wind_scale+'</li>';
      	html += '<li>'+daily.date + ' ' + daily.text_day + ' ' + daily.temperature + ' ' + daily.code_day + ' ' + daily.wind_scale+'</li>';
      	html += '<li>'+daily.date + ' ' + daily.text_day + ' ' + daily.temperature + ' ' + daily.code_day + ' ' + daily.wind_scale+'</li></ul>';     	
      	$(".forecast").html(html);
	}
});
});

// 换肤
$('.other .skin_peeler').click(function() {
	$('.hf_wrap').toggle(500);
});
$('.up').click(function() {
	$('.hf_wrap').toggle(500);
});
$('.hf_nav li').click(function(){
	$('.hf_nav li').attr('class','')
	$('.hf_nav li').find('a').attr('class','');
	$('.bg_pic').css('display','none');
	$(this).attr('class','active');
	$(this).find('a').attr('class','active');
	$('.bg_pic').eq($(this).index()).css('display','block');
});

$('.bg_pic li img').click(function() {
	console.log($(this).attr('src'));
	// $('body').css("background","url("+$(this).attr('src')+")");
	$('body').css({
		background: "url("+$(this).attr('src')+")",
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100%,100%'
	});

	$("article .logo img").attr("src", "img/logo_white.png");

	localStorage.setItem('background',"url("+$(this).attr('src')+")");  //进行本地存储图片

	localStorage.setItem('src',"img/logo_white.png");  //进行本地存储图片
});

$(function(){

	var strStoreDate1 = window.localStorage ? localStorage.getItem('background') : Cookie.read('background');//获取图片

	var strStoreDate2 = window.localStorage ? localStorage.getItem('src') : Cookie.read("img/logo_white.png");//获取图片

	if (strStoreDate1) {

		$('body').css({

		background: strStoreDate1,//给body添加本地存储的图片

		backgroundRepeat: 'no-repeat',

		backgroundSize: '100%,100%'

	});

}

	if (strStoreDate2) {

		$("article .logo img").attr("src", strStoreDate2);

	}


});

$('.mynav').click(function() {
	$('.nav_content').toggle();
	if ($('.nav_content').attr('display','block')) {
		$('.nav_icon').css({
			transformOrigin: '3px 3px',
			transform: 'rotateZ(-90deg)'
		});
	}
	else if($('.nav_content').attr('display','none'))
		{$('.nav_icon').css({
			transformOrigin: '3px 3px',
			transform: 'rotateZ(90deg)'
		});}		
});

// content选项卡
$('.tab').find('a').click(function(){
	$('.tab a').attr('class','');
	$('.tab_wrap .content').css('display','none');
	$(this).attr('class','active');
	$('.tab_wrap .content').eq($(this).index()).css('display','block');
});
/*$(".tab").on("click","a",function(){
    $(".tab a").removeClass("active");
    $(this).addClass("active");
});*/


//固定窗口
$(window).scroll(function(){
	var s = $(window).scrollTop();
	if(s >= 200){
		$('.real_news').css({
			position: 'fixed',
			top: '40px',
			right: '325px',
		});;
	}else if (s < 200) {
		$('.real_news').css({
			position: 'absolute',
			top: '0',
			right: '5px',
		});;
	}
});


