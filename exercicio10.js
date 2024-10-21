let qualTurnoEstuda = prompt("Qual o turno do dia que você estuda? M para Matutino, V para Vespertino ou N para Noturno")

let verificandoTurno = (turno) => {
    if (turno === "M") {
        console.log("Bom Dia!")
    }
    else if (turno === "V") {
        console.log("Boa Tarde!")
    }
    else{
        console.log("Boa Noite!")
    }

}

verificandoTurno(qualTurnoEstuda)




/* 

 Agora faça um programa que verifica que turno do dia um
 aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no 
 console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

 */