alert('Olá')
 //controle basico
let num = document.querySelector('input#fnum')
//variavel num recebe caixa de números input#fnum
let lista = document.querySelector('select#flista')
//variavel lista recebe a caixa de lista select#flista
let res = document.querySelector('div#res')
//variavel res recebe a caixa de resultados de la de baixo
let valores = []
//vetor que analisara os dados (variavel composta)

function isNumero(n) { // função para receber o elemento número

    if(Number(n) >= 1 && Number(n) <= 100) {
        //para verificar ne n é um número
        //se n é maior ou igual a 1 e n for menor que cem
        return true //tem um retorno verdadeiro (não escreve nada)
    } else {  //se não 
        return false //retorno falso 
    }


}

function inLista(n, l) { //função para saber se o número esta em uma 
    //determinada lista (n, l recebe um número e uma lista)
    if (l.indexOf(Number(n)) != -1) {
        //se na lista o número não for encontrado 
        return true // retorno verdadeiro 
    } else { //se não 
        return false //retorno falso 
    }

}

 function adicionar() { ////função adicionar 1° coisa a se fazer
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        //so vai adicionar se for número
        //e não estiver ja em lista
        window.alert('Tudo OK')
        valores.push(Number(num.value))
        //valores que é o indice
        //adicionar dentro do vetor um número ja conferido
        let item = document.createElement('option')
        //vai criar um item elemento (option)
        item.text = `Valor ${num.value} adicionado.`
        //que vai ser um item texto onde recebe a mensagem ... place holder ...
        lista.appendChild(item)
        // para adicionar na lista
        res.innerHTML = ''//para zerar a mensgem que aparece logo abaixo 
        //quando se finaliza 

    } else { //se não 
        window.alert('Valor inválido ou já encontrado  na lista.')
        //cria um alerta
    }
    num.value = '' //para apagar a caixa de número 
    num.focus()  //isso volta o cursor do mouse para a caixa de número 
 }

 function finalizar() {  //função para finalisar 
    if (valores.length == 0) { //verificar se o vetor esta vazio 
        window.alert('Adicione valores antes de finalizar!')
        //cria um alerta 
    } else { //se não
        let tot = valores.length
        //variavel total recebe o valor de elemento que ele tem 
        //(soma  quantos elemento tem )
        let maior = valores [0] 
        let menor = valores [0]
        let soma = 0 //a soma começa na posição 0 e vai 
        //para posição 1 posição 2 em diante 
        let media = 0
        
        for (let pos in valores) { //para cada posição em valores vai fazer um teste
            soma += valores[pos] 
            //soma concatena nas posições pos
            if  (valores [pos] > maior) //se não na posição pos estiver o maior valor 
                maior = valores [pos] //passa a ser ele 
            if (valores[pos] < menor ) //se não na posição pos estiver o menor valor 
                menor = valores [pos]//passa a se ele
        }
        media = soma / tot
        //a media é a soma dividido pelo total de elementos 
        res.innerHTML = '' //para zerar o valor 
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        //mesagem para ver quantos elemento tem 
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        //paragrafo para mensagem de maior valor 
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        //paragrafo de mensagem para menor valor 
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        //paragrafo de mensagem para soma de todos os valors 
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
        //paragrafo para a media dos valores
    }
 }