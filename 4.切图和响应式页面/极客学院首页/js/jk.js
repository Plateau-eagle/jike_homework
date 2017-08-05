// 头部隐藏
$("#jk_close").click(function(event) {
	$("#header").hide();
});

// banner轮播图
$('.carousel').carousel({
	interval:4000
});

$(".page_switch").on("click", function() {
     $(this).addClass(".page_switch_active").siblings().removeClass(".page_switch_active");
});
$("#search_btn").on("click", function() {
     $("#search").css({
     	display: 'block',
     });
});

$(".search_close").on("click", function() {
     $("#search").css({
     	display: 'none',
     });
});