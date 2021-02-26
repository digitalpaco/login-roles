import app from './app'
import './database'
const port = process.env.PORT || 4000

app.listen(port)
console.log(`server listen on port ${port} http://localhost:${port}`)

