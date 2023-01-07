const express = require('express')

const path = require('path')

const router = express.Router()

const rootDir = require('../utils/path')

const products = []

//admin/add-product
router.get('/add-product', (req, res, next) => {
    //res.send('<form action="add-product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>')
    // res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'))
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))

})

// admin/add-product
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')
})

exports.routes = router
exports.products = products