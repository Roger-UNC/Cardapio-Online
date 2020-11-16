const Reserva = require('../models/Reserva');
const Restaurante = require('../models/Restaurante');
const Cliente = require('../models/Cliente');

module.exports = {
    async index(req, res) {
        const reservas = await Reserva.findAll();

        return res.json(reservas);
    },

    async find(req, res) {
        const { id } = req.params;

        const reserva = await Reserva.findByPk(id);

        return res.json(reserva);
    },

    async store(req, res) {
        const { restaurante_id } = req.params;

        const { data, observacao, lugares, cliente_id } = req.body;

        const restaurante = await Restaurante.findByPk(restaurante_id);

        const cliente = await Cliente.findByPk(cliente_id);

        if (!restaurante || !cliente) {
            return res.status(400).json({ error: 'Restaurante ou cliente não encontrado' });
        }

        const reserva = await Reserva.create({ data, observacao, lugares, cliente_id, restaurante_id });

        return res.json(reserva)
    },
    
    async delete(req, res) {
        const { id } = req.params;

        await Reserva.destroy({
            where: {
                id
            }
        });
        return res.json('Deletado')
    },

    async update(req, res) {
        const { id } = req.params;

        const { data, observacao, lugares, cliente_id } = req.body;

        await Reserva.update({ data, observacao, lugares, cliente_id }, {
            where: {
                id
            }
        });

        return res.json({ data, observacao, lugares, cliente_id })
    },

}