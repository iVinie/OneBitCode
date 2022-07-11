//Classe para o usuario ir digitando as naves
class SpacialStation{
    constructor(name, crewnQuantity, hitchedSpaceship = false, openDoor = false){
        this.spaceshipName = name
        this. crewnQuantity = crewnQuantity
        this.hitched = hitchedSpaceship
        this.openDoor = openDoor
    }
}

function hitched(){
    let spaceship
    let name = prompt("Digite o nome da nave:\n")
    let crewnQuantity =  Number(prompt("Digite o número de tripulantes:\n"))
    let hitchedSpaceship = prompt(  "Realizar o engate agora?\n" + 
                                    "1 para Sim\n"+
                                    "Digite qualquer coisa para NÃO")
    if (hitchedSpaceship == "1"){
        spaceship = new SpacialStation(name, crewnQuantity, true, true)
        alert("Bem vindo!, a nave: "+ name + " está com as portas aberta")
        spaceshipList.push(["Nave: " + name, "Quantidade de tripulante: " + crewnQuantity, "Acoplada: "+true,"Portas abertas: "+ true])
    }else{
        spaceship = new SpacialStation(name, crewnQuantity, false, false)
        spaceshipList.push(["Nave: " + name, "Quantidade de tripulante: " + crewnQuantity, "Acoplada: "+false,"Portas abertas: "+ false])
        alert("Bem vindo!, a nave: " + name + " está aguardando comando para o engate, volte no menu para realizar quando quiser")
    }
}


function printSpaceship(spaceshipList){
    alert(spaceshipList.join("\n"))
}

function showMenu(){
    let chosenOption = prompt(  "Digite o que deseja fazer:\n" + 
                                "1.Realizar o engate\n" + 
                                "2.Imprimir naves\n" +
                                "3.Sair do programa")
    while(chosenOption != "3"){
        switch(chosenOption){
            case "1":
                hitched()
                break
            case "2":
                printSpaceship(spaceshipList)
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
let spaceshipList = []
showMenu()