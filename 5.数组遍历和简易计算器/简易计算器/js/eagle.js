var aInpt = document.getElementsByTagName('input');
	for (var i = 0; i < aInpt.length; i++) {
		aInpt[i].index = i;
		aInpt[i].onfocus = function(){
			if(this.value == "请输入数值"){
			this.value = "";}
	}
		aInpt[i].onblur = function(){
			if(this.value == ""){
			this.value = "请输入数值";}
		}
}

var oInpt1 = document.getElementById('inpt1');
var oInpt2 = document.getElementById('inpt2');
var oSelt = document.getElementById('selt');
var oBtn = document.getElementById('btn');
var oP = document.getElementById('result');

oBtn.onclick = function cal(x,y,char){
	var x = inpt1.value-0;
	var y = oInpt2.value-0;
	var char = oSelt.value;
	if (char == "*") {
		var result = parseFloat((x*y).toFixed(4));
	}else if (char == "/") {
		if (y!=0) {var result = parseFloat((x/y).toFixed(4));}
		else{
			alert("别犯傻，除数不能为0！"); 
			result = "NAN";
		}
	}else if (char == "+") {
		var result = parseFloat((x+y).toFixed(4));
	}else if (char == "-") {
		var result = parseFloat((x-y).toFixed(4));
	}
	oP.innerHTML = result;
}




