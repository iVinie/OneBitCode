//Create object with informations of spaceship, users go to digit
let spaceshipInfo = {
    velocity: 0,
    speedUp : function (acceleration){
        this.velocity += acceleration
    }
}

//Adding the informations
function register () {
    spaceshipInfo.name = prompt("Enter the spaceship name:\n")
    spaceshipInfo.type = prompt("Enter with type of spaceship:\n")
    spaceshipInfo.maximumVelocity = Number(prompt("Enter with maximum velocity of spaceship:\n"))
}

//Create a variable for acceleration
let ChosenOption, acceleration, velocity

//Function for acceleration
function acelerate () {
    acceleration = Number(prompt("How much do you want to accelerate?\n"))
    spaceshipInfo.speedUp(acceleration)
    if(spaceshipInfo.velocity > spaceshipInfo.maximumVelocity){
        spaceshipInfo.velocity = spaceshipInfo.maximumVelocity
        alert("MAXIMUM SPEED REACHED!!!!")
    }
}

//Function for stop
function stop(){
    alert(  "Spaceship: " + spaceshipInfo.name + "\nType: " + spaceshipInfo.type + 
        "\nMaximum Velocity: " + spaceshipInfo.maximumVelocity + "km/s" + 
        "\nVelocity: " + spaceshipInfo.velocity + "km/s")
}

//Function of menu
function showMenu(){   
    do{
        ChosenOption = prompt("What do you want to do?\n1.Speed up\n2.Stop")
        switch(ChosenOption){
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Chosen option invalid!")
        } 
    }while(ChosenOption != 2)
}
register()
showMenu()
console.log(spaceshipInfo)