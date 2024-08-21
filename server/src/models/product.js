const mongoose = require('mongoose');

const productSchema = mongoose.Schema({ // todo: add char limits to the inputs
    type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }, 
    color: {
        type: String, // todo: change to enum
        required: true
    },
    description:{
        type: String,
        required: false
    },
    lostTime: {
        type: Date,
        required: true
    }
});

productSchema.index({ name: 'text', type: 'text', brand: 'text', color: 'text', description: 'text' });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;  