let valores = [8, 1, 7, 4, 2, 9]//variavel valores com valores
/*
console.log(valores)


console.log(valores[0]) //mostrar na tela o primeiro elemento
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


for(let pos=0; pos < valores.length; pos++) {
    //enquanto pos for menor que 0 e pos for menor que o tamnaho do vetor
    //o pos vai receber pos + 1
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
    //mostrador mensagem  ... templete String
    */

    for(let pos in valores ) {
        console.log(`A posição ${pos} tem o valor ${valores [pos]}`)

    }

