import connectLivereload from 'connect-livereload'
import express from 'express'
import {Cart} from './main/Cart'
import {Item} from './main/Item'

const PORT = 8000
const app = express()
let cart = new Cart()

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
    const apple = new Item('Apple', 50, Number(req.body.quantity))

    cart.addItem(apple)
    cart.setId(cartId)
    console.log(cart)
    res.json({ cart })
})

// app.use(connectLivereload())

export default app
