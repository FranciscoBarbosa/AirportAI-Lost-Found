const express = require('express');
const router = express.Router();
const {checkPermission} = require('../middlewares/rbac');
const {createProduct, findProducts, findProduct, updateProduct, deleteProduct} = require('../controllers/productController');

router.post('/', createProduct, checkPermission('create_product'));

router.get('/', findProducts, checkPermission('read_product'));

router.get('/:id', findProduct, checkPermission('read_product'));

router.patch('/:id', updateProduct, checkPermission('update_product'));

router.delete('/:id', deleteProduct, checkPermission('delete_product'));

module.exports = router;