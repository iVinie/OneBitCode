//ARRAYS
let hitchedSpacechip = ["Supernova", "Elemental", "Helmet"] //Criou um arrays de string

console.log(hitchedSpacechip) // imprime a primeira posição do array

//OBS.:O array não precisa ter um tipo so, ex.: let spacechip = ["Supernova" , 7, true], uma string, numero, booleano

let getNumber = new Array(1, 2, 3)//Caso tenha so um número, ...new Array(10) vai criar um array com 10 posições
console.log (getNumber)




//FUNÇÕES DE ADICIONAR
hitchedSpacechip.push("Colossus") //.push adiciona um elemento no final do array
console.log(hitchedSpacechip)

hitchedSpacechip.unshift("Fênix")//.unshift adiciona um elemento no começo do array
console.log(hitchedSpacechip)





//FUNÇÕES DE REMOVER
//hitchedSpacechip.pop() //Remove o ultimo elemento e também retorna o elemento removido
let removedSpacdship = hitchedSpacechip.pop()
console.log(hitchedSpacechip)
console.log(removedSpacdship)

hitchedSpacechip.shift() //remove o primeiro elemento e assim como a pop ela retorna o elemento retornado
console.log(hitchedSpacechip)





//Retorna o tamanho do array, muito usado para andar sobre o array, em loops
console.log(hitchedSpacechip.length)






//Procurar o indice de um elemento
let elementalPos = hitchedSpacechip.indexOf("Elemental") //.indexOf, vai retornar a posição de Elemental
//Se por acaso o index.Of não encontrar o elemento, ele retorna -1
console.log(elementalPos)