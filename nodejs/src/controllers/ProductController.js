const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page } = req.query; // parametros get no req.query
        const products = await Product.paginate({/* filtros/clausulas wheres */}, {page , limit: 10}); // find seria um comando de busca na base de dados

        return res.json(products);
    },

    async store(req, res) {
        // Criação de registro
        const product = await Product.create(req.body);
        return res.json(product);
    },
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    async update(req, res) {
        // new: true para retornar o produto atualizado
        // se new: false vai retornar o valor antigo
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.json(product);

    },
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },
};