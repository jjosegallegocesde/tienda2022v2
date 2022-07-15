let producto=JSON.parse(localStorage.getItem("infoproducto"))
console.log(producto)

let foto=document.getElementById("fotoinfo")
foto.src=producto.foto

let nombre=document.getElementById("nombreinfo")
nombre.textContent=producto.nombre

let precio=document.getElementById("precioinfo")
precio.textContent='$'+producto.precio