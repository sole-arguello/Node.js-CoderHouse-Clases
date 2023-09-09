import express from 'express'

import { usersRouter } from './routes/users.routes.js'
import { petsRouter } from './routes/pets.routes.js'
//otra forma de hacerlo
import { orgsRouter } from './routes/orgs.routes.js'

const port = 8080
const app = express()


app.use("/api/users", usersRouter)
app.use("/api/pets", petsRouter)

//otra forma de hacerlo
app.use("/api/orgs", orgsRouter)

app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
})