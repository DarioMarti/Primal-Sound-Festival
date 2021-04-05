
/*++++++++++++++ SCROLL HEADER +++++++++++++++++++++*/


window.addEventListener('scroll',headercolor);
function headercolor(){
	var cabecera = document.getElementById('header');
var cantidad =document.querySelectorAll('a');
var header = document.querySelectorAll('h1');
var iconos = document.querySelectorAll('i');
var idioma = document.getElementById('idioma').querySelectorAll('p');
	var top = window.scrollY;
	if(top >= 500){
	cabecera.style.backgroundColor="white";

	for (var a = 0; a < idioma.length; a++) {
	idioma[a].style.color="black";
	}
	for (var a = 0; a < cantidad.length; a++) {
	cantidad[a].style.color="black";
	}
	for (var a = 0; a < header.length; a++) {
	header[a].style.color="black";
	}
	for (var a = 0; a < iconos.length; a++) {
	iconos[a].style.color="black";
	}
	}else{
		cabecera.style.backgroundColor="transparent";
		for (var a = 0; a < idioma.length; a++) {
	idioma[a].style.color="white";
	}
	for (var a = 0; a < cantidad.length; a++) {
	cantidad[a].style.color="white";
	}
	for (var a = 0; a < header.length; a++) {
	header[a].style.color="white";
	}
	for (var a = 0; a < iconos.length; a++) {
	iconos[a].style.color="white";
	}
	}
}
