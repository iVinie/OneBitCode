let distanceInLY, chosenOption, convertedDistance, chosenUnity

distanceInLY = prompt ("Digite a distancia em Anos-Luz:\n")
chosenOption = prompt ("Qual distancia deseja converter?\n 1. Parce(pc)\n2. Unidade Astronomica(AU)\n3. Quilometros(km)\n Digite o numero da opção desejada")
switch(chosenOption){
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY*0.306601
        break
    case "2":
         chosenUnity = "Unidade Astronomica"
         convertedDistance = distanceInLY*63241.1
         break
    case "3":
        chosenUnity = "Quilometros"
        convertedDistance = distanceInLY*9.5*Math.pow(10,12)
        break
    default:
        chosenUnity = "Conversão fora do escopo"
}
alert("Distancia em Anos-Luz: " + distanceInLY + "\n" + chosenUnity + ": " +convertedDistance)