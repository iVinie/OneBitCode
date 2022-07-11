let counter, spaceship, chosenOption

counter = 0
chosenOption = ""

spaceship = prompt ("Digite o nome da nave: \n")
chosenOption = prompt("Deseja fazer a dobra?\n 1. Sim\n2.Não\n(digite o número)")
while(chosenOption == "1"){
    chosenOption = prompt("Deseja fazer outra dobra?\n 1. Sim\n2.Não\n(digite o número)")
    counter += 1
}
alert("A nave: " + spaceship +" Fez: " + counter + " dobras")