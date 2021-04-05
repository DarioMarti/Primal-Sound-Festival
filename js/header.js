
/*++++++++++++++ SCROLL HEADER +++++++++++++++++++++*/
var cabecera = document.getElementById('header');

window.addEventListener('scroll',headercolor);
function headercolor(){
	var top = window.scrollY;
	if(top >= 900){
	cabecera.style.backgroundColor="black";
	console.log('hey, estas escroleando');
	}else{
		cabecera.style.backgroundColor="transparent";
	}
}
