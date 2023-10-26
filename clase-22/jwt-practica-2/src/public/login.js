const loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', (event) => {
    event.preventDefault()//evita que refresque la pagina antes de que envie la peticion
    //console.log(event.target.name.value );

    const info = {
        name: event.target.name.value,
        email: event.target.email.value
    }
    //envio la peticion al servidor 
    fetch('/login', {
        method: 'POST',
        headers: {//recibo la informacion
            'Content-type': 'application/json'
        },
        body: JSON.stringify(info)//envio la informacion
    }).then(res => {
        return res.json()

    }).then(data => {
        console.log(data)
        //guardo el token en local storage
        localStorage.setItem('token', data.accessToken)
    })


})