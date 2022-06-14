const salida = document.getElementById("salida")
const contadorCaja = document.getElementById("contenedorCaja");
const total = document.getElementById("total")
const usuarioLogeado = localStorage.getItem("usuario")

if (!usuarioLogeado) {
  window.location.href = "/"
}
//Función para llenar el
let carritoLleno = JSON.parse(localStorage.getItem("carrito"))?? []

const carritoNuevo = (carritos) => {
  if (carritos) {
    let visualizar = "";
    let sumaPrecio = 0;
    carritos.forEach(function(almacen, index) {
      let ingresando = `<tr>
                          <th><img src="${almacen.imagen}" class="imagenCarrito" alt="..."></th>
                          <td>${almacen.producto}</td>
                          <td class = "cantidad">${almacen.cantidad}</td>
                          <td class = "precio">s/${almacen.precio}</td>
                          <td>s/${(almacen.cantidad*almacen.precio).toFixed(2)}</td>
                          <td><button value="Eliminar" title="Eliminar" class="btn btn-secondary btn-eliminar" data-index="${index}">x</button></td>
                        </tr>`;
      visualizar += ingresando
      sumaPrecio += almacen.cantidad * almacen.precio
    })

    contadorCaja.innerHTML = visualizar;
    total.innerHTML = "S/" + sumaPrecio.toFixed(2)




    //evento para eliminar
    const eliminar = document.querySelectorAll(".btn-eliminar")
    console.log(eliminar)
    eliminar.forEach((elimina) => {
      elimina.addEventListener("click", function(e) {
        e.preventDefault();
        let index = Number(e.target.dataset.index)
        carritoLleno = carritoLleno.filter((_, i) => i !== index)
        localStorage.setItem("carrito", JSON.stringify(carritoLleno))
        carritoNuevo(carritoLleno)
      })
    })
  }
}
carritoNuevo(carritoLleno)


function validarLaSalida(e) {
  e.preventDefault();
  localStorage.removeItem('usuario')
  localStorage.removeItem('carrito')
  window.location.href = "/"
}
salida.addEventListener("click", validarLaSalida);