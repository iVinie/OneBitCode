//método nada mais é que funções dentro de classes
class Spaceship{
    constructor(name){
        this.name = name
        this.velocity = 0 //Não tem parâmetro, pelo fato que queremos todas as naves começando com velocidade zero
    }

    speedUp(acceleration){//Esse método não aparece no print, pois não definimos ele como propriedade da class
        this.velocity += acceleration
    }
}

let rapidFire = new Spaceship("RapidFire")
console.log(rapidFire)

rapidFire.speedUp(10)
rapidFire.speedUp(15)
console.log(rapidFire)