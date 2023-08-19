const persons = [
    {id:1, name:'pepe'},
    {id:2, name:'juan'},
    {id:3, name:'lucas'}
]

console.log(typeof persons)
console.log(Array.isArray(persons))


const person = persons.find( (elem) => {
    if(elem.id === 2){
        return elem
    }
})
console.log(person)

const numbers = [1,2,3,4]
const number = numbers.find( (elem) => {
    if(elem === 3){
        return elem
    }
})
console.log(number)