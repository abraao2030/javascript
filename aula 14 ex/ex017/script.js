function tabuada() {// função tabuada 
    let num = document.getElementById('txtn')
    //variavel para receber o numero do id txtn
    let tab = document.getElementById('seltab')
    //variavel para receber a id da tabuada
    if (num.value.length == 0){//se a casa for igual a zero 
        window.alert('Por favor, digite um número!')
        //gera um alerta
        
    }else {//se não
        let n = Number(num.value)
    //variavel para receber a conversão do numero
        let c = 1 //fazendo a tabuada 
        tab.innerHTML = '' //limpa a tabuada quando se coloca texto novo
        while ( c <=10 ) {
            //enquanto o contador for menor ou igual a 10
            let item = document.createElement('option')
            //variavel item recebe criação do elento option
            item.text = `${n} x ${c} = ${n*c}`
            //parte de dentro do option vai ser
            //crase um numero vezes outro numero é igual
            // o resultado da multiplicão
            item.value = `tab${c}`
            //isso mostra o nome de cada linha 
            tab.appendChild(item)
            //adicionar um elemnto filho que vai ser o item 
            c++// adiciona c + 1 
        }

        
    }
    
}