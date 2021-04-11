var agora = new Date();
var hora = agora.getHours();

var zeroFill = n => { 
    return ('0' + n).slice(-2); // função para formatar 1 em 01
}

function mostrar() {

    
    
    var imagem = window.document.getElementById("imagem")
    
    var interval = setInterval(() => { // cria o intervalo
        var now = new Date(); // pega o horário atual
        var realtime = zeroFill(now.getUTCDate()) + '/' + zeroFill(now.getMonth()) + '/' + zeroFill(now.getFullYear()) + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
        // formata a data e hora em dd/mm/yyyy hh:mm:ss
        document.getElementById("mensagem").innerHTML = realtime;
    }, 1000);
    

    if (hora >= 6 && hora < 12) {
        // BOM DIA!!
        imagem.src ='fotomanha.jpg'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        imagem.src ='fototarde.jpg'
    } else if (hora >= 18 && hora < 0) {
        imagem.src ='fotonoite.jpg'
        //BOA NOITE
    } else {
        imagem.src ='fotomadrugada.jpg'
    } 
}

onload = mostrar();


