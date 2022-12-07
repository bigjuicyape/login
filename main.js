let button = document.getElementById("ascend")



button.addEventListener("click", ascend)

function ascend() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    username = username.toLowerCase();
    password = password.toLowerCase();
    if (username !== "goblin") {
        document.getElementById("5").innerHTML = "bad username"
        imgresult.src = "goblin.png"
    } else if (username === "goblin" && password !== "cage") {
        document.getElementById("5").innerHTML = "bad password"
        imgresult.src = "goblin.png"
    } else {
        document.getElementById("5").innerHTML = "Welcome Admin"
    }
}

