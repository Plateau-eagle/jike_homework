<?php	
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');
	//如果链接成功，删除数据库中当前id数据
	if ($link) {
     	$newsid = $_POST['newsid'];
	 	mysqli_query($link,"SET NAMES utf8");
	 	$sql = "DELETE FROM `news` WHERE `news`.`id` = {$newsid}";
	 	$result = mysqli_query($link,$sql);
	 	echo json_encode(array('success'=>'ok'));
	 	echo htmlspecialchars ($string,ENT-QUOTES | ENT-XHTML,'UTF-8');	 	
	 };	 	
	 	mysqli_close($link);	 	
?>