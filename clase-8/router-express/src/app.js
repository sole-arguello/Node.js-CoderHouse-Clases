import express from 'express'

const port = 8080
const app = express()





app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
})