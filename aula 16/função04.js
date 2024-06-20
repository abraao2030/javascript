function fatorial (n) {  //calculando o fatorial de um número

    let fat = 1  //variavel chamada fat recebe 1

    for( let c = n; c > 1; c-- ) { // for contador começando em n 
                                   // enquanto contador fo maior que 1
                                   //contador perde 1
       fat *= c //fatorial recebe fatorial vezes o c
     }    
     return fat  //retorna fatorial                           
}


console.log(fatorial(5)) //mostrador

// 5! = 5 x 4 x 3 x 2 x 1 = 120 //fatorial

console.log(fatorial(4))