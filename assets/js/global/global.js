export let usuarios = [
    {nomeUsuario: "João Vitor", Usuario: "joaozinho23", senhaUsuario: "123", paisUsuario: "Brasil"},
    {nomeUsuario: "Fernanda Moura", Usuario: "fe_moura", senhaUsuario: "123", paisUsuario: "Brasil"},
    {nomeUsuario: "Henrique Betinelli", Usuario: "henrique_bet", senhaUsuario: "123", paisUsuario: "Brasil"}
]

export function limparCampos(...inputs) {
    inputs.forEach(input => input.value = '')
    return
}

export let posts = ["Estudando para prova...", "Passeio com o Thor."]