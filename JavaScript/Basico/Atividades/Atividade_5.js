let spaceship, newSpaceship, charToReplace, replacementChar

spaceship = prompt ("Qual o nome da nave: \n")
charToReplace = prompt("Qual letra deseja substituir?\n")
replacementChar = prompt("Por qual deseja substituir?\n")
newSpaceship = ""

for(let i = 0; i < spaceship.length; i++){
    if(spaceship[i] == charToReplace){
        newSpaceship += replacementChar
    }else{
        newSpaceship += spaceship[i]
    }
}
alert("O novo nome da nave é:\n " + newSpaceship)