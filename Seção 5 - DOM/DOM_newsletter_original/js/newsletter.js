const txtEmail = document.getElementById('txtEmail')
const mensagemTela = document.getElementById('newsletterFeedback')

function cadastrarEmail() {
  let email = txtEmail.value
  console.log(email)
  mensagemTela.innerHTML = `E-mail ${email} foi cadastrado com sucesso !`
}
