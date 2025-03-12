function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Admin" && password === "4aPTaH110866") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("game-container").style.display = "block";
        startGame();
    } else {
        alert("Wrong username or password!");
    }
}

function startGame() {
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 600;
    
    var blocks = [];
    var score = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "blue";
        ctx.fillRect(50, 500, 300, 50);

        ctx.fillStyle = "red";
        blocks.forEach(block => {
            ctx.fillRect(block.x, block.y, 50, 50);
        });

        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText("Score: " + score, 10, 20);
    }

    function update() {
        blocks.forEach(block => block.y += 3);
        blocks = blocks.filter(block => block.y < canvas.height);
        
        if (Math.random() < 0.05) {
            blocks.push({ x: Math.random() * 350, y: 0 });
        }

        score++;
    }

    function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}
