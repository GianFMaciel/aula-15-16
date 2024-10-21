let escolaridade = prompt("Você concluiu o ensino médio para SIM digite 1 e para NÃO digite 2")
let idade = prompt("Quantos anos você tem?")
let faculdade = prompt("Você já esta cursando alguma faculdade? Digite para Sim 1 e para Não 2")


let informacao = (grauEscolar, suaIdade, naoCursando ) => {
    if (grauEscolar === Number(1) 
        && suaIdade >= Number(18) 
        && naoCursando === Number(2)) {
        return "Pode se matricular"
    } else {
        return "Não pode se matricular"
    }

}

let resposta = informacao(Number(escolaridade), Number(idade), Number(faculdade))



console.log(resposta)
