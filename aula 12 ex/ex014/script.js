function carregar() {//função para carregar a imagem
    var msg = window.document.getElementById('msg')
//variavel msg recebe window.document.seleciona o elemento 
//por id 'msg'
    var img = window.document.getElementById('imagem')
//variavel img recebe window.document.seleciona o elemento
//por id 'imagem'
    var data = new Date()//variavel data recebe a data atual 
    //var hora = data.getHours()// variavel hora recebe a data e a hora atual
    var hora = 14
    // variavel teste para testar outras hora
    msg.innerHTML = `Agora são ${hora} hora.`
    //comando que manda aparecer a mensagem
    //`Agora são placeholder hora`
    if (hora >= 0 && hora < 12) { //se a hora for maior ou igual 
        // 0 horas e a hora for menor que 12 horas 
        //BOM DIA! 
        img.src = 'fotomanha.png'//seleciona a imagem da manhã
        document.body.style.background = '#e2cd9f'
        //mudando o fundo dinâmicamente = abre rechteg copia i codigo da cor de fundo
    } else if (hora >= 12 && hora  <= 18){// se não se a hora for maior ou
        //igual a 12 horas e a hora for menor que 18
        //BOA TARDE!
        img.src = 'fototarde.png'//selecioan a imagem da tarde
        document.body.style.background = '#b9846f'
        //muda a cor de fundo do documento para esse codigo '#b9846f'
    } else {//se não 
         //BOA noite!
         img.src = 'fotonoite.png'//seleciona a imagem da noite
         document.body.style.background = '#515154'
         //muda a cor de fundo do documento para esse codigo '#515154'
    }

    }

    


