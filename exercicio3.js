let comparando = (n1, n2) => {
    if (n1 > n2) {
        return " Primeiro número é maior que o Segundo"
    }
    else if (n1 < n2) {
        return "Primeiro número é menor que o Segundo"
    }
    else {
        return "Primeiro número é igual ao Segundo"
    }

}

let n1 = prompt("Digite o Primeiro número")
let n2 = prompt("Digite o Segundo número")
const resultado = comparando(n1, n2)
console.log(resultado)

