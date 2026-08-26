const emailSalvo = emailDigitado
const senhaSalva = senhaDigitada

const emailDigitado = document.getElementById("email")
const senhaDigitada = document.getElementById("senha")

console.log("O email:", emailDigitado)
console.log("A senha:", senhaDigitada)

const msgLogin = document.getElementById("msg-login")

document.getElementById("btn-acessar").addEventListener("click", function(){

    if(emailDigitado.value == emailSalvo && senhaDigitada.value == senhaSalva){
        msgLogin.textContent = "Login realizado com sucesso!"
        location.href = "index.html"
    } else{
        msgLogin.textContent = "Usuario ou senha incorretos"
    }
})  