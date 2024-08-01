const mongoose = require('mongoose');
const { Schema } = mongoose;

const priceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now, // 기본값
    },
})

module.exports = mongoose.model('Price', priceSchema);