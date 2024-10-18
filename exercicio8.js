const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


/* 
a) O que a primeira linha está fazendo?        Está pedindo ao usuário que digite um número e está armazenando em uma variavel como número não string


b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    A mensagem para o número 10 é Esse número passou no teste

    A mensagem para o número -10 não será exibida pois dará erro no código


c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.   

   Tem um erro pois o segundo console.log chama uma variavel local e ele está fora do escopo local


*/