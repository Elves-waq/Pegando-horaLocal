function carregar(){
    let msg = document.getElementById("msg");
    let img = document.getElementById("imagem");
    let msgResult = document.getElementById("msg-result");
    let data = new Date();
    let hora = data.getHours();
    
    msg.innerHTML = `Agora São ${hora} Horas.`;

    if (hora >= 0 && hora < 12){
        img.src = '/img/fotoManhã.png';
        msgResult.innerHTML = "<p>Bom Dia !!!</p>";
        document.body.style.background = "#f0ddbf"


    }else if(hora >= 12 && hora < 18){
        img.src = '/img/fotoTarde.png';
        msgResult.innerHTML = "<p>Boa Tarde !!!</p>";
        document.body.style.background = "#b97869"
    }else{
        img.src = '/img/fotonoite.png';
        msgResult.innerHTML = "<p>Boa Noite !!!</p>";
        document.body.style.background = "#31383e"
    }
}