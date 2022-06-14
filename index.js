// manejo del DOM
const pantallaLogin = document.getElementById("login");
const nombreIngresado = document.getElementById("nombreCliente");
const contrasena = document.getElementById("password");
const error = document.getElementById("error");
const botonUno = document.getElementById("botoncito");
const salida = document.getElementById("salida")
const pantallaUno = document.getElementById("pantallaUno")
const contenedor = document.getElementById("contenedor");
const boton = document.getElementById("boton");
const miFormulario = document.getElementById("formulario");
const carrito = document.getElementById("carrito");
const carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) ?? [];

//Funciones para el logearse
let usuarioLogeado = localStorage.getItem("usuario")

function ocultarToggle() {
  pantallaLogin.classList.toggle('ocultar');
  pantallaUno.classList.toggle('ocultar');
  salida.classList.toggle('ocultar');
  carrito.classList.toggle('ocultar')
}

if (usuarioLogeado) {
  ocultarToggle()
}

function validarLaSalida(e) {
  e.preventDefault();
  localStorage.removeItem('usuario')
  localStorage.removeItem('carrito')
  ocultarToggle()
}
salida.addEventListener("click", validarLaSalida);

function obtenerNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const saludos = ["Hola", "Cómo estás", "Bienvenido", "Que gusto de verte"]

botonUno.addEventListener("click", function solicitarNombre(e) {
  e.preventDefault()
  let posSaludo = obtenerNumeroAleatorio(0, saludos.length);
  const saludoAleatorio = saludos[posSaludo]
  if (nombreIngresado.value == "MARIA" && contrasena.value == "12345") {
    let nombreCompleto = document.getElementById("nombreTitulo");
    nombreCompleto.innerHTML = saludoAleatorio + " " + nombreIngresado.value;
    ocultarToggle()
    localStorage.setItem("usuario", nombreIngresado.value)
  } else {
    error.innerHTML = "Nombre o Contraseña incorrecta";
  }
  inicio.reset();
})

// Función para mostrar los productos

let productoAlmacenado = [];
const mostrarData = async () => {
  // recorrido con json
  const resp = await fetch("./productos.json")
  const data = await resp.json()
  productoAlmacenado = data
  let mostrar = '';
  for (let i = 0; i < productoAlmacenado.length; i++) {
    let llamando = `<div class="col">
                          <div class="card h-100 container">
                            <img src="${productoAlmacenado[i].imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title" id="producto${i}">${productoAlmacenado[i].producto}</h5>
                              <span>${productoAlmacenado[i].tipo}</span>
                              <span> s/${productoAlmacenado[i].precio}</span>
                            </div>
                            <div class="text-center">
                              <span id="valor${i}">${productoAlmacenado[i].valor}</span>
                              <button class="boton resta btn btn-light">-</button>
                              <button class="boton sumar btn btn-light">+</button>
                              <button class=" agregar btn btn-light" data-id=${productoAlmacenado[i].id}>Agregar</button>
                            </div>
                          </div>
                        </div>`;
    mostrar += llamando
  }
  return mostrar
}
const llenarContenido = async () => {
  contenedor.innerHTML = await mostrarData();

  const botones = document.querySelectorAll(".boton");
  let contador = Array(productoAlmacenado.length).fill(0);
  botones.forEach((boton, index) => {
    boton.addEventListener("click", function(e) {
      e.preventDefault()
      const estilos = e.currentTarget.classList;
      const butonIndex = Math.trunc(index / 2)
      const valor = document.getElementById("valor" + butonIndex);
      if (estilos.contains("resta") && (contador[butonIndex] > 0)) {
        contador[butonIndex]--;
      } else if (estilos.contains("sumar")) {
        contador[butonIndex]++;
      }
      valor.textContent = contador[butonIndex];
    })
  })

  const agregara = document.querySelectorAll(".agregar");
  agregara.forEach((agregar, index) => {
    agregar.addEventListener("click", function(e) {
      e.preventDefault()
      const valor = document.getElementById("valor" + index);
      if (valor.textContent == "0") {
        Swal.fire({
          title: "Agregue la cantidad!",
          text: " continuar",
          icon: "error",
          confirmButtonText: "ok"
        })
      } else {
        console.log(2)
        const productId = Number(e.target.dataset.id);
        const producto = productoAlmacenado.find((p) => {
          return p.id == productId
        })
        carritoDeCompras.push({
          ...producto,
          cantidad: Number(valor.textContent)
        })
        localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))
        Swal.fire({
          title: "Se agrego",
          text: " continuar",
          icon: "success",
          confirmButtonText: "ok"
        })
      }
    })
  })
};
llenarContenido()