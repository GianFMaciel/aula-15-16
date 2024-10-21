const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}


/* 
a) Explique o que o código faz. Qual o teste que ele realiza?            Verifica a paridade do número digitado pelo usuário, se é PAR ou IMPAR.

b) Para que tipos de números ele imprime no console "Passou no teste"?     Número par exemplo 0, 2, 4, 6, 8...

c) Para que tipos de números a mensagem é "Não passou no teste"?           Número impar exemplo 1, 3, 5, 7, 9...
*/