const { Model, DataTypes } = require('sequelize');

class Reserva extends Model {
    static init(sequelize) {
        super.init({
            data: DataTypes.STRING,
            observacao: DataTypes.STRING,
            lugares: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Restaurante, { foreignKey: 'restaurante_id', as: 'restaurante_reserva' });
        this.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'cliente' });
    }
    
}

module.exports = Reserva;