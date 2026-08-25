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

// adição e subtração de valores

const valorReal = document.getElementById("valor-real")
let contador = 0

document.getElementById("btn-menos").addEventListener("click", function(){
    if (contador > 0) {
        contador --;
        valorReal.textContent = contador
    }
})

document.getElementById("btn-mais").addEventListener("click", function(){
    contador ++;
    valorReal.textContent = contador;
})

// criando uma lista

const nomeLivro = document.getElementById("livro")
const listaLivros = document.getElementById("lista-livros")

document.getElementById("adicionar-livro").addEventListener("click", function(){

    const novoLivro = document.createElement("li")
    novoLivro.textContent = nomeLivro.value

    const botao = document.createElement("button")
    botao.textContent = "X"
    botao.style.marginLeft = "10px"

    novoLivro.appendChild(botao) 

    listaLivros.appendChild(novoLivro)

    nomeLivro.value = "";
    botao.addEventListener('click', function(){
        novoLivro.remove()
    })
})

document.getElementById("remover-livro").addEventListener("click", function(){

    listaLivros.innerText = ""; 
})