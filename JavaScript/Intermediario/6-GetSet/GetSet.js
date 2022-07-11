//Método Set é ultilizado para atribuir um valor a uma variável 
//SET
class TransportSpaceship{
    
    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }
    //Estamos colocando uma velocidade máxima, no caso, a "nave" não pode passar de 120km
    //Se a velocidade for maior que 120, ele da um set em 120

    //Interpreta velocity como uma variável e toda vez que chamar a var, ele entra no set, o mesmo vale para get
    /**
        @param {number} newVelocity
     **/
    set velocity(newVelocity){
        if(newVelocity > 120){
            this.currentVelocity = 120
        }else{
            this.currentVelocity = newVelocity
        }
    }
}

let rapidfire = new TransportSpaceship ("RapdiFire")
rapidfire.velocity = 80

console.log(rapidfire)

//GET
//o get ele vai retornar algo, mas n vai alterar o valor da var
class ResourceProcessStation{
    constructor(name, monthyProcessedLoad){
        this.name = name
        this.monthyProcessedLoad = monthyProcessedLoad
    }
    //Nesse caso, vai retornar o processamento na semana, e não no mês
    get weeklyProcessedLoad(){
        return this.monthyProcessedLoad/4
    }
}

let resouceProcessor = new ResourceProcessStation("gaia", 500)

console.log(resouceProcessor)
//Chamamos como var e não como método
console.log(resouceProcessor.weeklyProcessedLoad)
//Atribuindo outro valor a var monthyProcessedLoad
resouceProcessor.monthyProcessedLoad = 600
console.log(resouceProcessor)
console.log(resouceProcessor.weeklyProcessedLoad)