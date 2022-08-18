const user = { email: "joana@email.com", pass: "1234" };

function entrar() {
    var nameUser = document.getElementById("name").value
    console.log(nameUser)
    var emailUser = document.getElementById("email").value
    console.log(emailUser)
    var senhaUser = document.getElementById("password").value
    console.log(senhaUser)
    console.log(user.pass + " - " + user.email)
    if (emailUser != user.email || senhaUser != user.pass) {
        alert("Senha ou email estão incorretos.")
    } else {
        window.location.replace('accountPage.html')
    }
}


function signup(user){
    var nomeUser = document.getElementById("nome").value
    console.log(nomeUser)
    var passUser1 = document.getElementById("senha").value
    var passUser2 = document.getElementById("confSenha").value
    console.log(passUser1)
    var userEmail = document.getElementById("email").value
    console.log(userEmail)
  
    if(passUser1===passUser2){
        console.log(user.email)
        /*user.push({email: userEmail, pass: passUser2})*/
    }
}