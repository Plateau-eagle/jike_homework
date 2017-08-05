<?php
	
	header("Content-type:application/json;charset=utf-8");
	//地址
	$host = 'localhost';
	//数据库用户名
	$user = 'root';
	//数据库密码
	$password = 'wsj2008';
	//数据库名称
	$sql_name = 'baidunews';
	//数据库端口
	$port = 3306;
	//连接数据库
	$link = mysqli_connect($host,$user,$password,$sql_name,$port);

	String sql = "select id, no from user where id=?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, id);
        ps.executeQuery();
?>