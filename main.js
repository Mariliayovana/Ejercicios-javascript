// manejo del DOM
let botonUno = document.getElementById("botoncito");
let nombreIngresado = document.getElementById("nombreCliente");
let contrasena = document.getElementById("password");
let pantallaLogin = document.getElementById("login");
let error = document.getElementById("error");
let contenedor = document.getElementById("contenedor");
let boton = document.getElementById("boton");
let miFormulario = document.getElementById("formulario");
let contadorCaja = document.getElementById("contenedorCaja");
let carritoDeCompras = [];

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


let productoAlmacenado = []

  const mostrarData = async() => {
    // recorrido con json
    const resp = await fetch("./productos.json")
    const data = await resp.json()
      productoAlmacenado = data
      let mostrar = '';
      for (let i = 0; i < productoAlmacenado.length; i++){
        let llamando = `<div class="col">
                          <div class="card h-100">
                            <img src="${productoAlmacenado[i].imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title" id="producto${i}">${productoAlmacenado[i].producto}</h5>
                              <span>${productoAlmacenado[i].tipo}</span>
                              <span> s/${productoAlmacenado[i].precio }</span>
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
    // console.log(contenedor)
    contenedor.innerHTML =await mostrarData();

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

const agregara = document.querySelectorAll(".agregar");
agregara.forEach((agregar, index) => {
  agregar.addEventListener("click", function(e){
    e.preventDefault()
    const producto = document.getElementById("producto" + index);
    const valor = document.getElementById("valor" + index);
  
    
    if (valor.textContent == "0") {
      Swal.fire({
        title: "Agregue la cantidad!",
        text: " continuar",
        icon: "error",
        confirmButtonText:"ok"
      })
    }else{
      const productId= Number(e.target.dataset.id);
      const producto = productoAlmacenado.find((p) =>{
        return p.id == productId
      } )
      carritoDeCompras.push({
        ...producto,cantidad:Number(valor.textContent)
      })
      let visualizar = "";
      for (const almacen  of carritoDeCompras){

      let ingresando =`<tr>
                        <th scope="row" data-id=${almacen.id}></th>
                        <td>${almacen.producto}</td>
                        <td>${almacen.cantidad}</td>
                        <td>s/${almacen.precio }</td>
                      </tr>`;
                visualizar += ingresando
                // console.log(visualizar)
      }
      
      // console.log(contadorCaja)
      contadorCaja.innerHTML = visualizar;
      }
    })
  })
};
llenarContenido()

