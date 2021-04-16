
/*++++++++++++++ SCROLL HEADER +++++++++++++++++++++*/
var cabecera = document.getElementById('header');

window.addEventListener('scroll',headercolor);
function headercolor(){
	var top = window.scrollY;
	if(top >= 800){
	cabecera.style.backgroundColor="black";
	console.log('hey, estas escroleando');
	}else{
		cabecera.style.backgroundColor="transparent";
	}
}

/*NOMBRE FICHERO*/
var nombre = document.getElementById('titulo').text;
console.log(nombre);
