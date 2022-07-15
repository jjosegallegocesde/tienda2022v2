import {pintarProductos} from './controladorPintar.js'

export function buscarProducto(productos){

    let buscador=document.getElementById("busqueda")

    //detecto escritura en barra de busqueda
    buscador.addEventListener("keyup",function(evento){

        let abuscar=evento.target.value
        let filtro=productos.filter(function(producto){

            return(producto.nombre.toLowerCase().includes(abuscar))

        })
        console.log(filtro)
        pintarProductos(filtro)
          
    })

}

