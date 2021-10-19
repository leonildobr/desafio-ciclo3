'use strict';
const {
  Model, ForeignKeyConstraintError
} = require('sequelize');
const pedido = require('./pedido');
module.exports = (sequelize, DataTypes) => {
  class compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      compra.belongsTo(models.Cliente, {ForeignKey: 'ClienteId', as: 'clientes'});
      compra.belongsToMany(models.produto,{
        foreignKey: 'ServicoId',
        through: 'ItemCompra', as: 'servicos_comp'
      });
      compra,this.hasMany(models.ItemCompra, {foreignkey: 'pedidoId', as: 'item_pedido'});
    }
  };
  compra.init({
    data: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'compra',
  });
  return compra;
};