/*Registrador de Tickets de eventos

Crear una clase que permita llevar la gestion completa de usuarios que deseen acceder a dichos eventos
1)Definir la clase TickestManager el cual tendra un arreglo de eventos que iniciara vacio
2)La clase debe contar con una variable privada "precioBaseDeGanancia" la cual añadira un
costo adicional al precio de cada evento
3) Debe contar con metodo "getEventos" el cual  mostrara los eventos guardados
4) Debe contar con el metodo "agreagarEvento" El cual recibira los siguientes parametros:
    nombre, lugar, precio(debera agregarse un 0.15 del valor original), capacidad(50por defecto)
    fecha (hoy por defecto) 
5) El metodo debera crear ademas el campo "id autoincremental" y el campo "participantes" que 
   siempre inciara con un arreglo vacio
   ------------------------------------------
6) Debe contar con un metodo "agregarUsuario" El cual recibira: 
    id del evento(debe existir, agregar validaciones)
    id del ususario
7) El metodo debe evaluar que el evento exista y que el usuario no haya estado registrado previamenete
(validacion de gfecha y capacidad se evitata para no alargar el reto)
8) Si todo esta en orden debe agregar el id del usuario en el arreglo "participantes" de ese evento
9) Debe constar con un metodo 'ponerEventoEnGira" el cual recibira
    id del evento
    nueva localidad
    nueva fecha
10) El metodo debe copiar el evento existente con una nueva localidad nueva fecha nuevo id y sus participantes
vacios (usar spread operator para el resto de las propiedades)

*/

//1)
class TickestManager{
    //2)y4)
    #precioBaseDeGanacia = 0.15
    //1)apartir del constructor creo un arreglo vacio
    constructor(){
        this.eventos = []
    }
    //3)
    getEventos(){
        console.log('Eventos',this.eventos)
    }
    //4)
    agregarEvento(nombre, lugar, precio, capacidad=50, fecha=new Date()){
        //5)
        let newId;
        if(this.eventos.length === 0){
            newId = 1
        }else{
            //this.eventos= tomo el evento
            //[this.eventos.length-1]= total osea la posicion
            //.id = propiedad y le sumo 1
            newId=this.eventos[this.eventos.length-1].id+1
        }
        //4)creo un nuevo objeto
        const neuvoEvento = {
            //5)
            id: newId,
            nombre,
            lugar,
            precio:precio * (1 + this.#precioBaseDeGanacia),
            capacidad,
            fecha,
            participantes:[]//5)
        }
        this.eventos.push(neuvoEvento)
    }
    //6)
    agregarUsuario(idEvento, idUsuario){
        //7)valido si existe
        const evento = this.eventos.find(elem => elem.id === idEvento)
        if(!evento){
            console.log('El evento existe')
        }else{
            //7)validar que ya no alla sido agreagado
            //8)
            evento.participantes.push(idUsuario)
        }
    }
    ponerEventoEnGira(){
        
    }
}

//1)creo un objeto apartir de la clase
const manager1 = new TickestManager()
console.log(manager1)
//3)
manager1.getEventos()
//4)
manager1.agregarEvento('Pelicula de accion', 'cinema 12', 200, 200, new Date('2023-08-15'))
//para obtener todos los eventos
manager1.getEventos()
manager1.agregarEvento('Pelicula de accion', 'cinema 12', 200, undefined, new Date('2023-08-15'))
manager1.getEventos()
//6)
manager1.agregarUsuario(2,100)
manager1.agregarUsuario(2,140)
manager1.getEventos()