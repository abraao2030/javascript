var agora = new Date()// variavel agora recebe new Date (valor atual)
var hora = agora.getHours() /* variavel hora recebe a variavel agora 
getHours (que horas são agora no windows)*/
console.log(`Agora são exatamente ${hora} horas.`)//${hora} placeholder
if (hora < 12 ) { // se a hora for menor que 12
    console.log ('Bom Dia') // Bom Dia 
} else if (hora <= 18 ) {  // se não a hora for menor ou igual a 18 
    console.log('Boa Tarde') // Boa Tarde
} else { (hora > 18) //se não a hora for maior que 18
    console.log('Boa Noite!') // Boa Noite!
} 