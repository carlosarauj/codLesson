/* //peso / altura * altura
let peso = 1
let altura = 1.76

let imc = (peso / (altura * altura))

if (imc > 40){
    console.log('Obesidade 3')
} else if (imc < 40 && imc >= 35){
    console.log('Obesidade 2')
} else if (imc < 35 && imc >= 30){
    console.log('Obesidade 1')
} else if (imc < 30 && imc >= 25){
    console.log('Acima do peso')
} else if (imc < 25 && imc >= 18.5){
    console.log('Peso normal')
} else if(imc < 18.5){
    console.log('Abaixo do peso')
} */

function dados(nome, sobrenome, alt, peso){
    return {
        nome,
        sobrenome,
        alt,
        peso,
        calc(){
            let imc = this.peso/(this.alt ** 2).toFixed(1)

            if (imc > 40){
                console.log('Obesidade 3')
            } else if (imc < 40 && imc >= 35){
                console.log('Obesidade 2')
            } else if (imc < 35 && imc >= 30){
                console.log('Obesidade 1')
            } else if (imc < 30 && imc >= 25){
                console.log('Acima do peso')
            } else if (imc < 25 && imc >= 18.5){
                console.log('Peso normal')
            } else if(imc < 18.5){
                console.log('Abaixo do peso')
            }
        }
    }
}

let aluno = dados('Carlos', 'Araújo', 1.76, 80)
aluno.calc()