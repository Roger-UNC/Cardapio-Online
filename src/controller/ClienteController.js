const Cliente = require('../models/Cliente');

module.exports = {
    async index(req, res) {
        const clientes = await Cliente.findAll();

        return res.json(clientes);
    },

    async find(req, res) {
        const { id } = req.params;

        const cliente = await Cliente.findByPk(id);

        return res.json(cliente);
    },

    async store(req, res) {
        const { nome, foto, email, senha } = req.body;

        const cliente = await Cliente.create({ nome, foto, email, senha });

        return res.json(cliente)
    },

    async delete(req, res) {
        const { id } = req.params;

        await Cliente.destroy({
            where: {
                id
            }
        });
        return res.json('Deletado')
    },

    async update(req, res) {
        const { id } = req.params;

        const { nome, foto, email, senha } = req.body;

        await Cliente.update({ nome, foto, email, senha }, {
            where: {
                id
            }
        });

        return res.json({ nome, foto, email })
    },

}