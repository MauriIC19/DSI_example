if(!localStorage.getItem("session")){
    window.location.replace("index.html");
}

function logout() {
    localStorage.removeItem("session");
    window.location.replace("index.html");
}

document.getElementById("logout").addEventListener("click", logout);