function login() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block';
    modal.classList.add('show');
  }

  
  function fechar() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'none';
    modal.classList.remove('show');
  }
  
  function submitLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      alert(`Login realizado com email: ${email}`);
      closeModal();  // Fechar modal após o login
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  

  document.getElementById('senha').addEventListener('keyup', (event) => {
    if(event.key === "Enter") {
        fazerLogin(event);  
    }
});

function fazerLogin(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(email === "usuario@gmail.com" && senha === "123") {
        localStorage.setItem("logado", "true");
        window.location.href = "telaInicial.html";
    } else {
        alert("Usuário não encontrado");
    }
}


  function fazerCadastro(){
    event.preventDefault();
    var email2 = document.getElementById("email2");
    var senha2 = document.getElementById("senha2");
    var senhac = document.getElementById("senhaC");


  }