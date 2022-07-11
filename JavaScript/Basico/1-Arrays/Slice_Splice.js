let spaceshipName = ["Supernova", "Elemental", "Helmet", "RapdFire"]
console.log (spaceshipName)

//.SPLICE 
let removedSpacdship = spaceshipName.splice(1,2, "Deméter", "Puller", "Golias") //o .splice vai remover 2 elementos
//a partir do elemento 1 e adicionar "Deméter","Puller", "Golias" //o . splice vai também retornar os elementos removidos

console.log (spaceshipName)
console.log (removedSpacdship)

let memory = spaceshipName.indexOf("Puller")//Armazenou o indice de "Puller"
spaceshipName.splice(memory, 1) //Retirou 1 elemento a partir do indice de Puller, logo, removeu Puller
console.log (spaceshipName)

//.SLICE

let extractedNames = spaceshipName.slice(1, 3)//.slice, não altera o Array original, vai retornar do elemento 1 
//ao menor que 3, do 1 ao 2 
console.log(spaceshipName)
console.log(extractedNames)