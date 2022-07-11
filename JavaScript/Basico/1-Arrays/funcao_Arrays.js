let hitchedSpaceship = ["Deméter", "Darwin", "Supernova", "Fênix", "Puller"]



//.FOREACH
//Percorre o Array e vai chamando o callback que colocamos, no caso a função e seus parametros, nesse caso vai imprimir o
//nome da nave e sua posição na lista 
hitchedSpaceship.forEach(function(currentSpaceship, index){
    console.log("Name: " + currentSpaceship + "\nIndice: " + index)
})



//.MAP
//Percorre o Array e vai alterando ele de acordo com os comandos do callback, porém não modifica o array original
let upcasedSpaceship = hitchedSpaceship.map(function (currentSpaceship){
    let upcased = currentSpaceship.toUpperCase() //.toUpperCase vai deixar tudo em maiusculo
    return upcased
})
console.log(hitchedSpaceship)
console.log(upcasedSpaceship)



//.FILTER
//Vai percorrer o array, testando o nosso filtro, ela retorna booleano do callback, se for true, ela adiciona na nova lista 
let with7Chars = hitchedSpaceship.filter(element => {return element.length >=7})

console.log(with7Chars)
//Mesma coisa de cima, porém com mais linha
let teste = hitchedSpaceship.filter(function (element){
    return element.length >= 7 //Quando o nome da nave tiver 7 ou mais letras, vai ser true e ele vai add a lista teste
})
console.log(teste)



//.FIND
//Vai percorrer o array e retornar o primeiro elemento que satisfazer o callback, diferente do .filter, retorna so 1
//e não em forma de array, para logo depois
let with5Chars = hitchedSpaceship.find(elemento =>{return elemento.length >= 5})
console.log(with5Chars)