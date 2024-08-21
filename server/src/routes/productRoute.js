const express = require('express');
const router = express.Router();
const {authenticateUser} = require('../middlewares/authentication')
const {checkPermission} = require('../middlewares/rbac');
const {createProduct, findProducts, findProduct, updateProduct, deleteProduct} = require('../controllers/productController');

router.post('/', authenticateUser, checkPermission('create_product'), createProduct);

router.get('/', authenticateUser, checkPermission('read_product'), findProducts);

router.get('/:id', authenticateUser, checkPermission('read_product'), findProduct);

router.patch('/:id', authenticateUser, checkPermission('update_product'), updateProduct);

router.delete('/:id', authenticateUser, checkPermission('delete_product'), deleteProduct);

module.exports = router;