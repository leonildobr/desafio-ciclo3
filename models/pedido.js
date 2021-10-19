'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pedido.belongsTo(models.Cliente, {foreignKey: 'Clienteid', as: 'clientes'});
      Pedido.belongsToMany(models.Servico,{
        foreignKey: 'Servicoid',
        through: 'ItemPedido', as: 'servicos_ped'
      });
      Pedido.hasMany(models.itemPedido, {foreignKey: 'pedidoid', as: 'item_pedido'});
    }
  };
  Pedido.init({
    dataPedido: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};