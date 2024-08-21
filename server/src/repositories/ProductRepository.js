const Product = require('../models/product');

exports.create = async (productData) => {
    const product = new Product(productData);
    return await product.save();
}

exports.findByMessage = async (text) => {
    return await Product.find({ $text: {$search: text}})
}

exports.findProducts = async (query) => {
    return await Product.find(query);
}

exports.update = async (id, productData) => {
    return await Product.findByIdAndUpdate(id, productData, { new: true });
}

exports.deleteById = async (id) => {
    return await Product.findByIdAndDelete(id);
}