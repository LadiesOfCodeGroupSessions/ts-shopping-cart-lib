import connectLivereload from 'connect-livereload'
import express from 'express'
import {Cart} from './main/Cart'
import {Item} from './main/Item'

const PORT = 8000
const app = express()

let bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('hello'))

app.get('/items', (req, res) => {

    const items = [{name: 'apples'}]

    res.json({ items })
})

app.put('/cart', (req, res) => {
    const cartId = req.body.id
    const cart = new Cart()

    const apple = new Item('Apple', 50, Number(req.body.quantity))

    cart.addItem(apple)
    cart.setId(cartId)
    res.json({ cart })
})

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})

app.use(connectLivereload())

export default app
