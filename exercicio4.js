let pokemons = [
    bulbasauro = "1",
    charmander = "2",
    squirtle = "3"

]
let escolhaPokemon = prompt("Digite o número da opção 1-Bulbasauro. 2-Charmander. 3-Squirtle")
tipoPokemon(pokemons[pergunta])

let tipoPokemon = (pokemon) => {
    switch (pokemon) {
        case "Bulbasauro":
          console.log("Pokemon Bulbasauro Tipo Planta e Veneno")
          break
        case "Charmander":
          console.log("Pokemon Charmander Tipo Fogo")
          break
          case "Squirtle":
          console.log("Pokemon Charmander Tipo Água")
          break
        default:
            console.log("Não encontramos esse pokemon")
    }

}
