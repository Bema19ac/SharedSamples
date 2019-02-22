console.log("js sucessfully loaded")

var user = {username: "Henrik",
            password: "programming"};


document.getElementById("submit").onclick = function(){
    var inputUsername = document.getElementById("username").value;
    var inputPassword = document.getElementById("password").value;

    if (inputUsername==user.username && inputPassword==user.password){
        alert("Login is correct");
        window.location = "./success.html";
    }
    else {
        alert("Login is not correct");
    }

};