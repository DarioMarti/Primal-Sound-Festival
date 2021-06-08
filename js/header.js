
/*++++++++++++++ SCROLL HEADER +++++++++++++++++++++*/
var cabecera = document.getElementById('header');
var cantidad =document.querySelectorAll('a');
var iconos = document.querySelectorAll('i');
let logo = document.getElementById('logotipo');
window.addEventListener('scroll',headercolor);
function headercolor(){
	var top = window.scrollY;
	if(top >= 850){
	cabecera.style.backgroundColor="#c62e40";

	for (var a = 0; a < cantidad.length; a++) {
	cantidad[a].style.color="white";}

	for (var a = 0; a < iconos.length; a++) {
	iconos[a].style.color="white";}

	console.log('hey, estas escroleando');

	logotipo.src="img/logo/MamoodBlanco.svg";
	}else{
		cabecera.style.backgroundColor="transparent";
		for (var a = 0; a < cantidad.length; a++) {
	cantidad[a].style.color="black";
	}
	for (var a = 0; a < iconos.length; a++) {
	iconos[a].style.color="black";
	}
	logotipo.src="img/logo/MamoodNegro.svg";
	}

}


/*NOMBRE FICHERO*/
var nombre = document.getElementById('titulo').text;
console.log(nombre);
