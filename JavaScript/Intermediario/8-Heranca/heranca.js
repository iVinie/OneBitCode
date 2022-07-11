/*
É um recurso do paradigma Orientado a Objetos
Permite que classes herdem características de outras classes
    Ou seja, declaramos uma classe que vai herdar métodos e atributos de outra classe
É uma técnica de reuso de código
As duas classes devem ter uma relação de "é uma", isto é, Todo capitão É UMA pessoa
    Poderia ter uma classe Captain herdando de Person
*/
class Spaceship { //Se n colocamos extend, por padrão ela herda de object
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }
    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity){
            console.log("MAXIMUM VELOCITY OUTSTANGING!!!")
        }
    }
}

class BattleSpaceship extends Spaceship{//A classe está herdando de Spaceship, no caso ela ja tem o constructor e o método
    stop(){
        this.currentVelocity = 0
        console.log("Recolhendo armas e parando a nave de batalha")
    }
}

class DiscoverySpaceship extends Spaceship{//A classe está herdando de Spaceship, no caso ela ja tem o constructor e o método
    stop(){
        this.currentVelocity = 0
        console.log("Recolhendo equipamentos de amostra e parando nave de descoberta")
    }
}

let darwin = new DiscoverySpaceship ("Darwin", 25, 200)//Parâmetros do construtor herdado
let rapidfire = new BattleSpaceship ("RapidFire", 150, 500)

console.log(darwin)
console.log(rapidfire)

/*Primeiro o programa verifica se existe esse método na classe base, no caso a DiscoverySpaceship ou BattleSpaceship
se n encontrar, ele vai para a classe Spaceship (super classe ou classe mãe)*/
darwin.speedUp(210) 
rapidfire.speedUp(210)

console.log(darwin)
console.log(rapidfire)

darwin.stop()
rapidfire.stop()

console.log(darwin)
console.log(rapidfire)

class TransportSpaceship extends Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight){
        super(name, maxCrew, maxRecommendedVelocity)//Está chamando o construtor que foi declarado na Super classe/Classe mãe
        this.maxLoadWeight = maxLoadWeight
    }
//    speedUp(){
//        this.currentVelocity += 1
//        console.log("Nave de carga so acelera 1km/s")
//    }
    speedUp(acceleration){
        acceleration /= 2
        console.log("Incrementando velocidade em: " + acceleration + "km/s")
        super.speedUp(acceleration)//No caso o JS entra nesse speedUp e depois é chamado o da classe mãe
    }
}


let transport = new TransportSpaceship ("Transport", 2, 100, 1000)
transport.speedUp(210)//O speedUp() que será utilizado, será a da classe filha e não da mãe, mesmo se tiver parâmetro
//Pois o JS n tem parâmetro obrigatorio, mas se tiver "super" ai chama da super classe
console.log(transport)