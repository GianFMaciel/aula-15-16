let numero1 = prompt("Digite um número")
let numero2 = prompt("Digite outro número")

let recebeNum = (num1, num2) => {
    if (num1 === num2) {
        return "São iguais"

    }
    else  {
        return "Não são iguais"
    }
}

const resposta = recebeNum(numero1, numero2)

console.log(resposta)