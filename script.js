function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Admin" && password === "4aPTaH110866") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("game-container").style.display = "block";
        startGame();
    } else {
        alert("Wrong username or password hoe fuck you!");
    }
}

