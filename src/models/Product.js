const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
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

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);