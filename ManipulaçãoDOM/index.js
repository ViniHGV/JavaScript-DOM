function addContact(){
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')

    h3.innerText = "Contato " 
    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = "Nome: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild((document.createElement('br')))

    const phoneLi = document.createElement('li')
    phoneLi.innerText = "Telefone: "
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'fullname'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild((document.createElement('br')))

    const adressLi = document.createElement('li')
    adressLi.innerText = "Endereço: "
    const adressInput = document.createElement('input')
    adressInput.type = 'text'
    adressInput.name = 'fullname'
    adressLi.appendChild(adressInput)
    ul.appendChild(adressLi)
    ul.appendChild((document.createElement('br')))

    contactSection.append(h3, ul)
}