document.getElementById('claro').addEventListener('click', TemaClaro)
document.getElementById('escuro').addEventListener('click', TemaEscuro)

function TemaClaro(){
    console.log(document.body.style)
    document.body.style.color = 'black'
    document.body.style.backgroundColor = '#fff'
}
function TemaEscuro(){

}