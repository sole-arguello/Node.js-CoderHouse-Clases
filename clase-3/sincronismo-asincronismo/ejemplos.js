//dos personas, el primero hace una orden con una ensalada, una pasta y
//un jugo, y la segunda persona hace su orden con una ensalada, una carne
// y un jugo

// ensalada = 15 min
// pasta = 30 min
// carne = 50 min
// jugo = 10 min

//sincrono 

console.log('ensalada lista')// 15
console.log('pasta lista') //30
console.log('jugo listo')//10
console.log('ensalada lista') //15
console.log('carne lista') //50
console.log('jugo listo')//10 -> 130 min para obtener el 2* jugo 

//asincrona
setTimeout(() =>{
    console.log('1 Ensalada lista')
}, 1500)

setTimeout(() =>{
    console.log('1 pasta lista')
}, 3000)
setTimeout(() =>{
    console.log('1 jugo listo')
}, 1000)
setTimeout(() =>{
    console.log('2 ensalada lista')
}, 1500)
setTimeout(() =>{
    console.log('2 carne lista')
}, 5000)
setTimeout(() =>{
    console.log('2 jugo listo')
}, 1000)

setTimeout(() =>{
    console.log('1 ensalda lista')
    setTimeout(() =>{
        console.log('1 pasta lista')
        setTimeout(() =>{
            console.log('1 jugo listo')
            setTimeout(() =>{
                console.log('2 ensalada lista')
                setTimeout(() =>{
                    console.log('2 carne lista')
                    setTimeout(() =>{
                        console.log('2 jugo listo') 
                    }, 5000)
                }, 1500)
            }, 2000)
        }, 1000)
    }, 3000)
}, 1500)

