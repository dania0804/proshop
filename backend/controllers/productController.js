import Product  from '../models/productModel.js';
import mongoose from 'mongoose';

//get all products
const getProducts = async(req, res)=>{
    const products = await Product.find({});
    res.status(200).json(products);
};

//get single product
const getProduct= async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such product'})
    } 

    const product = await Product.findById(id)
    if (!product){
        return  res.status(400).json({error: 'No such product'})
    }
    res.status(200).json(product)

}

//delete product
const deleteProduct = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such product'})
    } 

    const product = await Product.findOneAndDelete({_id: id})
    if (!product){
        return  res.status(400).json({error: 'No such product'})
    }
    res.status(200).json(product)

}



export {
    getProducts,
    getProduct,
    deleteProduct
    
};