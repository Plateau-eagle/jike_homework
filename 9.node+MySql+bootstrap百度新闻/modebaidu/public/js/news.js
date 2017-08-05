$(document).ready(function() {
    refreshNews('精选');
    $('nav a').click(function(e) {     
        e.preventDefault();
        var type = $(this).text();
        refreshNews(type);
    });
    $(window).resize(function() {
        var w = screen.width;
        if(w<700){
          window.location.reload();
        }
     });
});

//刷新新闻
function refreshNews(type) {
    var $lists = $('.news-lists');
    $lists.empty();
    $.ajax({
        url: '/news',
        type: 'get',
        datatype: 'json',
        data:{newstype:type},
        success: function(data) {
            data.forEach(function(item,index,array){
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsImg = $('<div></div>').addClass('news-pic').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);
                var $newsTitle = $('<div></div>').addClass('news-title').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsTitle);
                var $p = $('<p></p>').appendTo($newsTitle);
                var $newsTime = $('<span></span>').addClass('news-time').html(item.newstime).appendTo($p);
                var $source = $('<span></span>').addClass('source').html(item.newssrc).appendTo($p);
            }) 
            console.log(data);
        }
    });
};
