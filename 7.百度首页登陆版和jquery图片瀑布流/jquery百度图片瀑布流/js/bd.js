$(window).on('load', function () {

    waterfall();
    var dataImg = {"data": 
            [
                {"src": "1.jpg"},
                {"src": "2.jpg"},
                {"src": "3.jpg"},
                {"src": "4.jpg"},
                {"src": "5.jpg"},
                {"src": "6.jpg"},
                {"src": "7.jpg"},
                {"src": "8.jpg"},
                {"src": "9.jpg"},
                {"src": "10.jpg"}                          
            ]
        };
    $(window).on('scroll', function () {
        if (scrollSlide()) {
            $.each(dataImg.data, function (index, value) {  //遍历数据
                var oLi = $("<li>").appendTo($(".ul1"));   //创建li添加到ul
                var conTent = $("<div>").addClass("content").appendTo(oLi);//创建div添加到li里
                var oImg = $("<img>").attr("src", "images/" + $(value).attr("src"));//创建img并添加src
                oImg.appendTo(conTent); //添加图片到内层div
            });
            waterfall();
        }
    })                
});

// 位置布局
function waterfall() {
    var aLi = $('.ul1>li'); //获取全部盒子
    var w = aLi.eq(0).width();//获取和盒子的宽
    var col = Math.floor($('.ul1').width() / w);//计算容器一行能放盒子数量
    var arr = []; //创建空数组储存符合条件的盒子
    aLi.each(function (index, value) {  //遍历盒子
        var h = aLi.eq(index).height(); //获取全部盒子的高度
        if (index < col) {
            arr[index] = h;   //将第一行盒子高度储存在新数组中
            $(value).css({                      
                'position': 'relative',
                'top': 0,
                'left': 0
            });
        } else {
            var minHeight = Math.min.apply(null, arr);//获取最小高度
            var minIndex = $.inArray(minHeight, arr);//获取高度最小盒子的位置
            $(value).css({                      //将盒子放在最小高度位置
                'position': 'absolute',
                'top': minHeight,
                'left': aLi.eq(minIndex).position().left
            });
            arr[minIndex] += aLi.eq(index).height();//重新计算最小高度
        }
    })
}

//滚动加载
function scrollSlide() {
    var $lastLi = $('.ul1>li').last();
    var lastliHeight = $lastLi.offset().top + Math.floor($lastLi.height() / 2);
    var scrollTop = $(window).scrollTop();
    var documentH = $(window).height();
    return (lastliHeight < scrollTop + documentH) ? true : false;
}
$(window).resize(function() {
    waterfall();
});
