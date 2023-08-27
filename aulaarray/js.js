/*var ar = [1,2,3,4,5]
for (var posi = 0; posi < ar.length; posi++){
    console.log(`posi: ${posi} tem valor ${ar[posi]}`)
}
*/
/*var ar = [-1,2,3,-4,5,-6,-7,8]
var newArray = []
for (num = 0; num < ar.length ; num++){
    if(ar[num] >= 0){
        newArray.push(ar[num])
    }
}
console.log(newArray)
*/

/*var ar = [1,2,5,7,3,9]

ar.splice(2, 3)

console.log(ar)
*/

/*var nov = ['carlos', 'lucas', 'daniel', 'nina']
var nom = nov.splice(2,1, 'gay', 'oi')
console.log(nov)
*/

/*var estad = ['sp', 'rj', 'ce']

var nov = estad.unshift('bh')

console.log(estad)
*/

/*var nome = ['guilherme', 'manoel','samuel', 'davi', 'joao']
nome.unshift('monica')
nome.pop()
var pos = nome.indexOf('samuel')
nome.splice(1,2,'Emanoel')

console.log(nome, pos)
*/

/*let ar = [1,2,3,4,5,6]

let newa = ar.slice(0, 3)

console.log(newa)
*/

/*
let ar = [1,2,3]
let ray = [4,5,6]

let ar2 = ar.concat(ray)

console.log(ar2)
*/

/*
var ar1 = ['jan', 'fev', 'maio', 'março', 'abril', 'agost']
var ar2 = ar1.slice(0,3 + 3, 7)
 
console.log(ar2)
*/

/*
var ar = [1,2,3,4,5,6]

var ray = ar.filter(number => number > 2)

console.log(ray)
*/

/*
var ar = [1,2,3,4,5,6,7,8,9]

var ray = ar.filter(
    function(valor){
        return valor >= 7
    }
)
console.log(ray)
*/

/*
var ar = [
    {nome: 'Carlos', idade: 21},
    {nome: 'Carlos', idade: 20},
    {nome: 'daniela', idade: 24}
]

var lista = ar.filter(function(ray){
    return ray.nome === 'Carlos'
})

console.log(lista)
*/

/*
var ar = [1,2,3,4,5,6,7,8]
 
var ray = ar.map(function(numbers){
    return numbers * 3
})

console.log(ray)
*/

/*
var ar = [
    {nome: 'Carlos', idade: 21},
    {nome: 'Carlos', idade: 20},
    {nome: 'daniela', idade: 24}
]

ray = ar.map(pessoas => pessoas.nome)

console.log(ray)
*/

/*
var ray = [1,2,3,4]
var num1 = 0

 for(var i = 0; i < ray.length; i++){
     num1 += ray[i]
 }
 console.log(num1)
 */

 /*
 var ar = [1,2,3,4,5]

 ar.forEach(function(comidas){
    console.log(comidas)
 })
 */