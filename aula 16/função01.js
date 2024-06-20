function parimpar(n) {  // função com parametro 11
    if ( n %2 == 0 ) {
        return 'Par!'  //retorno da chamada
    } else { 
        return 'Ímpar!' //retorno da chamada 
    }
}

let res = parimpar(11) //chamada com parametro 11
//para substituir o parametro n
console.log(res) //mostrador de resultado
//ou
console.log(parimpar(50)) // chamda com parametro 50
console.log(parimpar(20156)) //chamada com parametro 20156