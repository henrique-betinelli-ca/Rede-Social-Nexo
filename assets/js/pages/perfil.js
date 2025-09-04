import { posts } from "../global/global.js"

function CarregarPerfil() {
    let UsuarioLogado = JSON.parse(sessionStorage.getItem("UsuarioLogado"))
    let postSalvo = JSON.parse(sessionStorage.getItem("novoPost"))

    document.getElementById("NomeUsuarioPerfil").textContent = UsuarioLogado.nomeUsuario
    document.getElementById("PaisUsuarioPerfil").textContent = UsuarioLogado.paisUsuario
    document.getElementById("PostsUsuarioPerfil").textContent = posts.length
    let usuariosPerfil = document.querySelectorAll(".UsuarioPerfil")

    usuariosPerfil.forEach(e => { e.textContent = '@' + UsuarioLogado.Usuario })

    let postPerfil = document.getElementById("PostPerfil")

    if (postSalvo) {
        let conteudo = `
            <div class="user-post">
                <img src="assets/imagens/user/Usuario qualquer" class="foto-user-feed-perfil">
                <h4>@${postSalvo.usuario}</h4>
            </div>
            <div>
                <img class="foto-post-perfil" src="assets/imagens/post/Cozinhando.jpg">
            </div>
            <div>
                <p><strong>@${postSalvo.usuario}</strong>: ${postSalvo.legenda}</p>
            </div>
        `
        postPerfil.innerHTML += conteudo
    }
}

window.addEventListener("load", () => {
    CarregarPerfil();
});