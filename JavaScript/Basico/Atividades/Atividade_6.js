//Função para acelerar a nave
function speedUp (velocity = 0){
    let newVelocity =  velocity + 5
    return newVelocity
}
//Função para desacelerar a nave
function slowDown(velocity = 0) {
    let newVelocity = velocity - 5   
    return newVelocity
}
//Função para imprimir os dados de bordo da nave
function printSpaceshipBoardData(spaceship, velocity = 0) {
    alert("Nave: " + spaceship + "\nVelocidade: " + velocity + "km/s")
}
//Função para sair do menu de bordo
function exit(spaceship, velocity){
    alert ("Muito obrigado, boa viagem!!\nNave: " + spaceship + "\nVelocidade: " + velocity + "km/s")
}
//Função do menu de bordo da nave
function chosenOption(spaceship, velocity = 0){
    //aux é uma variável auxiliar para armazenar o comando do usuário
    let aux
    while (aux != "4"){ //loop vai rodar ate o usuário escolher a opção 4
        aux = prompt ("O que deseja fazer?\n"+
                        "1.Acelerar a nave em 5km/s\n"+
                        "2.Desacelerar a nave em 5km/s\n"+
                        "3.Imprimir dados de bordo\n"+
                        "4.Sair do menu\n"+
                        "Digite um numero:")
        //os if a seguir, vai testar o que o usuário escolheu fazer
        if(aux == "1"){
            velocity = speedUp( velocity)
        }else if(aux == "2" && velocity != 0){
            velocity = slowDown(velocity)
        }else if(aux == "3"){
            printSpaceshipBoardData(spaceship, velocity)
        }else if (aux == "4"){
            exit(spaceship,velocity)
        }else{
            alert("Comando invalido, tente novamente!!!")
        }
    }
}
//criação da variáveis
let spaceship, aux2, velocity
spaceship = prompt("Digite o nome da nave: ")
aux2 = prompt("Deseja abrir o menu de bordo?\n1.Sim\n2.Não\nDigite o número: ")
if(aux2 == 1){
    chosenOption(spaceship)
}