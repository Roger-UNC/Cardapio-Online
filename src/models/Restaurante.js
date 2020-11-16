const { Model, DataTypes } = require('sequelize');

class Restaurante extends Model {
    static init (sequelize){
        super.init({
            nome: DataTypes.STRING,
            telefone: DataTypes.STRING,
            endereco: DataTypes.STRING,
            descricao: DataTypes.STRING,
            imagem: DataTypes.STRING,
            categoria: DataTypes.STRING,
            celular: DataTypes.STRING,
            redes: DataTypes.STRING,
            horario: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    

 }

module.exports = Restaurante;