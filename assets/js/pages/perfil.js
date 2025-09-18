import { Posts, StorageKeys } from "../global/global.js";

const UsuarioLogado = JSON.parse(
  sessionStorage.getItem(StorageKeys.UsuarioLogado)
);
let PostSalvo = JSON.parse(sessionStorage.getItem(StorageKeys.novoPost));

document.getElementById("NomeUsuarioPerfil").textContent =
  UsuarioLogado.nomeUsuario;
document.getElementById("PaisUsuarioPerfil").textContent =
  UsuarioLogado.paisUsuario;
document.getElementById("PostsUsuarioPerfil").textContent = Posts.length;
let UsuariosPerfil = document.querySelectorAll(".UsuarioPerfil");

UsuariosPerfil.forEach((e) => {
  e.textContent = "@" + UsuarioLogado.Usuario;
});

let postPerfil = document.getElementById("PostPerfil");

if (PostSalvo) {
  postPerfil.innerHTML = `
        <div class="user-post">
            <img src="assets/imagens/user/Usuario qualquer" class="foto-user-feed-perfil">
            <h4>@${PostSalvo.usuario}</h4>
        </div>
        <div>
            <img class="foto-post-perfil" src="assets/imagens/post/Cozinhando.jpg">
        </div>
        <div>
            <p><strong>@${PostSalvo.usuario}</strong>: ${PostSalvo.legenda}</p>
        </div>
    `;
}
