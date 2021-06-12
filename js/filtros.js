
document.getElementById('botonfiltro').addEventListener('click',function abrirfiltro(){
		document.getElementById('filtro').classList.toggle('filtroabierto');
})

var jueves = document.getElementsByClassName("diajueves");
var viernes = document.getElementsByClassName("diaviernes");
var sabado = document.getElementsByClassName("diasabado");
var domingo = document.getElementsByClassName("diadomingo");

document.getElementById('filjue').addEventListener('click', function filtrojueves(){
	for(x=0; x<viernes.length; x++){
		viernes[x].classList.toggle('diafiltrado');
	}
	document.getElementById('filjue').classList.toggle('filtrocolor');
})

document.getElementById('filvier').addEventListener('click', function filtroviernes(){
	for(x=0; x<jueves.length; x++){
		jueves[x].classList.toggle('diafiltrado');
	}
	document.getElementById('filvier').classList.toggle('filtrocolor');
})
var copen = document.getElementsByClassName("escecope");
var moscu = document.getElementsByClassName("escemoscu");
var lisboa = document.getElementsByClassName("escelisboa");

document.getElementById('filcope').addEventListener('click', function filtrocopen(){
	for(x=0; x<moscu.length; x++){
		moscu[x].classList.toggle('diafiltrado');
	}
	for(x=0; x<lisboa.length; x++){
		lisboa[x].classList.toggle('diafiltrado');
	}
	document.getElementById('filcope').classList.toggle('filtrocolor');
})

document.getElementById('filmos').addEventListener('click', function filtromoscu(){
	for(x=0; x<copen.length; x++){
		copen[x].classList.toggle('diafiltrado');
	}
	for(x=0; x<lisboa.length; x++){
		lisboa[x].classList.toggle('diafiltrado');
	}
	document.getElementById('filmos').classList.toggle('filtrocolor');
})

document.getElementById('fillis').addEventListener('click', function filtrolisboa(){
	for(x=0; x<copen.length; x++){
		copen[x].classList.toggle('diafiltrado');
	}
		for(x=0; x<moscu.length; x++){
		moscu[x].classList.toggle('diafiltrado');
	}
	document.getElementById('fillis').classList.toggle('filtrocolor');
})



var indiepop = document.getElementsByClassName("indiepop");
var indierock = document.getElementsByClassName("indierock");
var indiepost = document.getElementsByClassName("indiepost");
var garage = document.getElementsByClassName("garage");

document.getElementById('rock').addEventListener('click', function filtrorock(){
	for(x=0; x<indiepop.length; x++){
		indiepop[x].classList.toggle('diafiltrado');
	}
	for(x=0; x<garage.length; x++){
		garage[x].classList.toggle('diafiltrado');
	}
	for(x=0; x<indiepost.length; x++){
		indiepost[x].classList.toggle('diafiltrado');
	}
	document.getElementById('rock').classList.toggle('filtrocolor');
})
document.getElementById('pop').addEventListener('click', function filtropop(){
	for(x=0; x<indierock.length; x++){
		indierock[x].classList.toggle('diafiltrado');
	}
	for(x=0; x<garage.length; x++){
		garage[x].classList.toggle('diafiltrado');
	}
	for(x=0; x<indiepost.length; x++){
		indiepost[x].classList.toggle('diafiltrado');
	}
	document.getElementById('pop').classList.toggle('filtrocolor');
})
document.getElementById('gara').addEventListener('click', function filtrogara(){
	for(x=0; x<indierock.length; x++){
		indierock[x].classList.toggle('diafiltrado');
	}
	for(x=0; x<indiepop.length; x++){
		indiepop[x].classList.toggle('diafiltrado');
	}
	for(x=0; x<indiepost.length; x++){
		indiepost[x].classList.toggle('diafiltrado');
	}
	document.getElementById('gara').classList.toggle('filtrocolor');
})
document.getElementById('post').addEventListener('click', function filtropost(){
	for(x=0; x<indierock.length; x++){
		indierock[x].classList.toggle('diafiltrado');
	}
	for(x=0; x<indiepop.length; x++){
		indiepop[x].classList.toggle('diafiltrado');
	}
	for(x=0; x<garage.length; x++){
		garage[x].classList.toggle('diafiltrado');
	}
	document.getElementById('post').classList.toggle('filtrocolor');
})