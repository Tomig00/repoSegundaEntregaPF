const mongoose = require('mongoose')

const esquemaProducto = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    thumnail: {type: String, require: true},
    stock: {type: Number, require: true},
    idP: {type: Number, require: true},
    time: {type: String, require: true}
})

module.exports = mongoose.model('productos', esquemaProducto)