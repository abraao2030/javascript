var agora = new Date() 
//variavel agora recebe dia da semana
var diaSem = agora.getDay()
//variavel dia da semana recebe variavel agora
//que mostra o dia da semana
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta 
    5 = Sexta
    6 = Sabado
*/
console.log(diaSem)
/*
if (diaSem == o) {
    console.log('Domingo')
}else if (diaSem == 1) {
    console.log('Segunda')
}
*/
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('Dia inválido!')
        break
}