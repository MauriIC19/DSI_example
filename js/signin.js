if(localStorage.getItem("session")){
  window.location.replace("main.html");
}

let mail = null;
let user = null;
let cellphone = null;
let password = null;

function signin() {
  mail = document.getElementById("mail").value;
  user = document.getElementById("user").value;
  cellphone = document.getElementById("cellphone").value;
  password = document.getElementById("password").value;

  if (mail != "" && user != "" && cellphone != "" && password != "") {
    const userData = {
      mail: mail,
      user: user,
      cellphone: cellphone,
      password: password,
    };

    if (localStorage.getItem("users")) {
      //Lógica para añadir registros cuando ya existe por lo menos 1 elemento
      const users = JSON.parse(localStorage.getItem("users"));
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      //Lógica para insertar el primer elemento
      const users = [userData];
      localStorage.setItem("users", JSON.stringify(users));
    }
    alert("Usuario registrado");
    window.location.replace("main.html");
  }
  else {
    alert("No pueden haber campos vacíos");
  }
}

document.getElementById("signin").addEventListener("click", signin);
