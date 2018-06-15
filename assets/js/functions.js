let dados;
let dataAtual = new Date();
let dataAtualFormatada = dataAtual.getDate() + "/" + (dataAtual.getMonth() + 1) + "/" + dataAtual.getFullYear();

function carregarDados(filtro){
    
    let request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/marcoaugustoandrade/world-cup/master/dados.json");
    request.send();
    
    request.addEventListener("load", function(){
        if (request.status == 200){
            
            dados = JSON.parse(request.responseText);
            console.log("Carregando dados...");

            filtro = "16/6/2018";
            //Filtrando os dados
            let filtrado = dados.confrontos.filter(n => n.data == filtro);
            
            filtrado.forEach(function(elemento){
            //dados.confrontos.forEach(function(elemento){
                //console.log(elemento);
                
                let container = document.querySelector("#confrontos");
                
                let jogoContainer = document.createElement("div");
                jogoContainer.classList.add("jogo-container");
                let gradient = "linear-gradient(to right, " + elemento.time_1_cor + " 0%, " + elemento.time_2_cor + " 100%)";
                jogoContainer.style.background = gradient;
                container.appendChild(jogoContainer);

                    let jogoContainerConteudo = document.createElement("div");
                    jogoContainerConteudo.classList.add("jogo-container--conteudo");
                    jogoContainer.appendChild(jogoContainerConteudo);

                        let jogoContainerConteudo1 = document.createElement("div");
                        jogoContainerConteudo.appendChild(jogoContainerConteudo1);

                            let pais1 = document.createElement("div");
                            pais1.classList.add("pais");
                            jogoContainerConteudo1.appendChild(pais1);

                                let img1 = document.createElement("img");
                                img1.classList.add("pais--flag");
                                img1.src = "assets/images/"+elemento.time_1_flag;
                                img1.title = elemento.time_1_nome;
                                pais1.appendChild(img1);
                                let paisSigla1 = document.createElement("span");
                                paisSigla1.classList.add("pais--sigla");
                                paisSigla1.textContent = elemento.time_1_sigla;
                                paisSigla1.title = elemento.time_1_nome;
                                pais1.appendChild(paisSigla1);


                        let jogoContainerConteudo2 = document.createElement("div");
                        jogoContainerConteudo.appendChild(jogoContainerConteudo2);

                            let resultado = document.createElement("div");
                            resultado.classList.add("resultado");
                            jogoContainerConteudo2.appendChild(resultado);

                                let resultadoSpan1 = document.createElement("span");
                                resultadoSpan1.textContent = elemento.time_1_gols;
                                resultado.appendChild(resultadoSpan1);
                                let resultadoSpan2 = document.createElement("span");
                                resultadoSpan2.textContent = "x";
                                resultado.appendChild(resultadoSpan2);
                                let resultadoSpan3 = document.createElement("span");
                                resultadoSpan3.textContent = elemento.time_2_gols;
                                resultado.appendChild(resultadoSpan3);
                        
                        let jogoContainerConteudo3 = document.createElement("div");
                        jogoContainerConteudo.appendChild(jogoContainerConteudo3);

                            let pais2 = document.createElement("div");
                            pais2.classList.add("pais");
                            jogoContainerConteudo3.appendChild(pais2);

                                let paisSigla2 = document.createElement("span");
                                paisSigla2.classList.add("pais--sigla");
                                paisSigla2.textContent = elemento.time_2_sigla;
                                paisSigla2.title = elemento.time_2_nome;
                                pais2.appendChild(paisSigla2);
                                let img2 = document.createElement("img");
                                img2.classList.add("pais--flag");
                                img2.src = "assets/images/"+elemento.time_2_flag;
                                img2.title = elemento.time_2_nome;
                                pais2.appendChild(img2);
                    
                    let jogoContainerHorario = document.createElement("div");
                    jogoContainerHorario.classList.add("jogo-container--horario");
                    jogoContainer.appendChild(jogoContainerHorario);

                        let jogoContainerHorarioTexto = document.createElement("span");
                        jogoContainerHorarioTexto.textContent = "09h00";
                        jogoContainerHorario.appendChild(jogoContainerHorarioTexto);

            });

        } else {
            console.log("Erro ao carrega dados do servidor:" + request.responseText);
        }
    });
}
