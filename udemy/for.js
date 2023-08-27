/*
let names = ['carlos', 'lucas', 'daniel', 'jonatas', 'camila']

for(let count = 0; count < names.length; count++){
    console.log(`Os nomes dos usuarios sao ${names[count]} com ${count} e ${names}`)
}
*/

let elements = [
    {tag:'p', text:'frase1'},
    {tag:'div', text:'frase2'},
    {tag:'footer', text:'frase3'},
    {tag:'section', text:'frase4'}
]

let list = document.getElementById('frase1')
let p = document.createElement('p')

for(nome = 0; nome < elements.length; nome++){
    let = (elements[nome].text)
    let tagcreat = document.createElement(tag)
    tagcreat.innerHTML = text
    p.appendChild(tagcreat)
}
list.appendChild(p)

