const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));
    let logado = false;
    dados.forEach((elemento) => {
        if (elemento.email == email.value && elemento.senha ==senha.value) {
            evento.preventDefault();
            sessionStorage.setItem("email", email.value);
            window.location.assign("catalogo.html");
            logado = true;
            return true;
        } 
});

if (logado==false) {
    alert("Email ou senha inválidos");
}

}
