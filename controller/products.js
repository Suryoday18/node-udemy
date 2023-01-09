const path = require('path')
const rootDir = require('../utils/path')
const Products = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    //res.send('<form action="add-product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>')
    // res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'))
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
}

// const products = []

exports.postAddProduct = (req, res, next) => {
    // products.push({title: req.body.title})
    const product = new Products(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    // const products = adminData.products
    const products = Products.fetchAll((products) => {
        res.render('shop',{ 
            prods: products, 
            docTitle: 'Shop',
            path: '/',
            hasProduct: products.length,
            activeShop: true,
            productCss: true
            })
    })
    
    // res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'))
}