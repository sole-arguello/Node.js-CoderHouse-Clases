const profileBtn = document.getElementById('profileBtn')

profileBtn.addEventListener('click', () => {

    //hago la peticion al servidor 
    fetch('/profile',{
        method: 'get',
        headers: {
            "Content-type": "application/json",
        },
        
    }).then(res => {
        return res.json()
    }).then(data => {
        console.log(data)
    })
})