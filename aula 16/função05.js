//RECURSIVIDADE uma fatorial que chama ela mesma
function fatorial(n){ //função fatorial vai receber um número
  if (n == 1) {  //se o número que eu recebi for 
                 //igaul a 1 eu sei que o resultado é 1
    return 1 // retorno 1 
  }  else { //se não for 1 
       return n *fatorial(n-1) //o número é o fatorial dele menos 1
  }

}
console.log(fatorial(5)) //mostrador 

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!  //o fatorial de um número pode ser cauculado 
             //baseado no fatorial de outro número

n! = n x (n-1)!  //o fatorial de n e sempre n vezes n-1 fatorial
1! = ! //a não ser que seja fatorial de 1 que é 1

*/