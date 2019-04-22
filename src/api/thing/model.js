export default (sequelize, DataTypes) => {
  return sequelize.define('Thing', {
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
    tableName: 'things'
  })
}
