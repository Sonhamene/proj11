let nomes = []
let idades = []
let contador
let contador1

for (contador = 0; contador < 9; contador++) {
    let nome = (prompt("Qual o seu nome?"))
    nomes[contador] = nome
    let idade = Number(prompt("E a sua idade"))
    idades[contador] = idade
}

console.log("As pessoas menores idade são:")

for(contador1 = 0; contador1 < 9; contador1++) {
    if (idades[contador1] < 18) {
        console.log(` ${nomes[contador1]} tem ${idades[contador1]}`)
    }
}