const email = document.getElementById("email");
const messageErrorInputEmail = document.querySelector(".error-email");

const password = document.getElementById("senha");
const messageErrorInputPassword = document.querySelector(".error-password");

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
    return regex.test(email);
}

function validatePassoword(password) {
    const regex = /^\d+$/;
    return regex.test(password);
}

function validarFilds(e){
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





