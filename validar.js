
const form = document.getElementById('#form');
const campos = document.querySelectorAll('.formcontato__input');
const textarea = document.querySelectorAll('.formcontato__textarea');
const spans = document.querySelectorAll('.span-required');
const span = document.querySelectorAll('.spans-required');
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.getElementById('form').addEventListener('submit', function(event) {
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let assunto = document.getElementById('assunto').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || assunto === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); // Impede o envio do formulário
    }
});


function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display =  'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}


function nameValidate(){
    if(campos[0].value.length > 50)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function assuntoValidate(){
    if(campos[2].value.length > 50) 
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}


function settError(index){
    textarea[index].style.border = '2px solid #e63636';
    span[index].style.display =  'block';
}

function removerError(index){
    textarea[index].style.border = '';
    span[index].style.display = 'none';
}

function mensaValidate(){
    if(textarea[0].value.length > 300)
    {
        settError(0);
    }
    else
    {
        removerError(0);
    }
}
