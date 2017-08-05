<?php	
	header("Content-type:application/json;charset=utf-8");
	//连接数据库
	require_once('db.php');
	//如果连接成功，返回当前id数据内容
	if ($link) {
     	$newsid = $_GET['newsid'];
	 	mysqli_query($link,"SET NAMES utf8");
	 	$sql = "SELECT * FROM `news` WHERE `id` = {$newsid}";
	 	$result = mysqli_query($link,$sql);
	 	$senddata = array();
		while($row = mysqli_fetch_assoc($result)){
			array_push($senddata, array(
				'id' => $row['id'],
				'newstype' => $row['newstype'],
				'newstitle' => $row['newstitle'],
				'newsimg' => $row['newsimg'],
				'newstime' => $row['newstime'],
				'newssrc' => $row['newssrc']
				));
		}
		echo json_encode($senddata);
		echo htmlspecialchars ($string,ENT-QUOTES | ENT-XHTML,'UTF-8');	
	 };	 	
	 	mysqli_close($link);	 	
?>