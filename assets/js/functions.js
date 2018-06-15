let dados;

function carregarDados(){
    
    let request = new XMLHttpRequest();
    request.open("GET", "dados.json");
    request.send();
    
    request.addEventListener("load", function(){
        if (request.status == 200){
            dados = JSON.parse(request.responseText);
            console.log("Carregando dados...");
            console.log(dados); 
        } else {
            console.log("Erro ao carrega dados do servidor:" + request.responseText);
        }
    });
}
