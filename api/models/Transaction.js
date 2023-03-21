const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const TransactionSchema = new Schema({
    name: {type:String, required:true},
    price: {type: Number, required:true},
    description: {type:String, required:true},
    datetime: {type:Date, required:true},
})

const TransactioModel = model('Transaction', TransactionSchema)
module.exports = TransactioModel