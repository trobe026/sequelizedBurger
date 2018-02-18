module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("customers", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 40],
          msg: "Name must be at least 3 characters long!"
        }
      }
    }
  });
  Customer.associate = function(models) {
    Customer.belongsTo(models.burgers, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  // Customer.create({
  //   customer_name: "Frank",
  //   BurgerId: 1
  // }).then(function(results) {
  //   // res.json(results);
  // });
  return Customer;
};
