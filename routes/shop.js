const express = require('express')

const path = require('path')
const rootDir = require('../utils/path')
const adminData = require('./admin')
const productController = require('../controller/products')
const router = express.Router()

router.get('/', productController.getProducts)

module.exports = router