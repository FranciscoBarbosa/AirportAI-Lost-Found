const express = require('express');
const router = express.Router();
const {checkPermission} = require('../middleware/rbac');
const {findProducts, findProduct, createProduct, deleteProduct} = require('../controllers/productController');

router.get('/', findProducts, checkPermission('read_product'));

router.get('/:id', findProduct, checkPermission('read_product'));

router.post('/', createProduct, checkPermission('create_product'));

router.delete('/:id', deleteProduct, checkPermission('delete_product'));

module.exports = router;