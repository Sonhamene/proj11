let numeros = []
let contador
let contador1
let media
let soma = 0

for (contador = 0; contador < 8; contador++) {
    let numero = Number(prompt("Escreva 8 números reais"))
    numeros[contador] = numero
    soma += numero
}

media = soma/8

console.log(`A média foi ${media}`)
console.log("Os valores acima da média")

for(contador1 = 0; contador1 < 8 ; contador1++) {
    if (numeros[contador1] > media) {
        console.log(numeros[contador1])
    }
}