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
console.log('-----------------------')

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
// const numerosUnicos = [1,3,4,5,8,9] -> resolução
let numerosUnicos = numeros.reduce(function (numeros, numeroAtual) {
  if (!numeros.includes(numeroAtual)) {
    numeros.push(numeroAtual)
  }

  return numeros
}, [])

console.log(numerosUnicos)
