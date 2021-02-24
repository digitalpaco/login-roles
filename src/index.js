import express from 'express'

const app = express()
const port = process.env.PORT || 4000

app.listen(port)
console.log(`server listen on port ${port} http://localhost:${port}`)

