const Product = require('../models/product');


exports.findProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({ message: products });
};

exports.findProduct = (req, res, next) => {

}

exports.createProduct = (req, res, next) => {

}

exports.deleteProduct = (req, res, next) => {

}

