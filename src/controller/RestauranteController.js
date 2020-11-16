const Restaurante = require('../models/Restaurante');

module.exports = {
    async index(req, res) {
        const restaurantes = await Restaurante.findAll();

        return res.json(restaurantes);
    },

    async find(req, res) {
        const { id } = req.params;

        const restaurante = await Restaurante.findByPk(id);

        return res.json(restaurante);
    },

    async store(req, res) {
        const { nome, telefone, endereco, descricao, imagem, categoria, celular, redes, horario, email, senha } = req.body;

        const restaurante = await Restaurante.create({ nome, telefone, endereco, descricao, imagem, categoria, celular, redes, horario, email, senha });

        return res.json(restaurante)
    },

    async delete(req, res) {
        const { id } = req.params;

        await Restaurante.destroy({
            where: {
                id
            }
        });
        return res.json('Deletado')
    },

    async update(req, res) {
        const { id } = req.params;

        const { nome, telefone, endereco, descricao, imagem, categoria, celular, redes, horario, email, senha } = req.body;

        await Restaurante.update({ nome, telefone, endereco, descricao, imagem, categoria, celular, redes, horario, email, senha }, {
            where: {
                id
            }
        });

        return res.json({ nome, telefone, endereco, descricao, imagem, categoria, celular, redes, horario, email })
    },

}