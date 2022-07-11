class SpacialStation{
    constructor(name, crewnQuantity){
        this.spaceshipN = name
        this.crewnQuantity = crewnQuantity
        this.isHitched = false
        this.isOpenDoors = false
    }
    hitched(){
        this.isHitched = true
        this.isOpenDoors = true
    }
}

let spaceshipList = []

function createSpaceship (){
    let spaceshipName = prompt("Digite o nome da nave: ")
    let crewnQuantity = prompt("Digite a quantidade de tripulantes: ")
    let spaceship = new SpacialStation(spaceshipName, crewnQuantity)
    return spaceship
}

function printSpaceshipList(spaceshipList) {
    let spaceshipPrint = ""
    spaceshipList.forEach((spaceship, index) => {
        spaceshipPrint += (index + 1) + ". " + spaceship.spaceshipN + " (" + spaceship.crewnQuantity + " Tripulantes)" + "\n"
    })
    alert(spaceshipPrint)
}


function showMenu(){
    let chosenOption = prompt(  "Digite o que deseja fazer:\n" + 
    "1.Realizar o engate\n" + 
    "2.Imprimir naves\n" +
    "3.Sair do programa")
    while (chosenOption != "3"){
        switch(chosenOption){
            case "1":
                let spaceship = createSpaceship ()
                spaceship.hitched()
                spaceshipList.push(spaceship)
                break
            case "2":
                printSpaceshipList(spaceshipList)
                break
            case "3":
                alert("Obrigado por escolher a nossa estação, boa estadia, até logo!!!")
                break
            default:
                alert("Opção invalida, tente novamente!")
        }
        chosenOption = prompt(  "Digite o que deseja fazer:\n" + 
                                    "1.Realizar o engate\n" + 
                                    "2.Imprimir naves\n" +
                                    "3.Sair do programa")
    }
}

showMenu()
console.log(SpacialStation)
