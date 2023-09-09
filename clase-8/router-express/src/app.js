import express from 'express'

import { usersRouter } from './routes/users.routes.js'

const port = 8080
const app = express()


app.use("/api/users", usersRouter)


app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
})