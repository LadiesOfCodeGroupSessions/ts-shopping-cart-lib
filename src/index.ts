import connectLivereload from 'connect-livereload'
import express from 'express'
import livereload from 'livereload'
import path from 'path'

const app = express()
const PORT = 8000

app.get('/', (req, res) => res.send('Hi, this is our server.....'))

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})

app.use(connectLivereload())