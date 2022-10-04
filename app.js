window.onload = () => {
    let grau = 360;
    let classe = "base up-down";
    let animacao = "animacaoUD";
    const base = document.querySelector(".base");

    let menu = document.querySelector(".menu");
    let inputs = menu.querySelectorAll("input");
    let direcaoDiv = menu.querySelector(".direcao");

    direcaoDiv.addEventListener("click", () => {
        if(grau == 360 ) grau = 0;
        else grau += 90;
        direcaoDiv.style.transform = "rotate("+grau+"deg)";
        if(grau == 90 || grau == 270){animacao = "animacaoLR"; classe = "base left-right";}
        else{animacao = "animacaoUD"; classe = "base up-down";}
        console.log(grau, animacao, classe)
        Atualizar();
    })

    inputs.forEach(input => {
        input.addEventListener("change",Atualizar);
    });

    function Atualizar(){
        base.style.backgroundImage = "linear-gradient("+grau+"deg,"+inputs[0].value+","+inputs[1].value+","+inputs[2].value+")";
        base.style.animationDuration = inputs[3].value+"s";
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