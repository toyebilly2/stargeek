const cards = document.querySelector(".cards");


var emaillogado;
femaillogado()

carregarCatalogo();

function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadsatrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        if(elemento.email == emaillogado) {
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card")
        divcard.innerHTML = `<div class="cardimagem""><img src="imgcard/${elemento.foto}"></div>
        <div class="cardnome">${elemento.nome}</div>
        <div class="cardinfo"><a onclick="editar(${indice})">editar</a>
        <a onclick="excluir(${indice})">excluir</a>
        </div>
        `;
        
        cards.appendChild(divcard);
    }
    });
}

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

function editar(indice){
    var url ="cadastroitem.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}


function femaillogado(){
    let dados = sessionStorage.getItem("email");
    if(dados == null){
        window.location.assign("login.html");
    }else{
        emaillogado = dados;
    }
 }