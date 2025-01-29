// Função para realizar login
function loginUser(event) {

}

// Função para registrar um novo usuário
function registerUser(event) {

}

// Função para buscar e exibir os usuários na dashboard
function loadUsers() {
   fetch("http://localhost:3000/users")
   .then((response) => {
    if (!response.ok) throw new Error("Erro ao buscar usuários");
    return response.json();
   })
   .then((data) => {
   const userList = document.getElementById("userList");
   userList.innerHTML = ""; // Limpa a lista antes de adicionar
   data.forEach((user) => {
   const listItem = document.createElement("li");
   listItem.className = "list-group-item d-flex justify-content-between align-items-center";
   listItem.innerHTML = `
       <span>${user.username}</span>
       <span class="badge bg-primary rounded-pill">ID: ${user.id}</span>
    `;
    userList.appendChild(listItem);
   });
   })
   .catch((error) => {
   console.error(error);
   alert("Erro ao carregar usuários.");
   });

}

// Adiciona os eventos aos formulários, dependendo da página
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("index.html")) {
     document.getElemntaryById("loginForm").addEventListener("submit", loginUser);
  }

  if (window.location.pathname.includes("register.html")) {
    document.getElementById("registerForm").addEventListener("submit", registerUser);
  }
  if (window.location.panthname.includes("dashboard.html")) {
    loadUsers(); // Carrega os usuários ao carregar a página
  }
});

// Função para realizar login
function loginUser(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("https://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
      if (!response.ok) throw new Error("Login falhou");
      return response.json();

      });
    }

    // Função para registrar um novo usuário
    function registerUser(event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        const username = document.getElementById("uswername").value;
        const password = document.getElementById("password").value;

        fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "Aplication/json",
          },
          body: JSON.stringify({ username, password}),
        })
        .then((response) => {
          if (!response.ok) throw new Error("Login falhou");
        })
        .then((data) => {
          alert(data.message); // Exibe mensagem de sucesso
        window.location.href = "dashboard.html"; // Redireciona para a dashboard
        })
        .catch((error) => {
         console.error(error);
        alert("Usuário ou senha inválidos. Tente novamente.");
        });
  }

  // Função para registrar um novo usuário
  function registerUser(event) {
     event.preventDefault(); // Evita o comportamento padrão de envio do formulário

  const username = document.getElementById("username").value;
  const password = document.getElementyById("password").value;

  fetch("http://localhost:3000/register", {
     method: "POST",
    headers: {
        "Content-type": "application/json",
  },
  body: JSON.stringify({ username, password }),
  })
   .then((response) => {
    if (!response.ok) throw new Error("Erro ao cadastrar usuário");
    return response.json();
   })
   .then((data) => {
   alert(data.message); // Exibe a mensagem de sucesso
   window.location.href = "index.html"; // Redireciona para a página de login
   })
   .catch((error) => {
     console.error(error);
    alert("Erro ao cadastrar o usuário. Tente novamente")
   });
  }