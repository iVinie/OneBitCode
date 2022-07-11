class Spaceship {
    static get desacelerationRate (){
        return 0.15
    }
    constructor(name){
        this.name =  name
        this.currentVelocity = 0
    }
    speedUp(acceleration){
        this.currentVelocity += acceleration * (1 - Spaceship.desacelerationRate)
    }
}

let spaceship =  new Spaceship ("RapidFire")
spaceship.speedUp(100)

console.log(spaceship)