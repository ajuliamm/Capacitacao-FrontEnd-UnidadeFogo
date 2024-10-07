const email = document.getElementById("email");
const messageErrorInputEmail = document.querySelector(".error-email");

const password = document.getElementById("senha");
const messageErrorInputPassword = document.querySelector(".error-password");

const formLogin = document.getElementById("login-form");

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
    return regex.test(email);
}

function validatePassoword(password) {
    const regex = /^\d+$/;
    return regex.test(password);
}

function validarFilds(e){
    console.log(email.value)
    fildTyped = e.target.value;
    
    isFormated = e.target.name == "email" ? validateEmail(fildTyped) : validatePassoword(fildTyped);

    if(!isFormated){
        if( e.target.name == "email" ){
             messageErrorInputEmail.classList.add('show-message');

        }
        else{
           messageErrorInputPassword.classList.add('show-message');

        }
    } else {
        e.target.name == "email" ? messageErrorInputEmail.classList.remove('show-message'): messageErrorInputPassword.classList.remove('show-message');

    }
    
}


email.addEventListener("blur", validarFilds)
password.addEventListener("blur", validarFilds)

formLogin.addEventListener("submit", e => {
    
    e.preventDefault()
    validEmail = validateEmail(email.value)
    validPassword = validatePassoword(password.value)

    if(validEmail && validPassword){
        alert("Email ou senha incorretas")
        email.value = "";
        password.value = "";
    }
})




