function register(element){
    const name = element.children.name.value
    const password = element.children.password.value
    const confirm = element.children.confirm.value

    console.log({name, password, confirm})
}