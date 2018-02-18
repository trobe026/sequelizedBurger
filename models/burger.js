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

Burger.associate = function(models) {
  Burger.hasMany(models.customers, {
    onDelete: "cascade"
  });
};


// Burger.create({
//   burger_name: "The Cheeseburger"
// }).then(function(results) {
//   // res.json(results);
// });
return Burger;
};
