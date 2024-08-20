const Product = require('../models/product');
const {findAll, findById, create, update, deleteById} = require('../repositories/ProductRepository');

exports.createProduct = async (req, res,) => {
    const product = await create(req.body)
    res.status(201).json({ message: product });
}

exports.findProducts = async (req, res) => {
    const products = await findAll();
    res.status(200).json({ message: products });
};

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
        await deleteById(req.body);
        return res.status(204);
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
    
}



