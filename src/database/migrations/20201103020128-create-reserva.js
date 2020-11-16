'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('reservas', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lugares: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'clientes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

    await queryInterface.dropTable('reservas');
  }
};
