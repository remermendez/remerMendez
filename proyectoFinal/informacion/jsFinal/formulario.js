const signInButton = document.querySelector('.button');
const signUpButton = document.querySelector('.button2');
const signUp = document.querySelector('.sign-up');
const signIn = document.querySelector('.sign-in');

document.addEventListener("click", e =>{
    if (e.target === signInButton || e.target === signUpButton){
        signIn.classList.toggle('active');
        signUp.classList.toggle('active');
    };
});

function enviar(){
    let nombre = document.getElementById('nombre').value;
    let contrasena = document.getElementById('contrasena').value;
    if (nombre === "itla" && contrasena === "itla"){
        location.href = "/index";
}else{
        alert("nombre o contraseña incorrecta");
    };
};
