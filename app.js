window.onload = () => {
    let grau = 360;
    let classe = "base up-down";
    let animacao = "animacaoUD";
    const base = document.querySelector(".base");

    let menu = document.querySelector(".menu");
    let inputs = menu.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("change",Atualizar);
    });

    let direcaoDiv = menu.querySelector(".direcao");
    direcaoDiv.addEventListener("click", () => {
        if(grau == 360 ) grau = 0;
        else grau += 90;
        direcaoDiv.style.transform = "rotate("+grau+"deg)";
        if(grau == 90 || grau == 270){animacao = "animacaoLR"; classe = "base left-right";}
        else{animacao = "animacaoUD"; classe = "base up-down";}
        console.log(grau, animacao, classe)
        Atualizar();
    });

    function Atualizar(){
        let cor1 = inputs[0].value;
        let cor2 = inputs[1].value;
        let cor3 = inputs[2].value;
        let speed = inputs[3].value;
        base.style.backgroundImage = "linear-gradient("+grau+"deg,"+cor1+","+cor2+","+cor3+")";
        base.style.animationDuration = speed;
        base.style.animationName = animacao;
        base.className = classe;
    }

    const btnUpVelo = document.querySelector(".btnUpVelo");
    const btnDownVelo = document.querySelector(".btnDownVelo");

    btnUpVelo.addEventListener("click", () => {
        let valor = parseInt(inputs[3].value);
        valor++;
        inputs[3].value = valor;
    });

    btnDownVelo.addEventListener("click", () => {
        let valor = parseInt(inputs[3].value);
        valor--;
        inputs[3].value = valor;
    });
}