//OPT UM
function perdaPeso(){
    const gordura = document.getElementById("apos-click").innerHTML = `  <h4 id="perda-gordura">
                Perda de gordura
            </h4>
            <p id="txt-perda">
                <span id="letra-maior">A</span> perda de peso saudável envolve a adoção de hábitos como uma alimentação equilibrada e a prática regular de atividade física. O Ministério da Saúde do Brasil recomenda focar na promoção da saúde, considerando a perda de peso apenas como um dos elementos do cuidado, e não o único objetivo. (VEIT-ROSA-2015)
            </p>

            <p id="exp-ex">
                <span id="letra-maior">E</span>xercícios como agachamentos, flexões e abdominais são ótimas opções para praticar em casa. No entanto, cada pessoa tem necessidades específicas, e é fundamental contar com a orientação de um profissional de educação física para garantir um treino seguro e eficaz. (VEIT-ROSA-2015)
            </p>
            <div id="exercicios-img">
                <p id="img-um">
                    <a href="./img/Os Benefícios da Atividade Física - Meu Treino Perfeito.jpeg">
                        <img src="./img/Os Benefícios da Atividade Física - Meu Treino Perfeito.jpeg" alt="Agachamento" id="complemento-txt"> 
                    </a>
                </p>
                <p>
                    <a href="./img/64fdf3d1-8acb-4e21-af9d-d11192bcf5ba.jpeg">
                        <img id="complemento-txt" src="img/64fdf3d1-8acb-4e21-af9d-d11192bcf5ba.jpeg" alt="treino para perder gordura">
                    </a>
                </p>
            </div>
            <p id="limpa" onclick="limpa()">Limpar</p>
`
}

function ganhoMassa(){
    const ganhoMassa = document.getElementById("apos-click").innerHTML = `<h4 id="perda-gordura">
                Ganho de massa
            </h4>
            <p id="txt-perda">
                <span id="letra-maior">O</span> ganho de massa muscular requer treino de força, alimentação equilibrada e descanso adequado. A ingestão de proteínas, carboidratos complexos e gorduras saudáveis é essencial para o anabolismo muscular. Além disso, o consumo adequado de calorias e a regularidade nos exercícios são fundamentais. Evitar dietas restritivas garante resultados mais consistentes. (VEIT-ROSA-2015)
            </p>

            <p id="exp-ex">
                <span id="letra-maior">N</span>a academia, exercícios como musculação, treino cardiovascular (esteira e bicicleta) e aulas funcionais são ótimas opções para melhorar o condicionamento físico. No entanto, cada pessoa possui objetivos e necessidades específicas. Por isso, é essencial buscar a orientação de um profissional de educação física para elaborar um treino personalizado, garantindo segurança e resultados eficazes. (VEIT-ROSA-2015)
            </p>
            <div id="exercicios-img">
                <p id="img-um">
                    <a href="./img/Um.jpeg">
                        <img src="./img/Um.jpeg" alt="Agachamento" id="complemento-txt">
                    </a>
                </p>
                <p>
                    <a href="./img/Dois.jpeg">
                        <img id="complemento-txt" src="img/Dois.jpeg" alt="treino para perder gordura">
                    </a>
                </p>
            </div>
            <p id="limpa" onclick="limpa()">Limpar</p>`
            
}
function limpa(){
    document.getElementById("apos-click").innerHTML = ""
}

    let nome = document.getElementById(`name`)
    let email = document.getElementById(`email`)
    let msg = document.getElementById(`msg`)

function form(){
    if(nome.value !== "" && email.value !== "" && msg.value !== ""){
    const msg = document.getElementById('responseMessage').innerHTML = `${nome.value}, sua resposta foi registrada com sucesso!`
    }else{
        const msg = document.getElementById('responseMessage').innerHTML = `Preencha todos os campos para prosseguir`
    }
    



}