const removeAccents = (str) => {
  // str is because the argument is going to receive a string
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // This is also known as NORMALIZE or REGEX NORMALIZE. You can search more about it
};

let respuesta = "mexico";
let acierto = false; // If you declare with LET you don't need to re-declare the variable with led (See line 14)
let contador = 0;
// This line is the same ;) ---> while(contador < 3 && !acierto)
while (contador < 3 && acierto === false) {
  let respUsuario = prompt("Equipo candidato a ganar la copa del mundo: ");
  // We pass the answer to the function but first we convert to lowercase and then the function removes the accents and then compare with your answer
  if (removeAccents(respUsuario.toLowerCase()) === respuesta) {
    let acierto = true; // removes "let" --> acierto = true. --> This is why the process doesn't ends when the user answer correctly
    alert("Tu si sabes de futbol");
  }
  contador++;
}
if (!acierto) {
  alert("Agotaste tus 3 intentos, que feo que no dijeras Mexico");
}
console.log(respUsuario.toLowerCase());
