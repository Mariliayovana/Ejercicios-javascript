document.getElementById("miConsola").innerHTML = "Bienvenidos a Todos";
// Datos del cliente en las variables
let nombre = "Maria";
let apellido = "Zarate";
let edad = 25;
let lugar = "lima - Peru";
console.log("Mi nombre es " + nombre + " " + apellido + " tengo " + edad + " años de edad " + "Soy de " + lugar );
/*
let ingresaNombre = prompt("Ingresa tu nombre");
console.log("Hola " + ingresaNombre);
*/
// El cambio de dolar a soles
const valorDolar = 3.83;
let cambioDolar = prompt("Ingresa la cantidad de dólares que deseas cambiar");
console.log("Su cambio fue " + (cambioDolar * valorDolar ) + " soles.");
/*
let numero = 8;
if ( numero == 8) {
  console.log("correcto es 8");
} else{
  console.log("no es 8")
}
*/
// Ingresar el nombre usando las condiciones
/*
let nombreUsuario = prompt("Ingresa nombre de Usuario");

if (nombreUsuario == "") {
    console.log("No ingresaste el nombre de Usuario");
} else {
  console.log("Nombre de Usuario ingresado " + nombreUsuario);
}
*/
let numeroIngresado = prompt("Ingresa un número del 0 al 9");

if (numeroIngresado == 0) {
    console.log("cero");  
} else if (numeroIngresado == 1){
  console.log("uno");
} else if (numeroIngresado == 2){
  console.log("dos");
} else if (numeroIngresado == 3){
  console.log("tres");
} else if (numeroIngresado == 4){
  console.log("cuatro");
} else if (numeroIngresado == 5){
  console.log("cinco");
}else if (numeroIngresado == 6){
  console.log("seis");
} else if (numeroIngresado == 7){
  console.log("siete");
} else if (numeroIngresado == 8){
  console.log("ocho");
} else if (numeroIngresado == 9){
  console.log("nueve");
} else {
  console.log("Incorrecto, debe ingresar un número de 0 al 9. ");
}

let nombreIngresa = prompt("Ingresa su nombre");
let apellidoIngresa = prompt("Ingresa su apellido");

if ((nombreIngresa == "Maria") && (apellidoIngresa == "Zarate")) {
  console.log("Bienvenida Maria Zarate");
} else {
  console.log("Error: El nombre o apellido es incorrecto");
}
// USANDO FOR

// for (desde; hasta; actualización){ ...
// }
/*
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}
*/ 
/*
let ingresarNumero = parseInt(prompt("Ingresar el Numero"));
for (let i = 0; i < 10; i ++) {
  let resultado = ingresarNumero * i;
  console.log(ingresarNumero + " X " + i + " = " + resultado);
}
*/
// Citas de los clientes usadas y no usadas
for (let i = 1; i <= 11; i++) {
    let ingresaNombre = prompt("Ingresar Nombre");
    if(i == 3 || i == 5){
      continue;  
    } else if (i == 7) {
      break;
    }
    console.log("Turno N° " + i + " Nombre: " + ingresaNombre);
}
// USANDO WHILE

let entrada = prompt("Ingresa tus datos");
while (entrada != "ESC"){
  console.log("El Ususario Ingresó " + entrada);
entrada = prompt("Ingresa otro dato");
} 
// USANDO DO WHILE

let numero = 0;
do {
  numero = prompt("Ingresar Número");
  console.log(numero);
} while(parseInt(numero));
