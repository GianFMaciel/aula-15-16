let qualTurnoEstuda = prompt("Qual o turno do dia que você estuda? M para Matutino, V para Vespertino ou N para Noturno")
let resposta


    switch (qualTurnoEstuda) {
        case "M":
         resposta = "Bom Dia!"
         break;
        
        case "V":
         resposta = "Boa Tarde!"
         break;

        case "N":
         resposta = "Boa Noite!"
         break;

        default:

    }

console.log(resposta)



/*
Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
*/