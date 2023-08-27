var num = prompt('Escolha sua bebida: (0)Café por 10.50, (1)Leite por 12.50, ou (2)Chá por 15.50')
var bebida = parseFloat(num)
var valor = 0

switch(bebida){
    case 0:
        bebida = 'Café'
        valor = 10.50.toFixed(2)
        console.log(`Você escolheu ${bebida}, o valor a pagar é: ${valor}`)
    break

    case 1: 
        bebida = 'Leite'
        valor = 12.50.toFixed(2)
        console.log(`Você escolheu ${bebida}, o valor a pagar é: ${valor}`)
    break

    case 2:
        bebida = 'Chá'
        valor = 15.50.toFixed(2)
        console.log(`Você escolheu ${bebida}, o valor a pagar é: ${valor}`)
    break

        default:
            console.log('Opção inválida, escolha entre Café(0), Leite(1), ou Chá(2)')


} 