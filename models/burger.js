module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 140]
    }
  },
  devoured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: false
});
return Burger;
};
