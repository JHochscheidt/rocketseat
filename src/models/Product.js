const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    // campos a salvar no DB
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createAt: { // guarda a criacao de cada produto
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Product', ProductSchema);