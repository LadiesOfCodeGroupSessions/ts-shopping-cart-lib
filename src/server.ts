import app from './index'

const PORT = 8000

const server = app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})

export default server
