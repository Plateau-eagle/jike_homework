<?php
	
	header("Content-type:application/json;charset=utf-8");
	//连接数据库
	require_once('db.php');
	//如果连接成功，更新数据库
	if ($link) {	 	
	 	$newstitle = $_POST['newstitle'];
	 	$newstype = $_POST['newstype'];
	 	$newsimg = $_POST['newsimg'];
	 	$newstime = $_POST['newstime'];
	 	$newssrc = $_POST['newssrc'];
	 	$newsid = $_POST['id'];
	 	mysqli_query($link,"SET NAMES utf8");
	 	$sql = "UPDATE `news` SET `newstitle` = '{$newstitle}',`newstype` = '{$newstype}',`newsimg` = '{$newsimg}',`newstime` = '{$newstime}',`newssrc` = '{$newssrc}' WHERE `id` = '{$newsid}'";
	 	$result = mysqli_query($link,$sql);
	 	echo json_encode(array('success'=>'ok'));
	 	echo htmlspecialchars ($string,ENT-QUOTES | ENT-XHTML,'UTF-8');
	 };
	  	mysqli_close($link);
?>