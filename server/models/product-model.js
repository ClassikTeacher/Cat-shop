const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    nameProduct: {type: String, required: true},
    flavor: {type: String, required: true},
    bundlDescription: {type: Array, required: true},
    weight: {type: String, required: true},
    info: {type: String, required: true},
    quantity: {type: Number, required: true},
})

module.exports = model('Product', ProductSchema)