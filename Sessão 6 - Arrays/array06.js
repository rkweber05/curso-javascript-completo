let arr = [1, 2, 3]
console.log(arr.reverse())

let j = 0
let soma = arr.reduce(function (acumulador, atual, i, _arr) {
  console.log('i: ' + i)
  console.log('j: ' + j++)
  console.log('acumulador: ' + acumulador, ' --- atual: ' + atual)

  return acumulador + atual
}, 0) // pode passar uma string tambem, ai vai ser gerado um array de string e nao de soma
console.log(soma)
console.log(arr)

const nomes = ['Daniel', 'Maria', 'João', 'Joana']
let nomesPorOrdem = nomes.reduce(function (nomes, nomeAtual) {
  let primeiraLetra = nomeAtual[0]
  if (nomes[primeiraLetra]) {
    nomes[primeiraLetra]++
  } else {
    nomes[primeiraLetra] = 1
  }

  return nomes
}, {})

console.log(nomesPorOrdem)
