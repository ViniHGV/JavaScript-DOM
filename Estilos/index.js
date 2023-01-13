document.getElementById('claro').addEventListener('click', TemaClaro)
document.getElementById('escuro').addEventListener('click', TemaEscuro)

function TemaClaro(){
    document.body.style.color = 'black'
    document.body.style.backgroundColor = '#fff'
}
function TemaEscuro(){
    document.body.style.color = '#fff'
    document.body.style.backgroundColor = 'rgb(44, 44, 44)'
}