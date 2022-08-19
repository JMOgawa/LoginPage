const user = { email: "joana@email.com", senha: "1234" };

//SIGN IN
function entrar() {
    var userNome = document.getElementById("name").value
    console.log(userNome)
    var userEmail = document.getElementById("email").value
    console.log(userEmail)
    var userSenha = document.getElementById("password").value
    console.log(userSenha)
    console.log(localStorage.getItem('senha') + " - " + localStorage.getItem('email'))
    console.log(user.senha + " - " + user.email)

    if (userEmail != localStorage.getItem('email') || userSenha != localStorage.getItem('senha')) {
        if (userEmail != user.email || userSenha != user.senha) {
            alert("Senha ou email estão incorretos.")
        } else {
            window.location.replace('accountPage.html')
        }
    } else {
        window.location.replace('accountPage.html')
    }
}


//SIGN UP
function signup() {
    var nomeUser = document.getElementById("nome").value
    console.log(nomeUser)
    var senhaUser1 = document.getElementById("senha").value
    var senhaUser2 = document.getElementById("confSenha").value
    console.log(senhaUser1)
    var emailUser = document.getElementById("email").value
    console.log(emailUser)

    if (senhaUser1 != senhaUser2) {
        alert("Erro na confirmação de senhas. Verifique sua senha.")
    } else {
        localStorage.setItem('email', emailUser)
        console.log(localStorage.getItem('email'))
        localStorage.setItem('senha', senhaUser1)
        console.log(localStorage.getItem('senha'))
        window.location.replace('index.html')
    }
}


//MUDAR O TEMA - DARK MODE
function darkmode(){

}