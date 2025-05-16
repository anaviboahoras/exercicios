var agora = new Date() 
var diasem = agora.getDay()
/*
domingo = 0
segunda = 1
terça = 2 e assim por diante
*/
console.log(diasem)
switch(diasem){
    case 0: console.log('Domingo')
    break  
    case 1: console.log("Segunda-feira")
    break 
    case 2: console.log("Terça-feira")
    break 
    case 3: console.log("Quarta-feira")
    break 
    case 4: console.log("Quinta-feira")
    break 
    case 5: console.log("Sexta-feira")
    break 
    case 6 : console.log("Sábado")
    break 
    default :
    console.log("ERRO: DIA INVÁLIDO!")
    break
}
