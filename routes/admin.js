const express = require('express')


const router = express.Router()



const productsController = require('../controller/products')

//admin/add-product
router.get('/add-product', productsController.getAddProduct)

// admin/add-product
router.post('/add-product', productsController.postAddProduct)

module.exports = router