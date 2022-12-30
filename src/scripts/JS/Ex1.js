const boton = document.querySelector("button");
let edad = document.getElementById("userage")
let nombreUsuario = document.getElementById('username')
let formulario = document.getElementById('driver-license')


 boton.addEventListener("click", () => {
let resultadoEdad =  edad.value
let resultadoUserName = nombreUsuario.value


 let puedeConducir = resultadoEdad >= 18 ? alert(`¡Felicidades ${resultadoUserName} puedes conducir!`) 

 : alert(`Lo siento ${resultadoUserName} no puedes conducir pero eso que ahorras en gasolina`)

});


