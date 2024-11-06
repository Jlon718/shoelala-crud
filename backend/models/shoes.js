const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const shoesSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            index: true,
            lowercase: true
        },
        description: {
            type: {},
            required: true,
            min: 20,
            max: 2000000
        },
        brand: {
            type: String,
            default: 'Admin'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Shoes', shoesSchema);