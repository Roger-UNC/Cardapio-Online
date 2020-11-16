const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            preco: DataTypes.STRING,
            imagem: DataTypes.STRING,
            descricao: DataTypes.STRING,
            categoria: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Restaurante, { foreignKey: 'restaurante_id', as: 'restaurante' });
    }
}

module.exports = Produto;