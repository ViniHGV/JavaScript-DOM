function register(ev){
    console.log(ev)
    const name = ev.currentTarget.parentNode.children.name.value
    const password = ev.currentTarget.parentNode.children.password.value
    const confirm = ev.currentTarget.parentNode.children.confirm.value

    if (password === confirm){
        alert("Usuário " + name + "Criado com sucesso !")
        console.log({name, password,confirm})
    }else {
        alert("as senhas não conferem")
    }
}

const button = document.getElementById('registerButton')

button.addEventListener('click', register)