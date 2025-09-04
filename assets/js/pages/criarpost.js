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

    sessionStorage.setItem("novoPost", JSON.stringify(novoPost))
    sessionStorage.setItem("PostSucesso", "true")

    location.href = 'inicial.html'
}

document.getElementById("btnPostarFoto").addEventListener("click", PostarFoto);