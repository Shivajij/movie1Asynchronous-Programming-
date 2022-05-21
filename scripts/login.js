var regUser = JSON.parse(localStorage.getItem("signup")) || [];
console.log(regUser);

// var log = document.querySelector("#login");

document.querySelector("#log").addEventListener("submit",login);

function login(event){
    event.preventDefault();

    var user = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    var check = false;
    for(var i = 0; i < regUser.length;i++){
        if(regUser[i].email == user && regUser[i].password == pass){
            check = true;
            alert("Login Successful.");
            window.location.href = "index.html"; 

        }
    }

    if(check == false){
        alert("Wrong email and password.Please try again!")
    }

    // log.email.value = "";
    // log.password.value = "";
}