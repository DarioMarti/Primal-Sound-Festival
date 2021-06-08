var botonEnviar = document.getElementById("cambiar");
var textomensa = document.getElementById("textProfile");
var textocity = document.getElementById("cityProfile");
var textoarea = document.getElementById("areaProfile");
var textohobi = document.getElementById("hobbiePro");
var textofav = document.getElementById("favoritasProfile");

var nombre = document.getElementById("name");
var sobre = document.getElementById("about");
var city = document.getElementById("ciudad");
var hobbies = document.getElementById("hobbies");
var favorita = document.getElementById("favorita");

botonEnviar.addEventListener("click", enviaText);
var foto= document.getElementById('fotoProfile');
var cambiofoto = document.getElementById('file').value;
var source =document.getElementById('fotiño')
function enviaText(){
nombre.innerHTML = textomensa.value ; 
city.innerHTML = textocity.value ; 
sobre.innerHTML = textoarea.value ; 
hobbies.innerHTML = textohobi.value ; 
favorita.innerHTML = textofav.value ;
document.getElementById('editarProfile').classList.toggle('editando')

document.getElementById('fotiño').src=cambiofoto;
console.log(cambiofoto);

}





document.getElementById('editado').addEventListener('click',function editar(){
	document.getElementById('editarProfile').classList.toggle('editando');
})



