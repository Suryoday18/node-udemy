const http = require('http')
const bodyParser = require('body-parser')

const path = require('path')

const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')
app.use(bodyParser.urlencoded({extended: false}))

// const adminRoutes = require('./routes/admin')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controller/error')

// app.use('/', (req, res, next) => {
//     console.log('This always called');
//     next()
// })

// app.use('/add-product', (req, res, next) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>')
// })

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/')
// })
app.use('/admin', adminRoutes)
app.use(shopRoutes)

// app.use('/',(req, res, next) => {
//     res.send('<h2>Hello bodyparser</h2>') 
// })

app.use(express.static(path.join(__dirname, 'public')))

app.use(errorController.get404)


app.listen(5000)
