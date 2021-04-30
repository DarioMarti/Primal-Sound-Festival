/*++++++++++++++ BUSCADOR +++++++++++++++++++++*/
document.getElementById('buscador').addEventListener('click',function busca(){
	document.getElementById('franjaBuscador').classList.toggle('buscando');
})
document.getElementById('buscadorMovil').addEventListener('click',function buscaMovil(){
	document.getElementById('franjaBuscador').classList.toggle('buscando');
})
document.getElementById('editado').addEventListener('click',function editar(){
	document.getElementById('editarProfile').classList.toggle('editando');
})

