function doubleVelocity (velocity, printer){ //printer vai receber a função printVelocity
    alert("Entramos em doubleVelocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

//let printVelocity = velocity =>{ //função para printar velocity
//    alert("A nova velocidade é: " + velocity + "km/s")
//}

//let newVelocity = douleVelocity (60, printVelocity) //Chamando a primeira função., para chamar a segunda

let anotherVelocity = doubleVelocity (60, (velocity) => {//chamou a funçao no parametro da outra funcão
    alert("A nova velocidade é " + velocity +"km/s")
})
