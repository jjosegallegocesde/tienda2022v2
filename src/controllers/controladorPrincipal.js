import {productosBD} from './controladorDatos.js'
import {pintarProductos} from './controladorPintar.js'
import {buscarProducto} from './busqueda.js'

//pintamos la tienda
pintarProductos(productosBD)

//activamos buscador
buscarProducto(productosBD)

//detectamos el ampliar info
let contenedorTienda=document.getElementById("fila")
let productoInfo={}
contenedorTienda.addEventListener("click",function(evento){
    if(evento.target.classList.contains("img-fluid")){
        productoInfo.nombre=evento.target.parentElement.querySelector("h3").textContent
        productoInfo.precio=evento.target.parentElement.querySelector("h2").textContent
        productoInfo.foto=evento.target.parentElement.querySelector("img").src
        
        localStorage.setItem('infoproducto',JSON.stringify(productoInfo))
        console.log(localStorage.getItem('infoproducto'))
        window.location.href="./src/views/ampliarinfo.html"
       
    }
    
})
