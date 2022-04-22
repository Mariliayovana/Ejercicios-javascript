document.getElementById("miConsola").innerHTML = "Bienvenidos a Todos";
// ARRAY
/*
const nombreUsuario = ["Ana", "Lucia", "Andres", "Tomas", "Carla", "Maria"];

function recorrer (array) {
  let recorreArray = array.length;
  for (let i = 0; i < recorreArray; i++) {
    console.log(array[i]);
  }
}
recorrer(nombreUsuario);
*/
// INGRESO DEL PRODUCTO + PRECIO *  18%

class producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  }
  sumarIva(){
    this.precio = this.precio * 0.18
  }
}

const ingresa = [];
ingresa.push(new producto ("zapato", "80"));
ingresa.push(new producto ("saco", "180"));
ingresa.push(new producto ("blusa", "45"));
ingresa.push(new producto ("correa", "50"));

for (const guardar of ingresa)
    guardar.sumarIva();

    console.log(ingresa)





/*
let nombre = "Maria";
let apellido = "Zarate";
let edad = 25;
let lugar = "lima - Peru";
console.log("Mi nombre es " + nombre + " " + apellido + " tengo " + edad + " años de edad " + "Soy de " + lugar );
*/ 
/*
let ingresaNombre = prompt("Ingresa tu nombre");
console.log("Hola " + ingresaNombre);

// El cambio de dolar a soles
/*
const valorDolar = 3.83;
let cambioDolar = prompt("Ingresa la cantidad de dólares que deseas cambiar");
console.log("Su cambio fue " + (cambioDolar * valorDolar ) + " soles.");
*/
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
/*
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
*/
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

// USANDO WHILE
/*
let entrada = prompt("Ingresa tus datos");
while (entrada != "ESC"){
  console.log("El Ususario Ingresó " + entrada);
  entrada = prompt("Ingresa otro dato");
}
*/ 
// USANDO DO WHILE
/*
let numero = 0;
do {
  numero = prompt("Ingresar Número");
  console.log(numero);
} while(parseInt(numero));
*/

// FUNCIONES
/*
function mensajeAmodtra (mensaje) {
  console.log(mensaje);
}
mensajeAmodtra("hola anita");
*/
/*
function sumar(numeroUno, numeroDos) {
  resultado = numeroUno + numeroDos;
}
sumar(8,6)
console.log(resultado);

function saluda(nombre, Apellido) {
  console.log("hola " + nombre + " " + Apellido) 
}
saluda("lucia", "zarate");
*/
/*
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const multiplo = x => x * 0.21;
let precioProducto = prompt("Ingresa el Precio");
let descuento = 15;
let nuevoPrecio = resta(suma(precioProducto, multiplo(precioProducto)),descuento)
console.log(nuevoPrecio)
*/

// Datos del cliente en las variables
/*for (let i = 1; i <= 11; i++) {
    let ingresaNombre = prompt("Ingresar Nombre del Paciente " + i);
    if(i == 3){
      continue;  
    } else if (i == 8) {
      break;
    }
    console.log("Turno N° " + i + " Nombre: " + ingresaNombre);
}

function calcular (primero, segundo, operacion){
  switch(operacion) {
    case "+":
    return primero + segundo;
    break;
    
    case "-":
    return primero - segundo;
    break;

    case "*":
    return primero * segundo;
    break;
    
    case "/":
      return primero / segundo;
    break;

    default:
      return 0;
      break;

    }
}
console.log(calcular(23, 20, "+"));

const max = prompt('Ingrese el número máximo')
let total = 0
for(let i = 0; i <= max; i++) {
  if (i % 2 == 0) {
    total = total + i
  }else{
    console.log()
  }
}
console.log('El total es: ' + total)

*/
  /* // Datos del personal
  let nombreIngresa = prompt("Bienvenidos al Consultorio Medico. Ingrese su nombre".toUpperCase());
  let apellidoIngresa = prompt("Ingresa su apellido".toUpperCase());
  
  if ((nombreIngresa == "") || (apellidoIngresa == "")) {
    console.log("Error: El nombre o apellido es incorrecto");
    nombreIngresa = prompt("Bienvenidos al Consultorio Medico. Ingrese su nombre".toUpperCase());
  } else {
    console.log("Bienvenida " + nombreIngresa + " " + apellidoIngresa);
  }
  */