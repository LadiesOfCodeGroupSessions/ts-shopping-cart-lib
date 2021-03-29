import connectLivereload from 'connect-livereload'
import express from 'express'

const app = express()
const PORT = 8000

app.get('/', (req, res) => res.send('hello'))

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})

app.use(connectLivereload())

export default app;