;(function () {
  const nomeUsuario = null
  const elemento = document.querySelector('.top-bar p')
  if (nomeUsuario) {
    elemento.innerHTML += '<b>' + nomeUsuario + '</b>'
  } else {
    // elemento.parentElement.style.display = 'none' // volta para o elemento (pai) e esconde o elemento inteiro
    elemento.remove()
  }
})()
