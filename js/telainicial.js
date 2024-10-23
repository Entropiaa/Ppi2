if(!localStorage.getItem("logado")){
    alert("usuario não autenticado");
    window.location.href="index.html";
}

function logout(){
localStorage.removeItem("logado");
window.location.href="index.html";
}