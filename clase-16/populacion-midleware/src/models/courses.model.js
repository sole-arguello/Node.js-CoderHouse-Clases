import mongoose from "mongoose";

const coursesColection = 'courses';

const coursesSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    courseStudents: {//cada estudiante va a ser de tipo objeto
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,//es el id del documento que se va a relacionar
                ref: 'students'//nombre de la coleccion que se va a relacionar
            }
        ],
        default: [] //por defecto sea un array vacio
    }
})

export const coursesModel = mongoose.model(coursesColection, coursesSchema);


/*---------ejemplo ---------------*/

// {
//     title: 'React',
//     courseStudents: [{}, {}, {}, ......]
// }