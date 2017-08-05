//打开后台页面得时候，发送请求，刷新新闻列表
$(document).ready(function(){
	var $newsTable = $('#newstable tbody');
	refreshNews();
	//添加新闻
	$('#btnsubmit').click(function(e) {		
		e.preventDefault();
		//输入判断，如果为空，显示红框
		if($('#newstitle').val() ==='' || $('#newssrc').val() ===''){
			if($('#newstitle').val() ===''){
				$('#newstitle').parent().addClass('has-error');
			}else{
				$('#newstitle').parent().removeClass('has-error');
			}
			if($('#newstype').val() ===''){
				$('#newstype').parent().addClass('has-error');
			}else{
				$('#newstype').parent().removeClass('has-error');
			}
			if($('#newsimg').val() ===''){
				$('#newsimg').parent().addClass('has-error');
			}else{
				$('#newsimg').parent().removeClass('has-error');
			}
			if($('#newssrc').val() ===''){
				$('#newssrc').parent().addClass('has-error');
			}else{
				$('#newssrc').parent().removeClass('has-error');
			}
		}else{

			//提交添加			
			var josnNews = {
				newstitle:$('#newstitle').val(),
				newstype:$('#newstype').val(),
				newsimg:$('#newsimg').val(),
				newstime:$('#newstime').val(),
				newssrc:$('#newssrc').val()
			};
			$.ajax({
				url: '../server/insert.php',
				type: 'post',
				dataType: 'json',
				data: josnNews,
				success:function(data){
					console.log(data);
					refreshNews();
				}
			})
		}
	
	});
		//删除新闻功能		
		var deleteId = null;
		$newsTable.on('click', '.btn-danger', function(e) {
			$('#deleteModal').modal('show');
			deleteId = $(this).parent().prevAll().eq(3).html();			
		});
		$('#deleteModal #confirmDelete').click(function(e) {			
			if (deleteId) {
				$.ajax({
				url: '../server/delete.php',
				type: 'post',
				data: {newsid:deleteId},
				success:function(data){
					console.log('删除成功');
					$('#deleteModal').modal('hide');
					refreshNews();
				}
			});
			};
		});
		//修改新闻功能		
		var updateId = null;
		//点击修改获取当前id数据
		$newsTable.on('click', '.btn-primary', function(e) {
			$('#updateModal').modal('show');
			updateId = $(this).parent().prevAll().eq(3).html();
			$.ajax({
				url: '../server/curnews.php',
				type: 'get',
				datatype:'json',
				data: {newsid:updateId},
				success:function(data){
					$('#unewstitle').val(data[0].newstitle);
					$('#unewstype').val(data[0].newstype);
					$('#unewsimg').val(data[0].newsimg);
					var utime = data[0].newstime.split(' ')[0];
					$('#unewstime').val(utime);
					$('#unewssrc').val(data[0].newssrc);
				}			
			});
		});
		//点击确认修改发送请求传新的数据道数据库
		$('#updateModal #confirmUpdate').click(function(e) {			
			$.ajax({
				url: '../server/update.php',
				type: 'post',
				data: {
					newstitle:$('#unewstitle').val()
					newstype:$('#unewstype').val(),
					newsimg:$('#unewsimg').val(),
					newstime:$('#unewstime').val(),
					newssrc:$('#unewssrc').val(),
					id:updateId
				},
				success:function(data){
					console.log(data);
					$('#updateModal').modal('hide');
					refreshNews();
				}
			});			
		});
	//刷新新生成表格单元
	function refreshNews(){
	$newsTable.empty();
	$.ajax({
		url: '../server/getNews.php',
		type: 'get',
		dataType: 'json',
		success:function(data){
			console.log(data);
			data.forEach(function(item,index,array) {				
				var $tdid = $('<td>').html(item.id);
				var $tdtype = $('<td>').html(item.newstype);
				var $tdtitle = $('<td>').html(item.newstitle);
				var $tdimg = $('<td>').html(item.newsimg);
				var $tdcrtl = $('<td>');
				var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
				var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
				$tdcrtl.append($btnupdate,$btndelete);
				var $tRow = $('<tr>');
				$tRow.append($tdid,$tdtitle,$tdtype,$tdimg,$tdcrtl);
				$newsTable.append($tRow);
			});
		}
	});	
};
});

