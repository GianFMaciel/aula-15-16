let generoFilme = prompt("Qual o genero do filme que iremos assistir?")
let valorIngresso = Number(prompt("Qual o preço desse ingresso?"))

let vamosNoCinema = (genero, valor) => {
    if (genero === "fantasia" && valor < 15) {
        console.log("Bom Filme")

    } else {
        console.log("Escolha outro filme")
    }
}

vamosNoCinema(generoFilme)
vamosNoCinema(valorIngresso)

/*
Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você 
se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou 
amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/