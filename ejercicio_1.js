const btnmenu = document.getElementById("menu")
const opciones = document.getElementById("opciones")
const lista = document.getElementById("lista")
const agregar = document.getElementById("agregar")
const nuevo = document.getElementById("nuevo")

btnmenu.onclick = function() {
    if (opciones.style.display === "none") {
        opciones.style.display = "block"
    } else {
        opciones.style.display = "none"
    }
}

agregar.onclick = function() {
    const texto = nuevo.value.trim()
    if (texto !== "") {
        const nuevaopcion = document.createElement("li")
        nuevaopcion.textContent = texto
        lista.appendChild(nuevaopcion)
    }
}
