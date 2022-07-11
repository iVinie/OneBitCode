let spaceshipName = "Supernova" //Quando coloca o let fora, a variável é global, pode ser acessada de qualquer lugar
alert(spaceshipName)

function changeSpaceshipName(){
    spaceshipName = "elemental"
}
changeSpaceshipName()
alert (spaceshipName)


function startSpaceshipVelocity(){
    let velocity = 0 
}
//Vai da erro, pois o let está dentro da função, logo o programa não reconhece a variável, scope local, so dentro da função
startSpaceshipVelocity()
alert(velocity)
//Se declarar com "var" ele coloca no maior scope da função

