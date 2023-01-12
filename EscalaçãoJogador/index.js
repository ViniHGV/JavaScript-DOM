function addPlayer (){
    //Para obter o valor de um input usar "document.getElementById('id').value"
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
    console.log({position,name,number})

    const confirmation = confirm("Escalar " + name + " como " + position + "?")

    if (confirmation){
        const teamList = document.getElementById('teamList')

        //Criando um elemento
        const playerItem = document.createElement('li')
        
        playerItem.id ='player-' + number
        playerItem.innerText = position + ": " + name + " (" + number +")"

        //inserir a team list com playerItem
        teamList.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}
function removePlayer(){

}