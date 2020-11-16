const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            foto: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Cliente;