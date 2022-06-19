const ProductModel = require('../models/product-model')

class ProductController {
    async createProduct(req, res){
        try{
            const {nameProduct, flavor, bundlDescription, weight, info, quantity} = req.body
            const newProduct = await ProductModel.create({nameProduct, flavor, bundlDescription, weight, info, quantity})
            res.header("Access-Control-Allow-Origin", "*")
            res.json(newProduct)
        }
        catch(e){
            console.log(e)
        }
       
    }

    async getProducts(req, res){
        try{
            const newProduct = await ProductModel.find()
            res.header("Access-Control-Allow-Origin", "*")
            res.json(newProduct) 
        }
        catch(e){
            console.log(e)
        }
        
    }

    async getProduct(req, res){
        try{
            const {id} = req.params
            const newProduct = await ProductModel.findById(id)
            res.header("Access-Control-Allow-Origin", "*")
            res.json(newProduct)   
        }
        catch(e){
            console.log(e)
        }
        
    }

    async uprateProduct(req, res){
        try{
            const product = req.body
            
            if(!product._id){
                res.status(400).json('undefinded id')
            }
            const updateProduct = await ProductModel.findByIdAndUpdate(product._id, product, {new: true})
            res.header("Access-Control-Allow-Origin", "*")
            res.json(updateProduct)
        }
        catch(e){
            console.log(e)
        }
        
    }

    async deleteProduct(req, res){
        try{
            const id =req.params
            if(id){
                res.status(400).json('undefinded id')
            }
            const deleteProduct = await ProductModel.findByIdAndDelete(id)
            res.header("Access-Control-Allow-Origin", "*")
            res.json(deleteProduct)
        }
        catch(e){
            console.log(e)
        }
        
    }
}

module.exports = new ProductController()