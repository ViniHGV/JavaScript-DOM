const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev){
    ev.preventDefault()
    const name = document.querySelector('input[name="name"]').value
    const email = document.querySelector('input[name="email"]').value
    const password = document.querySelector('input[name="password"]').value

    console.log({name,email,password})
})