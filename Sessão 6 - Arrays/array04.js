let arr = [1, 3, 5, 7, 9]

let teste = arr.push(11, 13, true, 'ola mundo')
console.log(teste)
console.log(arr)

let ultimoItem = arr.pop()
console.log(ultimoItem)
console.log(arr)

let primeiroItem = arr.shift()
console.log(primeiroItem)
console.log(arr)

teste = arr.unshift(4, 5, 6)
console.log(teste)
console.log(arr)

let arr2 = arr.slice(5)
console.log(arr2)
console.log(arr)

let arr3 = arr.splice(2, 4, 'ola mundo', 10)
console.log(arr3)
console.log(arr)
