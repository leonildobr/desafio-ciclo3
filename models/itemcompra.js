'use strict';
const {
  Model
} = require('sequelize');
const itempedido = require('./itempedido');
module.exports = (sequelize, DataTypes) => {
  class ItemCompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemCompra.belongsTo(models.compra, {foreignKey: 'CompraId', as: 'compra'});
      ItemCompra.belongsTo(models.produto, {foreignKey: 'ProdutoId', as: 'produto'});
    }
  };
  ItemCompra.init({
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'ItemCompra',
  });
  return ItemCompra;
};