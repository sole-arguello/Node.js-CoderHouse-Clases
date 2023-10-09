import express from 'express';
import { connectDB } from './config/db.Connection.js';
import { studentsModel } from './models/students.model.js';
import { coursesModel } from './models/courses.model.js';


const port = 8080;
const app = express();
//middlewares
app.use(express.json());//porque recibo el body

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
connectDB()


const newStudents = [

    { first_name: "Juan", email: "juanperez@example.com", gender:"Masculino" },

    { first_name: "Maria", email: "mariagarcia@example.com", gender:"Fememino" },

    { first_name: "Pedro", email: "pedromartinez@example.com", gender:"Masculino" },

    { first_name: "Ana", email:"anarodriguez@example.com", gender:"Fememino" },

    { first_name: "Luis", email: "luissanchez@example.com", gender:"Masculino" },

    { first_name: "Isabel", email: "isabelgonzalez@example.com", gender:"Fememino" },

    { first_name: "Carlos", email: "carlosgomez@example.com", gender:"Masculino" },

    { first_name: "Sofia", email: "sofiaperez@example.com", gender:"Fememino" },

    { first_name: "Ramon", email: "ramongarcia@example.com", gender:"Masculino" }

];

const newCourses = [

    {title:"Javascript"},

    {title:"Nodejs"},

    {title:"html"},

    {title:"React"},

];

//rutas
//pruebas -> post localhost:8080/createStudents
app.post('/createStudents', async (req, res) => {
    try {
        //creo los estudiantes
        const result = await studentsModel.create(newStudents);
        res.json({status: 'success', data: result})
    } catch (error) {
        res.json({status: 'error', message: 'No se pudo crear los estudiantes'})
    }
})

// localhost:8080/createCourses
app.post('/createCourses', async (req, res) => {
    try {
        //creo los cursos
        const result = await coursesModel.create(newCourses);
        res.json({status: 'success', data: result})
    } catch (error) {
        res.json({status: 'error', message: 'No se pudo crear los cursos'})
    }
})

// localhost:8080/addStudents
app.put('/addStudents', async (req, res) => {
    try {
        //desestructuro del body
        const {studentId, courseId} = req.body;//como recibo un body necesito el medlawers
        //traigo la info de los cursos
        const course = await coursesModel.findById(courseId);
        //tomo cursos y courseStudents que es la propiedad donde van los estudiantes
        course.courseStudents.push(studentId);
        //le paso el id y donde va a ser guardado
        const result = await coursesModel.findByIdAndUpdate(courseId, course, {new: true});
        //el ultimo parametro de la funcion hace que actualice la informacion
        res.json({status: 'success', data: result})
    } catch (error) {
        res.json({status: 'error', message: error.message})
    }

})

//ruta para obtner la info del curso y los estudiantes asociados al mismo
//localhost:8080/course/:courseId
app.get('/course/:courseId', async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const result = await coursesModel.findById(courseId);
        res.json({status: 'success', data: result})
    } catch (error) {
        res.json({status: 'error', message: error.message})
    }
})

//populacion
//localhost:8080/course-populate/:courseId
app.get('/course-populate/:courseId', async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const result = await coursesModel.findById(courseId).populate('courseStudents');
        res.json({status: 'success', data: result})
    } catch (error) {
        res.json({status: 'error', message: error.message})
    }
})

//populacion middleware
//localhost:8080/course-populate-middleware/:courseId
app.get('/populate-middleware/:courseId', async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const result = await coursesModel.findOne({_id: courseId});
        res.json({status: 'success', data: result})
    } catch (error) {
        res.json({status: 'error', message: error.message})
    }
}) 










