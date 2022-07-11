let hitchedSpaceship = [["Fenix", 8, true], ["Golias", 10, true], ["Helmet", 5, false], ["Elemental", 3, true], ["Darwin", 15, false]]

let more9CrewMember = hitchedSpaceship.filter (function(spaceshipName){
    if (spaceshipName[1] > 9){
        return spaceshipName.splice(1,2)
    }
})/*.map(spaceshipName =>{ Poderia ser feito assim também
    return spaceshipName[0]
})*/


//alert(more9CrewMember.join('\n')) //Vai imprimir um embaixo do outro

let coupledSpaceship = hitchedSpaceship.findIndex (function(coupled) {
    if (coupled[2] == false){
        return coupled
    }
})
//alert(coupledSpaceship + 1) //Plataforma onde a nava esta acoplada 

let upcasedSpaceship = hitchedSpaceship.map(spaceship => {return spaceship[0].toUpperCase()})



alert("As naves que tem mais de 9 tripulantes são:\n" + more9CrewMember.join('\n') + "\n" + "A primeira plataforma que" 
+ " está com o engate pendente é: " + (coupledSpaceship + 1) + "\n" + "O nome das naves nas plataformas são:\n" + upcasedSpaceship.join('\n'))