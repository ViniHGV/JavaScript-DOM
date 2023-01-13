const form = document.getElementById('orderForm')
const btnC = document.getElementById('btnC')

btnC.addEventListener('click', function(ev){
    ev.preventDefault()
    const name = document.querySelector('input[name="name"]').value

    const ul = document.createElement('ul')
    const inputtec = document.createElement('input')
    inputtec.type = "text"
    inputtec.className = "form-control"
    inputtec.id = "inputtec"
    ul.appendChild(document.createElement('br'))
    const title = document.createElement('p')
    title.innerText = "Tecnologia: "
    ul.appendChild(title)
    ul.appendChild(inputtec)



    const div = document.createElement('div')
    div.className = "form-check form-check-inline"
    const titleExp = document.createElement('div')
    const title2 = document.createElement('p')
    title2.innerText = "Tempo de Experiência"

    const inputcheck = document.createElement('input')
    inputcheck.className = "form-check-input"
    inputcheck.type = "radio"
    inputcheck.id = "inlineRadio1"
    inputcheck.name = "inlineRadioOptions"

    const lbl = document.createElement('label')
    lbl.className = "form-check-label"
    lbl.for = "inlineRadio1"
    lbl.innerText="0-2 Anos"

    div.appendChild(document.createElement('br'))
    titleExp.appendChild(title2)
    div.appendChild(inputcheck)
    div.appendChild(lbl)



    const div2 = document.createElement('div')
    div2.className = "form-check form-check-inline"
    const inputcheck2 = document.createElement('input')
    inputcheck2.className = "form-check-input"
    inputcheck2.type = "radio"
    inputcheck2.id = "inlineRadio2"
    inputcheck2.name = "inlineRadioOptions"

    const lbl2 = document.createElement('label')
    lbl2.className = "form-check-label"
    lbl2.for = "inlineRadio2"
    lbl2.innerText="3-4 Anos"

    div2.appendChild(document.createElement('br'))
    div2.appendChild(inputcheck2)
    div2.appendChild(lbl2)



    const div3 = document.createElement('div')
    const divbtn = document.createElement('div')
    const btn = document.createElement('button')
    btn.type = "button"
    btn.className = "btn btn-danger"
    btn.innerText = "Excluir essa Linha"
    btn.id = "btnX"

    const btnS = document.createElement('button')
    btnS.type = "button"
    btnS.className = "btn btn-primary"
    btnS.innerText = "Salvar"

    div3.className = "form-check form-check-inline"
    const inputcheck3 = document.createElement('input')
    inputcheck3.className = "form-check-input"
    inputcheck3.type = "radio"
    inputcheck3.id = "inlineRadio2"
    inputcheck3.name = "inlineRadioOptions"

    const lbl3 = document.createElement('label')
    lbl3.className = "form-check-label"
    lbl3.for = "inlineRadio2"
    lbl3.innerText="5+ Anos"

    div3.appendChild(document.createElement('br'))
    div3.appendChild(inputcheck3)
    div3.appendChild(lbl3)

    div3.appendChild(document.createElement('br'))
    divbtn.appendChild(document.createElement('br'))
    divbtn.appendChild(btn)


    divbtn.appendChild(document.createElement('hr'))


    form.append(ul, titleExp, div ,div2, div3, divbtn)

})

const cad = document.getElementById('cad')
cad.addEventListener('click', function (ev){
    const name = document.getElementById('name').value
    var tec = document.getElementById('inputtec').value

    alert("O dev " + name + " Se cadastrou no sistema e tem conhecimento de "+tec)
    var devs = []

})

const btnX = console.getElementById('btnX')
btnX.addEventListener('click', function(){
    alert("Clique")
})

