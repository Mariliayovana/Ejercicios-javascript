//función para la bienvenida
function obtenerNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let saludos =[ "Hola", "Cómo estás", "Bienvenido", "Que gusto de verte"]

let botonUno = document.getElementById("botoncito");
botonUno.addEventListener("click", function solicitarNombre(e) {
  e.preventDefault()
  let nombreIngresado = document.getElementById("nombreCliente").value;
  let apellidoIngresa = document.getElementById("apellido").value;
  
  let posSaludo = obtenerNumeroAleatorio(0,saludos.length);
  const saludoAleatorio = saludos[posSaludo]
  if ((nombreIngresado == "") || (apellidoIngresa == "")) {
    alert("Ingrese su Nombre y Apellido");
  } else{
    let nombreCompleto = document.getElementById("nombreTitulo");
    nombreCompleto.innerHTML = saludoAleatorio + " " + nombreIngresado + " " + apellidoIngresa;
  }
  inicio.reset();
})
//función para ingresar a los productos

let container = document.getElementById("contenedor");

const producto = [
  {id: 1, nombre: "Azucar", precio: 20},
  {id: 2, nombre: "Arroz", precio: 15},
];       
container.innerHTML = '';
for (const almacen  of producto){
  container.innerHTML += `<h3> ID: ${almacen.id} </h3>
                          <p> PRODUCTO: ${almacen.nombre} </p>
                          <p> PRECIO: $${almacen.precio} </p>`;
}


let boton = document.getElementById("boton");

const todosLosProductos = [];

boton.addEventListener("click",function (evento) {
  evento.preventDefault()
  let nombre = document.getElementById("nombre").value;
  let precio = document.getElementById("precios").value;
  if ((nombre == "" ) || (precio == "")) {
    alert("llene todos los campos del producto");
  }else {
  todosLosProductos.push({ nombre, precio})
  formulario.reset();
  for (const suma  of todosLosProductos) {

    container.innerHTML += `<h3> producto ingresado</h3>
                            <p> PRODUCTO: ${suma.nombre} </p>
                            <p> CANTIDAD: ${suma.precio} </p>`;
    }
  }
});

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario (e) {
  e.preventDefault();
  let formulario = e.target
  formulario.innerHTML = `<p> Producto: ${formulario.children.length + 1} </p>`
}
// almacenado en le localStorage para mi carrito

const productoAlmacenado = [
  { id: 1, producto: "fideo", precio: 30 },
  { id: 2, producto: "té", precio: 20 },
  { id: 3, producto: "pan", precio: 60 },
  { id: 4, producto: "atún", precio: 80 },
  { id: 5, producto: "gelatina", precio: 10 },
]

const guardarLocal = (clave, valor) =>{
  localStorage.setItem(clave, valor)
};
for (const product of productoAlmacenado){
  guardarLocal(product.id, JSON.stringify(product));
}
guardarLocal("listaProductos", JSON.stringify(productoAlmacenado));

class Producto {
  constructor(obj) {
    this.nombre = obj.producto.toUpperCase();
    this.precio = parseFloat(obj.precio);
  }
  sumaIva(){
    this.precio = this.precio * 1.20;
  }
}
const almacenando = JSON.parse(localStorage.getItem("listaProductos"));
const productos = [];
for (const objeto of almacenando)
      productos.push(new Producto(objeto));
      console.log(productos)
for (const product of productos)
      product.sumaIva();
      
      console.log(productos)



// INGRESANDO EL PRECIO DEL PRODUCTO Y SUS DESCUENTOS

// const suma = (a,b) => a + b;
// const resta = (a,b) => a - b;
// const iva = x  => x * 0.21;
// let precioProducto = Number(prompt("Ingrese el precio del producto"));
// let descuento = x => x * 0.3;
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento(precioProducto));
// console.log(nuevoPrecio)

// // LOS PRODUCTOS NUEVOS

// class producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre.toUpperCase();
//     this.precio = parseFloat(precio);
//     this.vendido = false;
//   }
//   sumarIva(){
//     this.precio = this.precio * 0.18
//   }
// }

// const ingresa = [];
// ingresa.push(new producto ("Zanahoria", "9.5"));
// ingresa.push(new producto ("Tomate", "8.5"));
// ingresa.push(new producto ("zapallo", "10"));
// ingresa.push(new producto ("Lechuga", "10"));

// for (const guardar of ingresa)
//     guardar.sumarIva();

//     console.log(ingresa)

// const abarrote = ["arroz", "azucar", "fideo", "té", "maiz"];
// // console.log(abarrote.indexOf("azucar"));
// const eliminar = (nom) => {
//   let proEncontrado = abarrote.indexOf(nom);

//   if (proEncontrado != -1) {
//     abarrote.splice(proEncontrado, 1)
//   }
//   return abarrote
// }
// let IngresoProducto = prompt("Ingrese el producto que desea eliminar: " + abarrote);
// let elProducto = eliminar(IngresoProducto);
// console.log(elProducto);





