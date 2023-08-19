let people = [
    {id:1, first_name:'Luz', last_name:'Escalante', age:25, gener: 'F'},
    {id:2, first_name:'Bruno', last_name:'Guerra', age:18, gener: 'M'},
    {id:3, first_name:'Marisol', last_name:'Cadena', age:23, gener: 'F'}
]

let person = people.find(p => {
    let test;
    test = p.id === 3;
    return test
})
 console.log(person)