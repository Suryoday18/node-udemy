const http = require('http')
const bodyParser = require('body-parser')

const path = require('path')

const express = require('express')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

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

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(5000)
