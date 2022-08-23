let respuesta = "mexico"; 
let acierto = false; 	 	 
let contador = 0;	 	 
while(contador < 3 && acierto === false) {	 	 
 let respUsuario = prompt("Equipo candidato a ganar la copa del mundo: ");		 
 if (respUsuario === respuesta) { 	 	 
 let acierto = true; 	 	 
 alert("Tu si sabes de futbol");	 	 
 }	 	 
 contador++;	 	 
}	 	 
if (!acierto) {alert("Agotaste tus 3 intentos, que feo que no dijeras Mexico")};
console.log(respUsuario.toLowerCase()); 