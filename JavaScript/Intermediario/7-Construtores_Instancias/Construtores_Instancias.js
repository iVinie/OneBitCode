/*
Instância é o que dá origem ao objeto, quando dizemos que uma classe foi instanciada
estamos dizendo que um objeto foi criado a partir daquela classe.
---------------------------------------------------------------------------------------
Toda class vêm com um método especial que chamamos de construtor, utilizamos para definir valores iniciais
dos atributos de um objeto. Este método é chamado quando criamos uma instância de uma classe com a palavra "new"
*/

class SpacialStation{
    constructor(name, plataformsQuantity, type = "Descoberta"){//Método de construção da classe
        this.name = name //Vai receber o primeiro parâmetro
        //Não precisa ter o mesmo nome do parâmetro
        this.plataformsQuantity = plataformsQuantity //Recebe o segundo parâmetro
        this.type = type //podemos deixar um valor fixo, caso queira
    }//Os três vão como atributos do calsse
}
let observatory = new SpacialStation ("Observatory", 40)
console.log(observatory)
let RapdiFire = new SpacialStation ("RapidFire", 80, "Battle")
console.log(RapdiFire)


