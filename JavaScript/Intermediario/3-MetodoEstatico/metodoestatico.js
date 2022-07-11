/*
Um Atributo Static é pra criar um Atributo para a CLASSE
Ele não vai criar um atributo para o objeto instanciado
*/
class ResouceProcessorStation{
    constructor(name, monthlyProcessing){
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }
    static calculateProcessInHours(monthlyProcessing, hours){
        //720 =  1 mês 24*30
        //Saber quanto foi processado em x horas
        return monthlyProcessing/720 * hours
    }
}

let processor = new ResouceProcessorStation('Gaia', 2000)
//Não funciona, pois ele não é uma função do objeto processor, so podemos chamar direto na classe
//processor.calculateProcessInHours(processor.monthlyProcessing, 10)


//Como deveremos chamar?

/**
Estamos chamando diretamente da classe, passando o parâmetro do objeto e a quantidade de horas que queremos saber
*/
let totalProcessed = ResouceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10)
console.log(totalProcessed)

//Ou
//Porém, ai n tem objeto nenhum
console.log(ResouceProcessorStation.calculateProcessInHours(5000, 20))