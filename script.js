let usuarios = [
    {nomeUsuario: "João Vitor", Usuario: "joaozinho23", senhaUsuario: "123", paisUsuario: "Brasil"},
    {nomeUsuario: "Fernanda Moura", Usuario: "fe_moura", senhaUsuario: "123", paisUsuario: "Brasil"},
    {nomeUsuario: "Henrique Betinelli", Usuario: "henrique_bet", senhaUsuario: "123", paisUsuario: "Brasil"}
]

function Cadastrar() {
    let n = document.getElementById('Nome_Cadrastro')
    let nome = n.value

    let u = document.getElementById('Usuario_Cadrastro')
    let usuario = u.value 

    let s = document.getElementById('Senha_Cadrastro')
    let senha = s.value 

    let p = document.getElementById('Pais_Cadrastro')
    let pais = p.value

    if(n.value.trim() == '' || u.value.trim() == '' || s.value.trim() == '' || p.value.trim() == '') {
        document.getElementById('AlertaPreencherCadastro').classList.remove("d-none")
        return
    }

    document.getElementById('AlertaPreencherCadastro').classList.add("d-none")
    let user = usuarios.find(u => u.Usuario === usuario)
    
    if(user){
        document.getElementById('AlertaUsuario').classList.remove("d-none")
        limparCampos(u)
        return
    }

    document.getElementById('AlertaUsuario').classList.add("d-none")
    
    usuarios.push({nomeUsuario: nome, Usuario: usuario, senhaUsuario: senha, paisUsuario: pais})

    sessionStorage.setItem("usuarios", JSON.stringify(usuarios))
    sessionStorage.setItem("UsuarioLogado", JSON.stringify({nomeUsuario: nome, Usuario: usuario, senhaUsuario: senha, paisUsuario: pais}));
    sessionStorage.setItem("MostraBoasVindas", "true")
    
    limparCampos(u, n, s, p)
    sessionStorage.removeItem("novoPost")

    location.href = 'inicial.html'
}

function Entrar() {
    let u = document.getElementById('Usuario_Entrada')
    let usuario = u.value 

    let s = document.getElementById('Senha_Entrada')
    let senha = s.value 

    if(u.value.trim() == '' || s.value.trim() == '') {
        document.getElementById('AlertaPreencherEntrar').classList.remove("d-none")
        return
    }

    document.getElementById('AlertaPreencherEntrar').classList.add("d-none")
    let UsuarioLogado = usuarios.find(u => u.Usuario === usuario)

    if(!UsuarioLogado){
        document.getElementById('AlertaUsuarioInvalido').classList.remove("d-none")
        limparCampos(u, s)
        return
    }

    document.getElementById('AlertaUsuarioInvalido').classList.add("d-none")
    sessionStorage.setItem("UsuarioLogado", JSON.stringify(UsuarioLogado));

    if(senha === UsuarioLogado.senhaUsuario){
        sessionStorage.setItem("MostraBoasVindas", "true")
        sessionStorage.removeItem("novoPost")
        location.href = 'inicial.html'

    } else {
        document.getElementById('AlertaSenhainvalida').classList.remove("d-none")
        limparCampos(s);
    }
}

function limparCampos(...inputs) {
    inputs.forEach(input => input.value = '')
}

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

let posts = ["Estudando para prova...", "Passeio com o Thor."]

function PostarFoto() {
    let f = document.getElementById("fotoPost")
    let l = document.getElementById("legendaPost")
    let legenda = l.value

    if(f.value.trim() == '' || l.value.trim() == ''){
        document.getElementById('AlertaPreencherPost').classList.remove("d-none")
        return
    }

    let UsuarioLogado = JSON.parse(sessionStorage.getItem("UsuarioLogado"))
    let novoPost = {usuario: UsuarioLogado.Usuario, legenda: legenda}

    posts.push(legenda)
    sessionStorage.setItem("posts", JSON.stringify(posts))

    sessionStorage.setItem("novoPost", JSON.stringify(novoPost))
    sessionStorage.setItem("PostSucesso", "true")

    location.href = 'inicial.html'
}

function MostrarPost() {
    let postSalvo = JSON.parse(sessionStorage.getItem("novoPost"))

    if (postSalvo) {
        let conteudo = `
            <div class="user-post">
                <img src="imagens/user/Usuario qualquer" class="foto-user-inicio">
                <h4>@${postSalvo.usuario}</h4>
            </div>
            <div>
                <img class="foto-post-inicio" src="imagens/post/Cozinhando.jpg">
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

function CarregarPerfil() {
    let UsuarioLogado = JSON.parse(sessionStorage.getItem("UsuarioLogado"))
    JSON.parse(sessionStorage.getItem("posts"))
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
                <img src="imagens/user/Usuario qualquer" class="foto-user-feed-perfil">
                <h4>@${postSalvo.usuario}</h4>
            </div>
            <div>
                <img class="foto-post-perfil" src="imagens/post/Cozinhando.jpg">
            </div>
            <div>
                <p><strong>@${postSalvo.usuario}</strong>: ${postSalvo.legenda}</p>
            </div>
        `
        postPerfil.innerHTML += conteudo
    }
}