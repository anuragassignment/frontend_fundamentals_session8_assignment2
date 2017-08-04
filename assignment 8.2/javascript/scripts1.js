//sets the window LocalStorge object to a variable db
var db = window.localStorage;
//funtion signs up users and store their data in local storage
function signUp() {
    var signupFormDt = document.querySelector('#signup-form');
    var email = signupFormDt.querySelector('input[name="email"]');
    var password = signupFormDt.querySelector('input[name="password"]');
    var userName = signupFormDt.querySelector('input[name="name"]');
    //sets the signup data into local storage database
    db.setItem(userName.name, userName.value);
    db.setItem(email.name, email.value);
    db.setItem(password.name, password.value);
}
//get the dom elements using queryselector
var dashbr = document.querySelector('#dashboard');
var msg = document.createTextNode('welcome ' + db.name + ' to Myselfie Tech');
var dashP = document.createElement('p');
var mainSec = document.querySelector('main section');

// only executes the login successful message if it is a dashboard/homr page
if (mainSec.querySelector('#dashboard') !== null) {
    dashbr.insertBefore(dashP, dashbr.childNodes[3]);
    dashP.appendChild(msg);
}
//login function checks if the submitted data matches the signup data from local storage databse. If found correct logs in else shows error
function login() {
    var loginFormDt = document.querySelector('#login-form');
    var logEmail = loginFormDt.querySelector('input[type="email"]');
    var logPass = loginFormDt.querySelector('input[type="password"]');
    var error = document.querySelector('#login');
    if (db.email == logEmail.value && db.password == logPass.value) {
        window.location = '../html/dashboard.html';
        return false;
    } else {
        var errtxt = document.createTextNode('username and password are incorrect');
        var errorP = document.createElement('p');
        error.appendChild(errorP);
        errorP.appendChild(errtxt);
        return false;
    }

}