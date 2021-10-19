'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      produto.belongsToMany(models.compra,{
        through: 'ItemCompra', as: 'prod'
      });
      produto.hasMany(models.ItemCompra, {foreignKey: 'ServicoId', as: 'item_servicos'});
    }
  };
  produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'produto',
  });
  return produto;
};