//funcion para pintar productos en la tienda
export function pintarProductos(productos){

    let fila=document.getElementById("fila")
    fila.innerHTML=""

    productos.forEach(function(producto){

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","text-center")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid", "w-100")
        foto.src=producto.fotos[0]

        let nombre=document.createElement("h3")
        nombre.textContent=producto.nombre

        let precio=document.createElement("h2")
        precio.classList.add("fw.bold")
        precio.textContent=producto.precio

        columna.addEventListener("mouseover",function(){
            foto.src=producto.fotos[1]
        })

        columna.addEventListener("mouseleave",function(){
            foto.src=producto.fotos[0]
        })

        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })

    

}















/*let buscador=document.getElementById("busqueda")

//detecto escritura en barra de busqueda
buscador.addEventListener("keypress",function(evento){
    console.log(evento.target.value)
})*/
