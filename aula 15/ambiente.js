let num = [5, 8, 2, 9, 3] //varivel num recebe elementos composto
num.push(1)//adicionou o vetor 1
num.sort()//metodo interno para colocar o vetor em ordem
console.log(num)//mostrar o valor do vetor 
console.log (`O valor tem ${num.length} posições`)//mostrador  
// Template String quantas posições tem 
console.log(`O primeiro valor do  vetor é ${num[0]}`)
//mostrador Template String variavel num mostra o elemento da  1° casa 
let pos = num.indexOf(4)//variavel chamada pos recebe buscador do numero  tal 
if (pos ==-1) { //se a posição for igual a -1
    console.log(`O valor não foi encontrado!`)
    //mostrar o valor não foi encontrado
} else { 
    console.log(`O valor 8 está na posição ${pos}`)
    // mostrador do valor .....template string
}

