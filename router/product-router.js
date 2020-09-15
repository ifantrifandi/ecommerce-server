const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/product-controller.js')
const authorization = require('../middlewares/authorize.js')

router.post('/' , authorization ,ProductController.postProduct)
router.put('/:id' , authorization ,ProductController.putProduct)
router.delete('/:id' , authorization ,ProductController.deleteProduct)

module.exports = router