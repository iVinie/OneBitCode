let spaceship = {
    name: "Fênix",
    crewQuantity: 7,
    type: "Batalha",
}
console.log(spaceship)
console.log(spaceship.type)//Chamar alguma propriedade específica
console.log(spaceship["name"])//Outra maneira

//Adicionando mais coisas ao objeto
spaceship.isHitched = false
spaceship["shildLevel"] = 100
console.log(spaceship)

//Também podemos criar objetos vazios, so abrindo e fechando chaves
//Outra maneira de criar:
let spaceshipInfo = new Object()

//Erros que podemos cometer
let spacialStation = { //As variaveis dentro do objetos são chamadas de propriedades 
    name: "fox",
    platformsQuantity: 10,
    "new name":"Estelar",
    true: false,
    2: "Descoberta"
}
//Se por acaso quisermos acessar o "2" para retornar Descoberta
//console.log(spacialStation.2) dessa maneira não funciona, pois o programa entende o 2 como um número, o mesmo vale para
//nomes com espaço "new name", teremos que chamar da mesma maneira abaixo
//Jeito correto:
console.log(spacialStation["2"])
//Logo, vamos evitar criar com espaço, numero... 

