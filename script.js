const frutas = ["laranja", "limão", "uva"];

let lista1 = document.getElementById("fruta-1")
lista1.innerHTML = frutas[0]

let lista2 = document.getElementById("fruta-2")
lista2.innerHTML = frutas[1]

let lista3 = document.getElementById("fruta-3")
lista3.innerHTML = frutas[2]

let input = document.getElementById('fruta')

function adicionarFruta(){
    document.getElementById('fruta-4').innerHTML = input.value
}