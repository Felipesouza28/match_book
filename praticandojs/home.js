const nomeEntrada = document.getElementById("nome-entrada")
const nomeSaida = document.getElementById("nome-saida")
const btnTroca = document.getElementById("btn-troca")

btnTroca.addEventListener("click", () => {

    nomeSaida.textContent = nomeEntrada.value;

});

// Trocando a cor da caixa

const btnVerde = document.getElementById("btn-verde")
const btnAmarelo = document.getElementById("btn-amarelo")
const btnAzul = document.getElementById("btn-azul")
const caixa = document.getElementById("caixa")

btnVerde.addEventListener("click", function(){
    caixa.style.backgroundColor = "green";
})

btnAmarelo.addEventListener("click", function(){
    caixa.style.backgroundColor = "yellow";
})

btnAzul.addEventListener("click", function(){
    caixa.style.backgroundColor = "blue";
})