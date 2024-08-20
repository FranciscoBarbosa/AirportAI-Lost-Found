const Product = require('../models/product');

exports.findById = async (id) => {
    return await Product.findById(id);
}

exports.findAll = async () => {
    return await Product.find();
}

exports.create = async (productData) => {
    const product = new Product(productData);
    return await product.save();
}

exports.update = async (id, productData) => {
    return await Product.findByIdAndUpdate(id, productData, { new: true });
}

exports.deleteById = async (id) => {
    return await Product.findByIdAndDelete(id);
}

