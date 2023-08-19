console.log('--------------Metodos ---------------')
//objeto
const cursosUsuarios ={
    //key: value
    pepe: 'Javascript',
    maria: 'Html',
    Daniel: 'Node',
    pablo: 'css'
}

console.log('--------------Object.entries ------------------')

const parLlaveValor = Object.entries(cursosUsuarios)
console.log(parLlaveValor)//output: [ [propiedad:valor], ['pepe','javascript' ], []]

console.log('--------------Object.kays ------------------')
const propiedadesObjeto = Object.keys(cursosUsuarios)
console.log(propiedadesObjeto)// output: ['pepe','maria','daniel','pablo']

console.log('--------------Object.values ------------------')
const caloresObjeto = Object.values(cursosUsuarios)
console.log(caloresObjeto)// output: ['javascrit','html','node','css']
