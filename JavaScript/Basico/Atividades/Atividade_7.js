function slowDown (newVelocity, printer ){
    if (newVelocity >= 20){
        newVelocity -= 20
    }else{
        newVelocity -= 10
    }
    printer(newVelocity)
    return(newVelocity)
}
let velocity = 150
while (velocity != 0){
    velocity = slowDown (velocity, function(velocity) {
        alert("A nave está a: " + velocity + "km/s")
    })
}
alert("A nave está parada, e as comportas podem ser abertas")