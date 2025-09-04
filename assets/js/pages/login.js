import { limparCampos, usuarios } from '../global/global.js'

function Cadastrar() {
    let n = document.getElementById('Nome_Cadrastro')
    let nome = n.value

    let u = document.getElementById('Usuario_Cadrastro')
    let usuario = u.value 

    let s = document.getElementById('Senha_Cadrastro')
    let senha = s.value 

    let p = document.getElementById('Pais_Cadrastro')
    let pais = p.value

    document.getElementById('AlertaPreencherCadastro').classList.add("d-none")
    document.getElementById('AlertaUsuario').classList.add("d-none")

    if(n.value.trim() == '' || u.value.trim() == '' || s.value.trim() == '' || p.value.trim() == '') {
        document.getElementById('AlertaPreencherCadastro').classList.remove("d-none")
        return
    }

    let user = usuarios.find(u => u.Usuario === usuario)
    
    if(user){
        document.getElementById('AlertaUsuario').classList.remove("d-none")
        limparCampos(u)
        return
    }
    
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

    document.getElementById('AlertaPreencherEntrar').classList.add("d-none")
    document.getElementById('AlertaUsuarioInvalido').classList.add("d-none")
    document.getElementById('AlertaSenhainvalida').classList.add("d-none")

    if(u.value.trim() == '' || s.value.trim() == '') {
        document.getElementById('AlertaPreencherEntrar').classList.remove("d-none")
        return
    }

    let UsuarioLogado = usuarios.find(u => u.Usuario === usuario)

    if(!UsuarioLogado){
        document.getElementById('AlertaUsuarioInvalido').classList.remove("d-none")
        limparCampos(u, s)
        return
    }

    sessionStorage.setItem("UsuarioLogado", JSON.stringify(UsuarioLogado))

    if(senha === UsuarioLogado.senhaUsuario){
        sessionStorage.setItem("MostraBoasVindas", "true")
        sessionStorage.removeItem("novoPost")
        location.href = 'inicial.html'

    } else {
        document.getElementById('AlertaSenhainvalida').classList.remove("d-none")
        limparCampos(s);
    }
}

document.getElementById("btnCadastrar").addEventListener("click", Cadastrar);
document.getElementById("btnEntrar").addEventListener("click", Entrar);