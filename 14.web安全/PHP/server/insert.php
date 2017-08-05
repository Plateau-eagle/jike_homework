<?php	
	header("Content-type:application/json;charset=utf-8");
	//连接数据库
	require_once('db.php');
	//判断是否连接成功，如果成功将后台发送的数据写入数据库
	if ($link) {	 	
	 	$newstitle = $_POST['newstitle'];
	 	$newstype = $_POST['newstype'];
	 	$newsimg = $_POST['newsimg'];
	 	$newstime = $_POST['newstime'];
	 	$newssrc = $_POST['newssrc'];
	 	mysqli_query($link,"SET NAMES utf8");
	 	$sql = "INSERT INTO `news`(`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`)VALUES('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
	 	$result = mysqli_query($link,$sql);
	 	echo json_encode(array('success'=>'ok'));
	 	echo htmlspecialchars ($string,ENT-QUOTES | ENT-XHTML,'UTF-8');
	 };

?>