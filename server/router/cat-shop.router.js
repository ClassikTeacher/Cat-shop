const Router = require('express')
const router = new Router()
const productController = require('../contrrollers/product.controller')

router.post('/product', productController.createProduct)
router.get('/product', productController.getProducts)
router.get('/product/:id', productController.getProduct)
router.put('/product', productController.uprateProduct)
router.delete('/product/:id', productController.deleteProduct)


module.exports = router