const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find(); // find seria um comando de busca na base de dados

        return res.json(products);
    },

    async store(req, res) {
        // Criação de registro
        const product = await Product.create(req.body);
        return res.json(product);
    },
};