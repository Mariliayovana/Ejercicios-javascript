
// almacenado en le localStorage para mi carrito

const productoAlmace = [
  { id: 1, producto: "fideo", precio: 30 },
  { id: 2, producto: "té", precio: 20 },
  { id: 3, producto: "pan", precio: 60 },
  { id: 4, producto: "atún", precio: 80 },
  { id: 5, producto: "gelatina", precio: 10 },
]

const guardarLocal = (clave, valor) =>{
  localStorage.setItem(clave, valor)
};
for (const product of productoAlmace){
  guardarLocal(product.id, JSON.stringify(product));
}
guardarLocal("listaProductos", JSON.stringify(productoAlmace));

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
// Para ver si el carrito esta vacio
  const carrito = []     
  carrito.length === 0 && console.log("El carrito esta vacío");

  const carritos = JSON.parse(localStorage.getItem("carrito")) || []
  // para unir el producto que tiene el mercado con los nuevos
  const carroAlmacenado = [
    { id: 1, producto: "Tomate", precio : 4.5 , imagen: "/imagen/tomates.jpeg", tipo: "online", valor: 0, resta: "-", suma: "+" , agregar: "Agregar"},
    { id: 2, producto: "Zanahoria", precio: 3.5, imagen:"/imagen/zanahorias.jpeg", tipo: "online", valor: 0, resta: "-", suma: "+" , agregar: "Agregar" },
    { id: 3, producto: "Zapallo", precio: 5.5, imagen: "/imagen/zapallo.jpeg", tipo: "online", valor: 0, resta: "-", suma: "+" , agregar: "Agregar"},
    { id: 4, producto: "Cebolla", precio: 2.5, imagen:"/imagen/cebolla.jpeg", tipo: "online", valor: 0, resta: "-", suma: "+" , agregar: "Agregar" },
    { id: 5, producto: "Col", precio: 6.7, imagen: "/imagen/col.jpeg", tipo: "online", valor: 0, resta: "-", suma: "+" , agregar: "Agregar" },
  ];

  const nuevoAlmacen = [
    { id: 6, producto: "fideo", precio: 30 },
    { id: 7, producto: "té", precio: 20 },
    { id: 8, producto: "pan", precio: 60 },
    { id: 9, producto: "atún", precio: 80 },
    { id: 10, producto: "gelatina", precio: 10 },
  ]
  const almacenTotal = [...carroAlmacenado, ...nuevoAlmacen];
  console.log(almacenTotal)
 //obtenienel valor que quiere el cliente
  const almacen = {
    id: 6, 
    producto: "fideo", 
    precio: 4.5
    };


  const { producto, precio } = almacen;
  console.log(producto);
  console.log(precio);



// INGRESANDO EL PRECIO DEL PRODUCTO Y SUS DESCUENTOS

/*const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x  => x * 0.21;
let precioProducto = Number(prompt("Ingrese el precio del producto"));
let descuento = x => x * 0.3;
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento(precioProducto));
console.log(nuevoPrecio)
*/
// LOS PRODUCTOS NUEVOS
/*
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
ingresa.push(new producto ("Zanahoria", "5.5"));
ingresa.push(new producto ("Tomate", "4.5"));
ingresa.push(new producto ("zapallo", "3.5"));
ingresa.push(new producto ("cebolla", "2.5"));

for (const guardar of ingresa)
    guardar.sumarIva();

    console.log(ingresa)

const abarrote = ["arroz", "azucar", "fideo", "té", "maiz"];
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
*/

// const productos = [
//   {id: 1, nombre: "Azucar", precio: 20},
//   {id: 2, nombre: "Arroz", precio: 15},
// ];       
// container.innerHTML = '';
// for (const almacen  of productos){
//   container.innerHTML += `<h3> ID: ${almacen.id} </h3>
//                           <p> PRODUCTO: ${almacen.nombre} </p>
//                           <p> PRECIO: $${almacen.precio} </p>`;
// }



// const todosLosProductos = [];

// boton.addEventListener("click",function (evento) {
//   evento.preventDefault()
//   let nombre = document.getElementById("nombre").value;
//   let precio = document.getElementById("precios").value;
//   if ((nombre == "" ) || (precio == "")) {
//     alert("llene todos los campos del producto");
//   }else {
//   todosLosProductos.push({ nombre, precio})
//   formulario.reset();
//   for (const suma  of todosLosProductos) {

//     container.innerHTML += `<h3> producto ingresado</h3>
//                             <p> PRODUCTO: ${suma.nombre} </p>
//                             <p> CANTIDAD: ${suma.precio} </p>`;
//     }
//   }
// });

// miFormulario.addEventListener("submit", validarFormulario);
// function validarFormulario (e) {
//   e.preventDefault();
//   let formulario = e.target
//   formulario.innerHTML = `<p> Producto: ${formulario.children.length + 1} </p>`
// }


