<?php
	
	header("Content-type:application/json;charset=utf-8");
	//连接数据库
	require_once('db.php');
	if ($link) {
		//新闻类型页面切换
		if (@$_GET['newstype']) {
			$newstype = $_GET['newstype'];
			$sql = "SELECT * FROM `news` WHERE `newstype` = '{$newstype}'";
			mysqli_query($link,"SET NAMES utf8");
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
		}else{
			$sql = 'SELECT * FROM news';
			mysqli_query($link,"SET NAMES utf8");
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
		}				
	}else{
		echo json_encode(array('success' => 'none'));
	};
	mysqli_close($link);
?>


