const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const resultado = document.getElementById("resultado")

document.getElementById("suma").addEventListener("click", function() {
    resultado.value = parseInt(num1.value) + parseInt(num2.value)
})

document.getElementById("resta").addEventListener("click", function() {
    resultado.value = parseInt(num1.value) - parseInt(num2.value)
})

document.getElementById("multiplicacion").addEventListener("click", function() {
    resultado.value = parseInt(num1.value) * parseInt(num2.value)
})

document.getElementById("division").addEventListener("click", function() {
    resultado.value = parseInt(num1.value) / parseInt(num2.value)
})
