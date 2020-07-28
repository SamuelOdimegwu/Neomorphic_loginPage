const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');
const btnLogin = document.getElementById('login');
const btnSignUp = document.getElementById('signUp');

btnLogin.addEventListener('click', function() {
    if (inputUsername.innerHTML !== '' || inputPassword.innerHTML !== '') {
        alert("Login Successful!");
    } else {
        alert("Incomplete Details!");
    }
})

btnSignUp.addEventListener('click', function() {
    let person = prompt("Please enter any Username of your choice");
    let password = prompt("Please enter any password of your choice");

    if (person != null) {
        document.getElementById("output").innerHTML =
            "Hello " + person + "!,  You've signed in successfully";
        return;
    }
})