
function contar () { //função contar do onclick
    //controles principais
    let ini = document.getElementById ('txti')
    //variavel inicio recebe o id txti
    let fim = document.getElementById ('txtf')
    //variavel fim recebe o id txtf
    let passo = document.getElementById ('txtp')
    //variavel passo recebe o id txtp
    let res = document.getElementById ('res')
    //variavel resultado recebe o id res
       
        if(ini.value.length == 0 || fim.value.length == 0 ||
            // se o comprimento da variavel inicio for igaul a zero 
            //ou o comprimento da variavel fim for igual a zero 
            passo.value.length == 0) {
            //ou o comprimeto da variavel passo for igual a zero 
           res.innerHTML = 'Impossível contar!'
           //insere texto (Impossível contar!)
           window.alert('[ERRRO] Faltam dados!')
           //alerta (erro faltam dados)
       
    } else { //se não
        res.innerHTML = 'Contando: <br>'
        //insere texto (Contando) <br>para dar quebra de uma linha 
        let i = Number(ini.value)
        //variavel i  recebe a variavel inicio 
        //e transforma ela em um número 
        let f = Number(fim.value)
        //variavel f recebe a varialvel fim e tranforma em número 
        let p = Number(passo.value)
        //variavel p recebe a variavel passo e valida ela como um número 
        if (p <= 0) { // se o passo for menor ou igual a  zero 
            window.alert('Passo inválido! Considerando PASSO 1')
            //cria um alerta com a mensagem (.....)
            p = 1 //ai faz o passo valer um 
        }
        if (i < f) {
            //contagem crescente 
           for(let c = i; c <= f; c += p) { //tem na aula 14
            //se o contador vai começar no início  e enquanto o for menor
            //ou igual ao fim o contador recebe ele mesmo mais o passo 
                 res.innerHTML += ` ${c} \u{1F449}	`
                 //mensagem recebe o que ele ja tem mais o contador 
                 //para colocar os imoji entra so site (unicode emoji list)
                 //coloca o codigo \u {.....} nesta formatação
           }
         } else {//se não 
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                //se o contador for igual o início  e o contador for miaor ou igual 
                //o fim e o contador vai perder passo 
                res.innerHTML += ` ${c} \u{1F449}`
                //insere texto mais mais o contador (concatena)
            } 
        } 
        res.innerHTML += `\u{1F31A}` 
        //insere o texto mais o emoji (concatena)
    }
}