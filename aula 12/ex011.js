var idade = 85 //variavel idade  recebe (colocar a idade)
console.log(`Você tem ${idade} anos.`) /*função ( ...${idade} placeholder)
onde vai a idade digitada*/
if (idade >= 16 && idade < 16) { /*se a idade for maior ou igual a 16 anos 
    e idade for menor que 16 */
    console.log('Não vota')//função ('Não vota')
} else if ( idade < 18 || idade > 65){ /*se não se idade for menor 18
ou idade for maior que 65 */
     console.log('Voto opcional')// função ('Voto opcional')
    } else  if(idade >= 18) {//se não se idade for maior ou igaul a 18 
        console.log('voto obrigatório')//função ('voto obrigatório')
    }
