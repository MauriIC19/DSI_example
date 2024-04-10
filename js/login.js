if(localStorage.getItem("session")){
    window.location.replace("main.html");
}

let mail = null;
let password = null;
let valid = false;

function login() {
    mail = document.getElementById("mail").value;
    password = document.getElementById("password").value;

    if(mail != "" && password != "") {
        const users = JSON.parse(localStorage.getItem("users"));
        for (let i = 0; i < users.length; i++) {
            if(users[i].mail == mail && users[i].password == password) {
                valid = true;
            }
        }
        if (valid) {
            localStorage.setItem("session", true);
            window.location.replace("main.html");
        }  
        else {
            alert("El usuario y/o contraseña son incorrectos");
        }     
    }
    else {
        alert("El usuario y/o contraseña son incorrectos");
    }
}

document.getElementById("login").addEventListener("click", login);