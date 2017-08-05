var oIpt1 = document.getElementById('inpt1');
var oIpt2 = document.getElementById('inpt2');
var oBtn = document.getElementById('btn1');	
oBtn.onclick = function (){
	var score = oIpt1.value;	
	if (score > 90&&score <= 100) {
	oIpt2.value = 1+"等生";	
	}else if (score > 80&&score <= 90) {
	oIpt2.value = 2+"等生";	
	}else if (score > 70&&score <= 80) {
	oIpt2.value = 3+"等生";	
	}else if (score > 60&&score <= 70) {
	oIpt2.value = 4+"等生";	
	}else if (score > 50&&score <= 60) {
	oIpt2.value = 5+"等生";	
	}else if (score > 40&&score <= 50) {
	oIpt2.value = 6+"等生";	
	}else if (score > 30&&score <= 40) {
	oIpt2.value = 7+"等生";	
	}else if (score > 20&&score <= 30) {
	oIpt2.value = 8+"等生";	
	}else if (score > 10&&score <= 20) {
	oIpt2.value = 9+"等生";	
	}else if (score >= 0&&score <= 10&&score != "") {
	oIpt2.value = 10+"等生";	
	}else{
		oIpt2.value = "输入有误！";
	}
		
/*switch(true){
	case (score > 90&&score <= 100):
		oIpt2.value = 1+"等生";	
		break;
	case (score > 80&&score <= 90):
		oIpt2.value = 2+"等生";
		break;	
	case (score > 70&&score <= 80):
		oIpt2.value = 3+"等生";
		break;	
	case (score > 60&&score <= 70):
		oIpt2.value = 4+"等生";
		break;	
	case (score > 50&&score <= 60):
		oIpt2.value = 5+"等生";
		break;
	case (score > 40&&score <=50): 
		oIpt2.value = 6+"等生";
		break;	
	case (score > 30&&score <= 40):
		oIpt2.value = 7+"等生";
		break;	
	case (score > 20&&score <= 30): 
		oIpt2.value = 8+"等生";
		break;	
	case (score > 10&&score <= 20):
		oIpt2.value = 9+"等生";
		break;
	case (score > 0&&score <= 10):
		oIpt2.value = 10+"等生";
		break;
	case (score > 0&&score <= 10):
		oIpt2.value = 10+"等生";
		break;	
	default: 
		oIpt2.value = "输入有误！"
		break;			
	}*/
}


