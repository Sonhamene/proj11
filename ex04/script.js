let numero1 = []
let numero2 = []
let resultado = []
let contador
let contador1
let contador2

for (contador = 0; contador < 5; contador++) {
    numero1[contador] = Number(prompt("Digite um número para o vetor 1"))
    numero2[contador] = Number(prompt("Digite um número para o vetor 2"))
}

for (contador = 0; contador < 5; contador++) {
    for (contador1 = 0; contador1 < 5; contador1++) {
        if (numero1[contador] == numero2[contador1]) {
            let repetido = false
            for (contador2 = 0; contador2 < resultado.length; contador2++) {
                if (resultado[contador2] == numero1[contador]) {
                    repetido = true
                }
            }
            if (repetido == false) {
                resultado[resultado.length] = numero1[contador]
            }
        }
    }
}
console.log("Interseção:")

for (contador = 0; contador < resultado.length; contador++) {
    console.log(resultado[contador])
}