function Chamaralerta() {
    let UsuarioLogado = JSON.parse(sessionStorage.getItem("UsuarioLogado"))
    let mostraAlerta = sessionStorage.getItem("MostraBoasVindas")
    let postSucesso = sessionStorage.getItem("PostSucesso")

    let MensagemInicio = document.getElementById("MensagemInicio")

    MensagemInicio.innerHTML = ""

    if (UsuarioLogado && mostraAlerta === "true") {
        MensagemInicio.innerHTML = `
            <div class="alert alert-primary alert-dismissible fade show" role="alert">
                <strong>Olá ${UsuarioLogado.nomeUsuario}!</strong><br>Bem-vindo ao Nexo, o lugar para compartilhar momentos e se conectar com amigos.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `

        sessionStorage.setItem("MostraBoasVindas", "false")
    }

    if (UsuarioLogado && postSucesso === "true") {
        MensagemInicio.innerHTML = `
            <div class="alert alert-primary alert-dismissible fade show" role="alert">
                <strong>Post realizado com sucesso!</strong><br>Obrigado ${UsuarioLogado.nomeUsuario} por compartilhar esse momento conosco!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `

        sessionStorage.setItem("PostSucesso", "false")
    }
}

function MostrarPost() {
    let postSalvo = JSON.parse(sessionStorage.getItem("novoPost"))

    if (postSalvo) {
        let conteudo = `
            <div class="user-post">
                <img src="assets/imagens/user/Usuario qualquer" class="foto-user-inicio">
                <h4>@${postSalvo.usuario}</h4>
            </div>
            <div>
                <img class="foto-post-inicio" src="assets/imagens/post/Cozinhando.jpg">
            </div>
            <div>
                <p><strong>@${postSalvo.usuario}</strong>: ${postSalvo.legenda}</p>
            </div>
        `

        let postInicio = document.getElementById("PostInicio")
        if (postInicio) {
            postInicio.innerHTML = conteudo
        }

        let postPerfil = document.getElementById("PostPerfil")
        if (postPerfil) {
            postPerfil.innerHTML = conteudo
        }
    }
}

window.addEventListener("load", () => {
    Chamaralerta();
    MostrarPost();
});