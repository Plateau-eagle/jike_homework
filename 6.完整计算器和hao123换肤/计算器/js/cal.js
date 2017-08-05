var ali = document.getElementsByTagName('li');
for (var i = 0; i < ali.length; i++) {
	ali[i].onmouseover = function(){
		this.style.backgroundColor = '#F37511';
		this.style.color = '#ffffff';
	};
	ali[i].onmouseout = function(){
		this.style.backgroundColor = '#D2D3D7';
		this.style.color = '#000000';
	};
}
var result = "";
var calresults="";
var oP = document.getElementById('result');
var oUl = document.getElementById('cal');
	oUl.onclick = function cal(e){
 		e = e || window.event;
        	var elem = e.target || e.srcElement;
        	if (elem.innerHTML == 'C') {
        		result = "";
        		oP.innerHTML = 0;
			return;
		}
		if (elem.innerHTML == 'x²'&&oP.innerHTML) {
			result = result*result;
        		oP.innerHTML = parseFloat(result.toFixed(8));
			return;
			}
		if (elem.innerHTML == '√'&&oP.innerHTML) {
			result = Math.sqrt(oP.innerHTML);
        		oP.innerHTML = parseFloat(result.toFixed(8));
			return;
			}
		if (elem.innerHTML == 'sin'&&oP.innerHTML) {
			result = Math.sin(oP.innerHTML * Math.PI / 180);
        		oP.innerHTML = parseFloat(result.toFixed(8));
			return;
			}
		if (elem.innerHTML == 'cos'&&oP.innerHTML) {
			result = Math.cos(oP.innerHTML * Math.PI / 180);
        		oP.innerHTML = parseFloat(result.toFixed(8));
			return;
			}
		if (elem.innerHTML == '=') {
			result = eval(result);	
			if (result == Infinity||result == -Infinity) {
				result = "NAN";
				oP.innerHTML = parseFloat(result.toFixed(8));
				alert('hi,除数不能为零!');
				return;
			}
			oP.innerHTML = parseFloat(result.toFixed(8));
			return;
			}
		if (elem.innerHTML == '←') {
			result = result.slice(0,result.length-1);
			oP.innerHTML = result;
			return;
			}
		result+= elem.innerHTML;
		oP.innerHTML = result;

	}


