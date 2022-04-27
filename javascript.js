function solicitarNombre() {
  let nombreIngresado = prompt("Ingresar su nombre");
  let apellidoIngresa = prompt("Ingresa su apellido");
  alert("El nombre ingresado es " + nombreIngresado + " " + apellidoIngresa);
}
solicitarNombre();
// INGRESANDO EL PRECIO DEL PRODUCTO Y SUS DESCUENTOS

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x  => x * 0.21;
let precioProducto = Number(prompt("Ingrese el precio del producto"));
let descuento = x => x * 0.3;
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento(precioProducto));
console.log(nuevoPrecio)

// LOS PRODUCTOS NUEVOS

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
ingresa.push(new producto ("Zanahoria", "9.5"));
ingresa.push(new producto ("Tomate", "8.5"));
ingresa.push(new producto ("zapallo", "10"));
ingresa.push(new producto ("Lechuga", "10"));

for (const guardar of ingresa)
    guardar.sumarIva();

    console.log(ingresa)

const abarrote = ["arroz", "azucar", "fideo", "té"];
// console.log(abarrote.indexOf("azucar"));
const eliminar = (nom) => {
  let proEncontrado = abarrote.indexOf(nom);

  if (proEncontrado != -1) {
    abarrote.splice(proEncontrado, 1)
  }
  return abarrote
}
let IngresoProducto = prompt("Ingrese el producto que desea eliminar: " + abarrote);
let elProducto = eliminar(IngresoProducto);
console.log(elProducto);





