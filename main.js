// manejo del DOM
let botonUno = document.getElementById("botoncito");
let nombreIngresado = document.getElementById("nombreCliente");
let contrasena = document.getElementById("password");
let pantallaLogin = document.getElementById("login");
let error = document.getElementById("error");
let contenedor = document.getElementById("contenedor");
let boton = document.getElementById("boton");
let miFormulario = document.getElementById("formulario");
let carro = document.getElementById("carro");


//función de Login
function obtenerNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let saludos =[ "Hola", "Cómo estás", "Bienvenido", "Que gusto de verte"]

botonUno.addEventListener("click", function solicitarNombre(e) {
  e.preventDefault()
  let posSaludo = obtenerNumeroAleatorio(0,saludos.length);
  const saludoAleatorio = saludos[posSaludo]
  if (nombreIngresado.value == "MARIA" && contrasena.value == "12345") {
    let nombreCompleto = document.getElementById("nombreTitulo");
    nombreCompleto.innerHTML = saludoAleatorio + " " + nombreIngresado.value;
    pantallaLogin.classList.toggle('ocultar');
  } else{
    error.innerHTML = "Nombre o Contraseña incorrecta";
  
  }
  inicio.reset();
})
const productoAlmacenado = [
    { id: 1, producto: "Tomate", precio : 4.5 , imagen: "/imagen/tomates.jpeg", tipo: "online", valor: 0, resta: "-", suma: "+" , agregar: "Agregar"},
    { id: 2, producto: "Zanahoria", precio: 3.5, imagen:"/imagen/zanahorias.jpeg", tipo: "online", valor: 0, resta: "-", suma: "+" , agregar: "Agregar" },
    { id: 3, producto: "Zapallo", precio: 5.5, imagen: "/imagen/zapallo.jpeg", tipo: "online", valor: 0, resta: "-", suma: "+" , agregar: "Agregar"},
    { id: 4, producto: "Cebolla", precio: 2.5, imagen:"/imagen/cebolla.jpeg", tipo: "online", valor: 0, resta: "-", suma: "+" , agregar: "Agregar" },
    { id: 5, producto: "Col", precio: 6.7, imagen: "/imagen/col.jpeg", tipo: "online", valor: 0, resta: "-", suma: "+" , agregar: "Agregar" },
  ];

  const mostrarData = () => {
    let mostrar = '';
    for (let i = 0; i < productoAlmacenado.length; i++){
      let llamando = `<div class="col">
                        <div class="card h-100">
                          <img src="${productoAlmacenado[i].imagen}" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${productoAlmacenado[i].producto}</h5>
                            <span>${productoAlmacenado[i].tipo}</span>
                            <span> s/${productoAlmacenado[i].precio }</span>
                          </div>
                          <div class="text-center">
                            <span id="valor${i}">${productoAlmacenado[i].valor}</span>
                            <button class="boton resta btn btn-light">${productoAlmacenado[i].resta}</button>
                            <button class="boton sumar btn btn-light">${productoAlmacenado[i].suma}</button>
                            <button class="btn btn-light">${productoAlmacenado[i].agregar}</button>
                          </div>
                        </div>
                      </div>`;
                mostrar += llamando      
    }
    return mostrar

  }
  const llenarContenido = () => {
    // console.log(contenedor)
    contenedor.innerHTML = mostrarData();
  };
  llenarContenido()

  // contador 
const botones = document.querySelectorAll(".boton");

let contador = Array(productoAlmacenado.length).fill(0);
botones.forEach((boton, index) => {
  boton.addEventListener("click", function(e){
    e.preventDefault()
    const estilos = e.currentTarget.classList;
    const butonIndex = Math.trunc(index /2  )
    const valor = document.getElementById("valor" + butonIndex);
    if(estilos.contains("resta")&& (contador[butonIndex] > 0)) {
      contador[butonIndex]--;
    } else if (estilos.contains("sumar")){
      contador[butonIndex]++;
    }
    valor.textContent = contador[butonIndex];
  })
})

