import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Thing extends Model {}

  Thing.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'thing',
    sequelize
  })

  return Thing
}
