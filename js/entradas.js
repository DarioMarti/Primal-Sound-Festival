
/*++++++++++++++ CONTADOR DE ENTRADAS +++++++++++++++++++++*/
var num = 0;
var num2 = 0;
var num3 = 0;
document.getElementById('mas').addEventListener('click', sumar);
function sumar(){
if (num >= 0){
	num++;
	document.getElementById('num').innerHTML=num;
	console.log(num + 3);
}
}
document.getElementById('menos').addEventListener('click', restar);
function restar(){
if (num > 0){
	num--;
	document.getElementById('num').innerHTML=num;
}
}
document.getElementById('mas2').addEventListener('click', sumar2);
function sumar2(){
if (num2 >= 0){
	num2++;
	document.getElementById('num2').innerHTML=num2;
	console.log(num + 3);
}
}
document.getElementById('menos2').addEventListener('click', restar2);
function restar2(){
if (num2 > 0){
	num2--;
	document.getElementById('num2').innerHTML=num2;
}
}
document.getElementById('mas3').addEventListener('click', sumar3);
function sumar3(){
if (num3 >= 0){
	num3++;
	document.getElementById('num3').innerHTML=num3;
	console.log(num + 3);
}
}
document.getElementById('menos3').addEventListener('click', restar3);
function restar3(){
if (num3 > 0){
	num3--;
	document.getElementById('num3').innerHTML=num3;
}
}

