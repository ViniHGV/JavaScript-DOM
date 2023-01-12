function register(element){
    const name = element.children.name.value
    const password = element.children.password.value
    const confirm = element.children.confirm.value

    if (password === confirm){
        alert("Usúario " + name + (" Criado com sucesso !"))
        console.log({name, password, confirm})
    }else {
        alert ("As senhas não conferem !\nTente novamente !")
    }
    
}