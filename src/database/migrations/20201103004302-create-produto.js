'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('produtos', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preco: {
        type: Sequelize.STRING,
        allowNull: true
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: true
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: true
      },
      restaurante_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'restaurantes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('produtos');
  }
};
