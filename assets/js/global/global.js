export let Usuarios = [
    {nomeUsuario: "João Vitor", Usuario: "joaozinho23", senhaUsuario: "123", paisUsuario: "Brasil"},
    {nomeUsuario: "Fernanda Moura", Usuario: "fe_moura", senhaUsuario: "123", paisUsuario: "Brasil"},
    {nomeUsuario: "Henrique Betinelli", Usuario: "henrique_bet", senhaUsuario: "123", paisUsuario: "Brasil"}
]

export function LimparCampos(...inputs) {
    inputs.forEach(input => input.value = '')
    return
}

export let Posts = ["Estudando para prova...", "Passeio com o Thor."]

export function RedirecionarInicio(){
    location.href = 'inicial.html'
}

export const StorageKeys = {
    UsuarioLogado: 'UsuarioLogado',
    novoPost: 'novoPost',
    PostSucesso: 'PostSucesso',
    PostInicio: "PostInicio", 
    Usuarios: "Usuarios",
    MostraBoasVindas: "MostraBoasVindas",
    PostSucesso: "PostSucesso",
    true: "true",
    false: "false",
}