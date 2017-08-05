// banner轮播图
$('.carousel').carousel({

	interval:4000

});
//search动画
$("#search_btn").on("click", function() {

     $("#search").toggle(1000);

});

$(".search_close").on("click", function() {

     $("#search").slideDown('slow/400/fast');

});
//侧边栏一级菜单鼠标点击
$('aside .menu li').on('click',function(){
	$('aside .menu .active').siblings().removeClass('active');
});

$("#app_icon").mouseover(function() {

	$("#app_icon .sub_menu").css('display', 'block');
});

$("#app_icon").mouseout(function() {

	$("#app_icon .sub_menu").css('display', 'none');
});

//侧边栏二级菜单鼠标经过
$('.menu .active .level2 li').on('mouseover',function() {

	$(this).find('.course_nav').css('display','block');

	$(this).find('span').remove();
});
$('.menu .active .level2 li').on('mouseout',function() {

	$(this).find('.course_nav').css('display','none');
	
});
//子导航排列切换
$('.subnav .array1').on('click', function() {

	$('.course_list .course_row').css('display', 'block');

	$('.course_list .col').css('display', 'none');

});
$('.subnav .array2').on('click', function() {

	$('.course_list .course_row').css('display', 'none');

	$('.course_list .col').css('display', 'block');

});
//子导航鼠标经过
$('.subnav dl dd').on('mouseover',function() {

	$(this).find('.nav_item').css('display', 'block');

});

$('.subnav dl dd').on('mouseout',function() {

	$(this).find('.nav_item').css('display', 'none');

});
//悬浮层效果
$('.course_list .course_row li').on('mouseover',function() {

	$(this).find('.lesson_information').stop();

	$(this).find('.introduce').stop();

	$(this).find('.lesson_play').stop();

	$(this).find('.lesson_play').animate({opacity:1}, 500);

	$(this).find('.lesson_information').animate({

		height:"175px",

		position: "absolute"

	}, 500);

	$(this).find('.introduce').animate({

		height:"52px",

		opacity: 1,

		}, 500);

	$(this).find('.introduce').css('display', 'block');

});
$('.course_list .course_row li').on('mouseout',function() {

	$(this).find('.lesson_information').stop();

	$(this).find('.introduce').stop();

	$(this).find('.lesson_play').stop();

	$(this).find('.lesson_play').animate({opacity:0}, 500);

	$(this).find('.lesson_information').animate({height:"88px"}, 500);

	$(this).find('.introduce').animate({

		height:"0",

		opacity: 0,


	}, 500);

	$(this).find('.introduce').css('display', 'none');

});

$('.course_list .col li .lesson_img').on('mouseover',function() {

	$(this).find('.lesson_broadcast').stop();

	$(this).find('.lesson_broadcast').animate({opacity:1}, 500);


});
$('.course_list .col li').on('mouseout',function() {

	$(this).find('.lesson_broadcast').stop();

	$(this).find('.lesson_broadcast').animate({opacity:0}, 500);


});
//回到顶部
$(".go_top").click(function(){
 
	$("html body").animate({scrollTop:0}, 500);
 
})
$(window).scroll(function (){
 
	$(document).scrollTop()> 0? $(".go_top").fadeIn(100): $(".go_top").fadeOut(100); 
 
})
//footer文字变色
$('table a').on('mouseover',function() {

	$(this).css('color', '#35B558');

});
$('table a').on('mouseout',function() {

	$(this).css('color', '');

});

//分页鼠标经过
$('.page_change .pages .page_number').on('mouseover',function() {

	$(this).css('borderColor', '#35B558');


});
$('.page_change .pages .page_number').on('mouseout',function() {

	$(this).css('borderColor', '#BEBEBE');

});


