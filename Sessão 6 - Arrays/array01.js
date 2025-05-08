const arr = [1, 5, 10, 'ola', true]

let soNumeros = arr.every(function (el) {
  return typeof el === 'number'
})

let soNumeros2 = arr.some(function (el) {
  return typeof el === 'number'
})

const arr1 = arr.filter(function (el, i, _arr) {
  return typeof el === 'number'
})

const arr2 = arr.forEach(function (el, i, _arr) {
  console.log(i + ':' + el)
})

const arr3 = arr1.map(function (el, i, _arr) {
  return el * el
})

console.log(arr)
console.log(soNumeros)
console.log(soNumeros2)
console.log(arr1)
console.log(arr2)
console.log(arr3)
