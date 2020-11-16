const Produto = require('../models/Produto');
const Restaurante = require('../models/Restaurante');

module.exports = {
    async index(req, res) {
        const produtos = await Produto.findAll();

        return res.json(produtos);
    },

    async find(req, res) {
        const { id } = req.params;

        const produto = await Produto.findByPk(id);

        return res.json(produto);
    },

    async store(req, res) {
        const { restaurante_id } = req.params;

        const { nome, preco, imagem, descricao, categoria } = req.body;

        const restaurante = await Restaurante.findByPk(restaurante_id);

        if (!restaurante) {
            return res.status(400).json({ error: 'Restaurante não encontrado' });
        }

        const produto = await Produto.create({ nome, preco, imagem, descricao, categoria, restaurante_id });

        return res.json(produto)
    },
    
    async delete(req, res) {
        const { id } = req.params;

        await Produto.destroy({
            where: {
                id
            }
        });
        return res.json('Deletado')
    },

    async update(req, res) {
        const { id } = req.params;

        const { nome, preco, imagem, descricao, categoria } = req.body;

        await Produto.update({ nome, preco, imagem, descricao, categoria }, {
            where: {
                id
            }
        });

        return res.json({ nome, preco, imagem, descricao, categoria })
    },

}