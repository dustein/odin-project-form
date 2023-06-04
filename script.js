const senha = document.querySelector("#senha")
const resenha = document.querySelector("#resenha")

function verifica() {
  if(senha.value == resenha.value) {
    window.alert("Senha correta. LOGADO! Parabéns")
  } else {
    window.alert("Verifique a senha repetida.")
  }
}