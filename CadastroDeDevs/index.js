const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev){
    ev.preventDefault()
    const name = document.querySelector('input[name="name"]').value

    const ul = document.createElement('ul')
    const inputtec = document.createElement('input')
    inputtec.type = "text"
    inputtec.className = "form-control"
    ul.appendChild(document.createElement('br'))
    const title = document.createElement('p')
    title.innerText = "Tecnologia: "
    ul.appendChild(title)
    ul.appendChild(inputtec)

    

    form.append(ul)
})