import { RedirecionarInicio, STORAGE_KEYS} from '../global/global.js'

const FotoInput = document.getElementById("fotoPost")
const LegendaInput = document.getElementById("legendaPost")

function getLegenda() {
  return (LegendaInput.value);
}

function getFoto() {
  return (FotoInput.value.trim);
}

function temCamposValidos() {
  getFoto() !== "" && getLegenda() !== "";
}

function mostrarAlerta() {
  document.getElementById("AlertaPreencherPost").classList.remove("d-none");
}

function getUsuarioLogado() {
  const usuarioJSON = sessionStorage.getItem(STORAGE_KEYS.UsuarioLogado);
  return usuarioJSON ? JSON.parse(usuarioJSON) : null;
}

function salvarPost(novoPost) {
  sessionStorage.setItem(STORAGE_KEYS.novoPost, JSON.stringify(novoPost));
  sessionStorage.setItem(STORAGE_KEYS.PostSucesso, STORAGE_KEYS.true);
}

function PostarFoto() {
  if (temCamposValidos()) {
    mostrarAlerta();
    return;
  }

  const usuarioLogado = getUsuarioLogado();
  const novoPost = {
    usuario: usuarioLogado.Usuario,
    legenda: getLegenda(),
  };

  salvarPost(novoPost);
  RedirecionarInicio();
}

document.getElementById("btnPostarFoto").addEventListener("click", PostarFoto);