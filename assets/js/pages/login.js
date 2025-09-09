import { limparCampos, Usuarios, RedirecionarInicio, STORAGE_KEYS } from '../global/global.js'

let NomeLogin = document.getElementById('Nome_Cadrastro')
let UsuarioLogin = document.getElementById('Usuario_Cadrastro')
let SenhaLogin = document.getElementById('Senha_Cadrastro')
let PaisLogin = document.getElementById('Pais_Cadrastro')

function GetNomeLogin() {
  return NomeLogin.value
}
function GetUsuarioLogin() {
  return UsuarioLogin.value
}
function GetSenhaLogin() {
  return SenhaLogin.value
}
function GetPaisLogin() {
  return PaisLogin.value
}

function TemCamposValidosCadastrar() {
  return GetNomeLogin().trim() !== "" && GetUsuarioLogin().trim() !== "" && GetSenhaLogin().trim() !== "" && GetPaisLogin().trim() !== "" 
} 

function ExisteEsteUsuario(VerificarUsuario){
  let UsuarioEncontrado = Usuarios.find(u => u.Usuario === VerificarUsuario)
  return UsuarioEncontrado
}

function SalvarDadosLogin(){
  const UsuarioLogado = {nomeUsuario: GetNomeLogin(), Usuario: GetUsuarioLogin(), senhaUsuario: GetSenhaLogin(), paisUsuario: GetPaisLogin()}
  Usuarios.push(UsuarioLogado)
  sessionStorage.setItem(STORAGE_KEYS.Usuarios, JSON.stringify(Usuarios))
  sessionStorage.setItem(STORAGE_KEYS.UsuarioLogado, JSON.stringify(UsuarioLogado));
  sessionStorage.setItem(STORAGE_KEYS.MostraBoasVindas, STORAGE_KEYS.true)
}

function Cadastrar() {
  document.getElementById('AlertaPreencherCadastro').classList.add("d-none")
  document.getElementById('AlertaUsuario').classList.add("d-none")

  if(!TemCamposValidosCadastrar()){
    document.getElementById('AlertaPreencherCadastro').classList.remove("d-none")
    return
  }
    
  if(ExisteEsteUsuario(GetUsuarioLogin())){
    document.getElementById('AlertaUsuario').classList.remove("d-none")
    limparCampos(UsuarioLogin)
    return
  }

  SalvarDadosLogin()
  limparCampos(NomeLogin, UsuarioLogin, SenhaLogin, PaisLogin )

  sessionStorage.removeItem(STORAGE_KEYS.novoPost)

  RedirecionarInicio()
}

let UsuarioEntrar = document.getElementById('Usuario_Entrada')
let SenhaEntrar = document.getElementById('Senha_Entrada')

function GetUsuarioEntrar() {
  return UsuarioEntrar.value
}

function GetSenhaEntrar() {
  return SenhaEntrar.value
}

function TemCamposValidosEntrar() {
  return GetUsuarioEntrar().trim() !== "" && GetSenhaEntrar().trim() !== "" 
} 

function VerificarSenhaUsuarioEntrar(){
  let GetUsuario = Usuarios.find(u => u.Usuario === GetUsuarioEntrar())
  sessionStorage.setItem(STORAGE_KEYS.UsuarioLogado, JSON.stringify(GetUsuario))
  return GetSenhaEntrar() === GetUsuario.senhaUsuario
}


function Entrar() {
  document.getElementById('AlertaPreencherEntrar').classList.add("d-none")
  document.getElementById('AlertaUsuarioInvalido').classList.add("d-none")
  document.getElementById('AlertaSenhainvalida').classList.add("d-none")

  if(!TemCamposValidosEntrar()){
    document.getElementById('AlertaPreencherEntrar').classList.remove("d-none")
    return
  }

  if(!ExisteEsteUsuario(GetUsuarioEntrar())){
    document.getElementById('AlertaUsuarioInvalido').classList.remove("d-none")
    limparCampos(UsuarioEntrar, SenhaEntrar)
    return
  }

  if(VerificarSenhaUsuarioEntrar()){
    sessionStorage.setItem(STORAGE_KEYS.MostraBoasVindas, STORAGE_KEYS.true)
    sessionStorage.removeItem(STORAGE_KEYS.novoPost)
    limparCampos(UsuarioEntrar, SenhaEntrar)
    RedirecionarInicio()

  } else {
    document.getElementById('AlertaSenhainvalida').classList.remove("d-none")
    limparCampos(SenhaEntrar)
  }
}

document.getElementById("btnCadastrar").addEventListener("click", Cadastrar);
document.getElementById("btnEntrar").addEventListener("click", Entrar);