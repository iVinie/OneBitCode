let pilotName, velocity, newVelocity, confirmVelocity
pilotName = prompt("Digite seu nome:\n")
velocity = 0
newVelocity = prompt ("Qual velocida deseja acelerar:\n")

confirmVelocity = confirm ("Estamos acelerando para " + newVelocity + "km/s")

if(confirmVelocity){
    velocity = newVelocity
}
if (velocity <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
}else if (velocity < 40){
    alert("Estamos devagar. Podemos aumentar mais a velocidade")
}else if(velocity < 80){
    alert("Parece uma boa velocidade")
}else{
    alert("Velocidade perigosa, piloto automatico forçado")
}
alert("piloto: "+ pilotName + "\nVelocidade: " + velocity + "km/s")