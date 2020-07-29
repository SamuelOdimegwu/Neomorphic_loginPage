const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');
const btnLogin = document.getElementById('login');
const btnSignUp = document.getElementById('signUp');
const output = document.getElementById("output");

btnSignUp.addEventListener('click', function() {
    let person = prompt("Please enter any Username of your choice", "");
    let password = prompt("Please enter any password of your choice", "");

    if (person != "" || password != "") {
        output.innerHTML = `You signed in successfuly, ${person}`
    } else {
        output.innerHTML = `Incomplete Details, please sign in properly`
    }
})