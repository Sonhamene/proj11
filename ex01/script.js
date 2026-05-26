let nomes = []
let contador
let i

for (contador = 0; contador < 7; contador++) {
    let nome = prompt("Escreva 7 nomes")
    nomes[contador] = nome
}


for (i = nomes.length -1;i >= 0; i-- ) {
    console.log(nomes[i]);
}