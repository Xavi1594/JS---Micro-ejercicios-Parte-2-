const botonDni = document.getElementById("btn-calculo-letra");
const numero = document.getElementById('numero-dni');
const tabla = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

botonDni.addEventListener("click", () => {
  const numeroDNI = numero.value;
  if (isNaN(numeroDNI) || numeroDNI < 0 || numeroDNI > 99999999) {
    alert('Debes introducir un número entre 0 y 99999999');
  } else {
    const resto23 = numeroDNI % 23;
    const letraDNI = tabla[resto23];
    alert(`Tú DNI es el número ${numeroDNI} y la letra ${letraDNI}`);
  }
});