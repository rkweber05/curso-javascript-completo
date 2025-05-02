function calcularMedia() {
    console.log(arguments)
    
    let media = 0
    for (let i = 0; i < arguments.length; i++) {
        media += arguments[i]
    }

    if (typeof arguments[0] != "number") {
        throw new Error("Não pode ser uma String, digite um número")
    }

    return media / arguments.length
}

console.log(calcularMedia(2, 4))
