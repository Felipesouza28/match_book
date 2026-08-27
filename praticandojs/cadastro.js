const BANCO_USUARIO = "usuarioCadastrados"


document.getElementById("btn-cadastrar").addEventListener("click", function(){

    const novoUsuario = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        usuario: document.getElementById("usuario").value,
        senha: document.getElementById("senha").value,
        confirmaSenha: document.getElementById("confirmar-senha").value
    };

    if (novoUsuario.senha != novoUsuario.confirmaSenha){

        const msgErro = document.getElementById("msg-erro");
        msgErro.textContent = "As senhas não coincidem. Tente novamente";
        msgErro.style.color = "red";

        return;
    }

    localStorage.setItem(BANCO_USUARIO, JSON.stringify(novoUsuario));
    alert("Usuário cadastrado com sucesso!");
    location.href = "login.html";

});