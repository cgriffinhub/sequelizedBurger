module.exports = function(sequelize, DataTypes)
{

  return sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defualtValue: false
    }
  },{
    timestamps: false,

 tableName: 'burgers',
});

};