function verificar() {
    var data = new Date()// variavel data recebe data atual
    var ano = data.getFullYear()//variavel ano recebe data atual do ano com 4 digitos
    var fano = document.getElementById('txtano') //criar formulario ano 
    //que é exatamente da caixa de texto txtano
    var res = document.querySelector('div#res')
    //variavel resultado recebe documento .queryselector div com id res
    if (fano.value.length == 0 || Number(fano.value) > ano){
        //se a variavel f ano for igual a 0 não tiver nada ou se a variavel
        // fano for maior que o ano atual
        window,alert('Verifique os dados e tente novamente!') 
        //vai gerar um alerta para 
    } else{
        var fsex = document.getElementsByName('radsex')
        //variavel f sexo recebe documento 
        //selecionou pelo nome onde os dois botões tem que ter o mesmo nome
        var idade = ano - Number(fano.value)
        //variavel idade recebe ano atual menos a idade
        res.innerHTML = `Idade calculada: ${idade}`
        //resultado insere texto recebe a variavel idade atraves de placeholder 
        var gênero = ''
         //variavel genero
        var img = document.createElement('img')
        //variavel img recebe teg img
        img.setAttribute('id', 'foto')
        //criou uma img com id foto
        
        if (fsex[0].checked) {//se o que estiver marcado for f sexo 0 
            gênero = 'Homem'//o gênero recebe homem
            if (idade >= 0 && idade <10 ) {
                //se a idade for maior ou igaul a zero e a idade for maior que que 10
                //sera uma criança
                img.setAttribute('src', 'foto-bebe-m.png')
                //comando seleciona a foto do bebe
            } else if (idade >= 10 && idade < 21){
                //se não idade for maior e igual a 10 anos e idade for menor 21 anos
                //sera um jovem
                img.setAttribute('src', 'foto-jovem-m.png')
                //comando para selecionar a foto do jovem 
            } else if (idade < 50 ){
                //se não a idade for maior que 21 ((nota que não é preciso colocar >= ))
                //sera um adulto  
                img.setAttribute('src', 'foto-adulto-m.png')
                //comando para selecionar a foto de um adulto
            } else {
                //sera um idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                //comando para selecionar a foto de um idoso
            }
        } else if (fsex[1].checked) {//se não o que estiver marcado for f sexo 1
            gênero = 'Mulher'//o  gênero sera mulher 
            if (idade >= 0 && idade <10 ) {
                //se a idade for maior ou igaul a zero e a idade for maior que que 10
                //sera uma criança
                img.setAttribute('src', 'foto-bebe-f.png')
                //comando para aparecer uma foto de um bebe feminino
            } else if (idade >= 10 && idade < 21){
                //se não idade for maior e igual a 10 anos e idade for menor 21 anos
                //sera um jovem
                img.setAttribute('src', 'foto-jovem-f.png')
                //comando para aparecer uma foto de um jovem feminino
            } else if (idade < 50 ){
                //se não a idade for maior que 21 ((nota que não é preciso colocar >= ))
                //sera um adulto  
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //sera um idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            } 
        }
            res.style.textAlíng = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        //resultado insere texto recebe  gênero mais a idade atraves de placeholder
            res.appendChild(img)
            //comando para adicionar um elemento que sera a img
        }


    }
