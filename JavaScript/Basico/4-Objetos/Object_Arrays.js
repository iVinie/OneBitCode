let spaceship = {
    name: "RapidFire",
    type: "Batalha",
    crew: ["Gen. Silva", "Ana Júlia", "Thiago"],
    capitain: {//Também podemos colocar objetos, dentro de objetos...
        name: "Hugo Trent",
        age: 50,
    }
}
console.log(spaceship.capitain.name)//Vai imprimir o nome do capitão

spaceship.crew.push("Ten. Fernanda")//Vai adicionar ao array, no caso, tem as mesmas propriedades
console.log(spaceship)

//LISTA DE OBJETOS:
let spaceshipList = [
    {name: "Elemental", crewQuantity: 10},
    {name: "Colossus", crewQuantity: 8},
    {name: "RapidFire", crewQuantity: 20},
]

//Para acessar o nome da terceira nave
console.log(spaceshipList[2].name)
//Quantidade de tripulante da segunda nave
console.log(spaceshipList[1].crewQuantity)


spaceshipList.forEach(spaceshipInfo => {
    console.log(spaceshipInfo.name + " tem: " + spaceshipInfo.crewQuantity + " Tripulantes")
})


