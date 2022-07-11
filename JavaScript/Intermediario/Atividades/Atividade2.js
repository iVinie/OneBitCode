class Spaceship {
    static get desacelerationRate (){
        return 0.17
    }
    constructor(name, quantityCrew, spaceshipType){
        this.name = name
        this.quantityCrew = quantityCrew
        this.spaceshipType = spaceshipType
        this.currentVelocity = 0
    }
    speedUp(acceleration){
        this.currentVelocity += acceleration * (1 - Spaceship.desacelerationRate)
    }
}


let spaceship

function speed(){
    let acceleration = Number(prompt ('Digite quanto deseja acelerar:\n'))
    Spaceship.speedUp(acceleration)
    
}

function createSpaceship (){

    let name = prompt("Digite o nome da nave:\n")
    let quantityCrew = prompt ('Digite a quantidade de tripulantes:\n')
    let type = "0"
    while (type != "1" && type != "2" ){
        type = prompt ("Qual o tipo da nave?\n" + 
        "1.Batalha\n"+ 
        "2.Transporte")
        switch(type){
            case "1":
                let quantityWeapons = prompt ('Digite a quantidade de armas:\n')
                spaceshipType = "Batalha"
                break
            case "2":
                let quantityAccents =  prompt ('Digite a quantidade máxima de acentos:\n')
                spaceshipType = "Transporte"
                break
            default:
                alert ("Opação invalida, tente novamente")
        }
    }
    spaceship = new Spaceship (name, quantityCrew, spaceshipType)
    
}

function printer (){
    alert (   "Nome: " + spaceship.name + "\n" +
                    "Quantidade de tripulantes: " + spaceship.quantityCrew + "\n" +
                    "Velocidade atual: " + spaceship.currentVelocity)
}


function showMenu (){
    let chosenOption = prompt(  "Digite o que deseja fazer:\n" + 
    "1.Acelerar a nave\n" + 
    "2.Trocar de nave\n" +
    "3.Imprimir dados e sair")
    while(chosenOption != "3"){
        switch(chosenOption){
            case "1":
                speed()
                break
            case "2":
                createSpaceship ()
                break
            case "3":
                printer()
                break
            default:
                alert("Opção invalida, tente novamente!")
        }
    }
}

createSpaceship()
showMenu()

alert(spaceship)