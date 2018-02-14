module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 140],
        msg: "Burger must be at least 3 characters long!"
      }
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
