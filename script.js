let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#botao");

let sizePassword = document.querySelector("#valor");
let Password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    Password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("SENHA COPIADA!");
    navigator.clipboard.writeText(novaSenha);

}