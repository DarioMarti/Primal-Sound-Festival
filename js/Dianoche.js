/*++++++++++++++ BUSCADOR +++++++++++++++++++++*/
document.getElementById('nocturno').addEventListener('click',function noche(){
	document.getElementById('body').classList.toggle('bodynoche');
	document.getElementById('pensando').classList.toggle('pensandonoche');
	document.getElementById('image').classList.toggle('pensandonoche');
	document.getElementById('video').classList.toggle('pensandonoche');
	document.getElementById('risa').classList.toggle('pensandonoche');
	document.getElementById('nombreMa').classList.toggle('pensandonoche');
	document.getElementById('nombreCla').classList.toggle('pensandonoche');
	document.getElementById('nombreCri').classList.toggle('pensandonoche');
	document.getElementById('nombreAdr').classList.toggle('pensandonoche');
	document.getElementById('nombreinfo').classList.toggle('noche');
	
	document.getElementById('contactos').classList.toggle('noche2');
})
