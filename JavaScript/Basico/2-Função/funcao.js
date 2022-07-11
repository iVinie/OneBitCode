function greetPilot(params) { //criando a fução
    alert("Bom dia, Piloto!") //comandos da função
}

greetPilot() //chamando a função 

function speedUp(velocity = 0, acceleration = 0){//O igual a zero, deixa a função com valor padrão, caso n seja informado o valor de entrada
    let newVelocity = velocity + acceleration
    console.log ("Nova velocidade: " + newVelocity)
    return newVelocity //Vai retornar o valor
}
let velocity = 20
let acceleration = 60

alert("Velocidade atual: " + velocity + "km/s")

velocity = speedUp(velocity, acceleration)
alert("A nova velocidade é: " + velocity + "km/s")

//Tomar cuidado com a ordem dos parametro

