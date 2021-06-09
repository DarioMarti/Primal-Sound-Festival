
var chat = document.getElementById('abrirchat');
document.getElementById('abrirchat').addEventListener('click', function chatear(){
	document.getElementById('contactos').classList.toggle('contactosabierto');

});
var cierre = document.getElementById('abrirchat');
document.getElementById('cruz').addEventListener('click', function cerrar(){
	document.getElementById('ventanachat').classList.toggle('ventanachat2');

});



var botonEnviar = document.getElementById("enviarmensaje");
var textomensa = document.getElementById("mensajechat");
var comentario = document.getElementById("cuerpochat");

botonEnviar.addEventListener("click", enviaText);

function enviaText(){
comentario.innerHTML += textomensa.value +'<br>';
	textomensa.value= ''; }
textomensa.addEventListener("keydown", enviaTexto);

function enviaTexto(event) {
  var x = event.key;

  if (x == "Enter") { 
    comentario.innerHTML += textomensa.value +'<br>';
	textomensa.value= '';
  }
}

 document.getElementById('uno').addEventListener('click', chatuno);
function chatuno(){
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/5.jpg')";
	document.getElementById('nombreinfo').innerHTML= "María García Belloso";
}

document.getElementById('dos').addEventListener('click', chatdos);
function chatdos(){
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/20.jpg')";
	document.getElementById('nombreinfo').innerHTML= "Alba Oliver Olmedo";

}
 document.getElementById('tres').addEventListener('click', chattres);
function chattres(){
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/21.jpg')";
	document.getElementById('nombreinfo').innerHTML= "Juán José Mendilizar";
}

document.getElementById('cuatro').addEventListener('click', chatcuatro);
function chatcuatro(){
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/9.jpg')";
	document.getElementById('nombreinfo').innerHTML= "Luís Nicolás Milán";
}
 document.getElementById('cinco').addEventListener('click', chatcinco);
function chatcinco(){

	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/10.jpg')";
	document.getElementById('nombreinfo').innerHTML= "Nerea Rabanda Rioja";
}

document.getElementById('seis').addEventListener('click', chatseis);
function chatseis(){
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/11.jpg')";
	document.getElementById('nombreinfo').innerHTML= "Rosario Villalba Almansa";

}
 document.getElementById('siete').addEventListener('click', chatsiete);
function chatsiete(){
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/12.jpg')";
	document.getElementById('nombreinfo').innerHTML= "María José Giraldo";
}

document.getElementById('ocho').addEventListener('click', chatocho);
function chatocho(){
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/13.jpg')";
	document.getElementById('nombreinfo').innerHTML= "Esther Montero López";
}
 document.getElementById('nueve').addEventListener('click', chatnueve);
function chatnueve(){
	var nombrecator = document.getElementById('nombrecatorce');
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/14.jpg')";
	document.getElementById('nombreinfo').innerHTML= "Miguel Ángel Alcaide";
}

document.getElementById('diez').addEventListener('click', chatdiez);
function chatdiez(){
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/15.jpg')";
	document.getElementById('nombreinfo').innerHTML= "Carmen Montoro Cortijo";

}
 document.getElementById('once').addEventListener('click', chatonce);
function chatonce(){
	var nombrecator = document.getElementById('nombrecatorce');
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/16.jpg')";
	document.getElementById('nombreinfo').innerHTML= "Sergio Bernabé Sanmartin";
}

document.getElementById('doce').addEventListener('click', chatdoce);
function chatdoce(){
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/17.jpg')";
	document.getElementById('nombreinfo').innerHTML= "Ramón Barquero Picón";
}
 document.getElementById('catorce').addEventListener('click', chatcatorce);
function chatcatorce(){
	var nombrecator = document.getElementById('nombrecatorce');
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/19.jpg')";
	document.getElementById('nombreinfo').innerHTML= "Josep Figueras Londoño";
}

document.getElementById('trece').addEventListener('click', chattrece);
function chattrece(){
	document.getElementById('ventanachat').classList.toggle('ventanachat2');
	document.getElementById('fotoinfo').style.backgroundImage = "url('img/user/18.jpg')";
	document.getElementById('nombreinfo').innerHTML= "Gonzalo Serra Bas";
}
