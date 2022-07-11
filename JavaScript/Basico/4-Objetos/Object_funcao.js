/*Agora vamos adicionar funções ao objeto, as propriedades que contém funções, chamamos de método e as que não tem
chamamos de atributos */

let spaceshipInfo = {
    name: "RapidFire",
    type: "Batalha",
    maxCrew: 40,
    turnOn: function(){
        console.log("Preparando propulsão")
        console.log("Ligando o computador de bordo")
        console.log(this.name)
    }
}
spaceshipInfo.turnOn()
spaceshipInfo.velocity = 0
/*
spaceshipInfo.speedUp = function(spaceshipToSpeedUp, acceleration){
    spaceshipToSpeedUp.velocity += acceleration
}

console.log(spaceshipInfo)
spaceshipInfo.speedUp(spaceshipInfo, 10)
console.log(spaceshipInfo)
*/

/*
Porém esse método é ruim, pois está chamando uma função que está dentro do objeto e usando o objeto como proprio 
parâmetro, o melhor método segue abaixo:
*/
spaceshipInfo.speedUp = function (acceleration){
    this.velocity += acceleration
    /*
    O this. vai reverênciar ao proprio objeto, nesse caso n temos a necessidade de usar
    o objeto como parâmetro, porém o this. so funciona, pois eu chamei o objeto no começo, para adicionar a função
    Outra aplicação do this. la em cima
    */
}
console.log(spaceshipInfo)
spaceshipInfo.speedUp(10)
console.log(spaceshipInfo)