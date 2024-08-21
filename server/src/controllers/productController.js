const Product = require('../models/product');
const {findProducts, findById, findByMessage, create, update, deleteById} = require('../repositories/ProductRepository');

exports.createProduct = async (req, res,) => {
    try{
        validateRequestBody(req);
        const product = await create(req.body)
        return res.status(201).json({ message: product });
    }
    catch(error){
        if(error.status === 400){
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Error creating product', error });
    }
}

validateRequestBody = (req) => {
    const {type, brand, color, lostTime} = req.body;

    if (!type || !brand || !color || !lostTime) {
        const error = new Error('Missing mandatory fields');
        error.status = 400;
        throw error;
    }

    if (isNaN(Date.parse(lostTime))) {
        const error = new Error('Invalid Date Format');
        error.status = 400;
        throw error;    
    }
}

exports.findProducts = async (req, res) => { //Todo: add pagination 
    try{
        const {minLostTime, maxLostTime, message} = req.query;
        const query = extractQuery(req);
        let products;
        if(message){
            products = await findByMessage(message);
        }
        else{
            const query = extractQuery(req);
            products = await findProducts(query);
        }
        if(!products || products.length == 0){
            return res.status(200).json({ message: "No Products found" });
        }
        
        const filteredProducts = filterProductsByLostTime(products, minLostTime, maxLostTime);
        
        return res.status(200).json({ message: filteredProducts });
    }
    catch(error){
        res.status(500).json({ message: 'Error finding product', error });
    }
};

extractQuery = (req) => {
    const {type, brand, color} = req.query;
    let query = {}
    if(type){
        query.type = type;
    }
    if(brand){
        query.brand = brand;
    }
    if(color){
        query.color = color;
    }
    return query;
}

filterProductsByLostTime = (products, minLostTime, maxLostTime) => {
    let filteredProducts = products;
    if(minLostTime){
        filteredProducts = filteredProducts.filter(product => new Date(product.lostTime) >= new Date(minLostTime));
    }
    if(maxLostTime){
        filteredProducts = filteredProducts.filter(product => new Date(product.lostTime) <= new Date(maxLostTime));
    }
    return filteredProducts;
}


exports.findProduct = async (req, res,) => {
    try{
        const product = await findById(req.params.id);
        if(!product){
            return res.status(404).json({message: "Product not found" });
        }
        return res.status(200).json({message: product });
    }
    catch(error){
        res.status(500).json({ message: 'Error finding product', error });
    }

}

exports.updateProduct = async (req, res) => {
    try{
        const product = await update(req.body);
        if(!product){
            return res.status(200).json({ message: "Product you are trying to update doesn't exist" });
        }
        return res.status(200).json({ message: product });
    }
    catch(error){
        res.status(500).json({ message: 'Error updating product', error });
    }
    
}

exports.deleteProduct = async (req, res) => {
    try{
        const deletedProduct = await deleteById(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
          }
        return res.status(200).json({ message: 'Product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
    
}



