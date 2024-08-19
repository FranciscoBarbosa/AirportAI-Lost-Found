const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }, 
    color: {
        type: String,//enum
        required: true
    },
    lostTime: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;  