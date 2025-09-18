import { RedirecionarInicio, StorageKeys } from "../global/global.js";

const FotoInput = document.getElementById("fotoPost");
const LegendaInput = document.getElementById("legendaPost");

function GetLegenda() {
  return LegendaInput.value;
}

function GetFoto() {
  return FotoInput.value.trim;
}

function TemCamposValidos() {
  GetFoto() !== "" && GetLegenda() !== "";
}

function MostrarAlerta() {
  document.getElementById("AlertaPreencherPost").classList.remove("d-none");
}

function GetUsuarioLogado() {
  const usuarioJSON = sessionStorage.getItem(StorageKeys.UsuarioLogado);
  return usuarioJSON ? JSON.parse(usuarioJSON) : null;
}

function SalvarPost(novoPost) {
  sessionStorage.setItem(StorageKeys.novoPost, JSON.stringify(novoPost));
  sessionStorage.setItem(StorageKeys.PostSucesso, StorageKeys.true);
}

function PostarFoto() {
  if (TemCamposValidos()) {
    MostrarAlerta();
    return;
  }

  const usuarioLogado = GetUsuarioLogado();
  const novoPost = {
    usuario: usuarioLogado.Usuario,
    legenda: GetLegenda(),
  };

  SalvarPost(novoPost);
  RedirecionarInicio();
}

document.getElementById("btnPostarFoto").addEventListener("click", PostarFoto);
