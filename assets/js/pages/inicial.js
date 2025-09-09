import { STORAGE_KEYS } from "../global/global.js"

const UsuarioLogado = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.UsuarioLogado))
const MostraAlerta = sessionStorage.getItem(STORAGE_KEYS.MostraBoasVindas)
const PostSucesso = sessionStorage.getItem(STORAGE_KEYS.PostSucesso)

const MensagemInicio = document.getElementById("MensagemInicio")

MensagemInicio.innerHTML = ""

UsuarioLogado && MostraAlerta === "true" ? AlertaBoasVindas() : false
UsuarioLogado && PostSucesso === "true" ? AlertaPostRealizado() : false

function AlertaBoasVindas(){
    MensagemInicio.innerHTML = `
        <div class="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>Olá ${UsuarioLogado.nomeUsuario}!</strong><br>Bem-vindo ao Nexo, o lugar para compartilhar momentos e se conectar com amigos.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `

    sessionStorage.setItem(STORAGE_KEYS.MostraBoasVindas, STORAGE_KEYS.false)
}

function AlertaPostRealizado(){
    MensagemInicio.innerHTML = `
        <div class="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>Post realizado com sucesso!</strong><br>Obrigado ${UsuarioLogado.nomeUsuario} por compartilhar esse momento conosco!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `

    sessionStorage.setItem(STORAGE_KEYS.PostSucesso, STORAGE_KEYS.false)
}

let PostSalvo = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.novoPost))
let postInicio = document.getElementById("PostInicio")

if (PostSalvo) {
    postInicio.innerHTML = `
        <div class="user-post">
            <img src="assets/imagens/user/Usuario qualquer" class="foto-user-inicio">
            <h4>@${PostSalvo.usuario}</h4>
        </div>
        <div>
            <img class="foto-post-inicio" src="assets/imagens/post/Cozinhando.jpg">
        </div>
        <div>
            <p><strong>@${PostSalvo.usuario}</strong>: ${PostSalvo.legenda}</p>
        </div>
    `
}