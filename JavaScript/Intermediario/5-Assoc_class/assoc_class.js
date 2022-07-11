class Captain{
    constructor(name, age, flightHours){
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class Spaceship{
    constructor(name, crewQuantity, capitainName, capitainAge, capitainFlightHours){
        this.name = name
        this.crewQuantity = crewQuantity
        this.captain = new Captain(capitainName, capitainAge, capitainFlightHours)
    }
}

let spaceship = new Spaceship("RapidFire", 13, "Vinie", 24, 15000)
console.log(spaceship)