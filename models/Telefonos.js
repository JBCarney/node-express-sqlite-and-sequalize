var Sequelize = require('sequelize');

var sequelize = module.parent.exports.sequelize;
//var sequelize = new Sequelize('database', '', '',  { storage: 'db/database.sqlite', dialect: 'sqlite'});

var Telefonos = sequelize.define('Telefonos', {
	id      : { type : Sequelize.INTEGER, primaryKey : true, autoIncrement : true },
	numero		: Sequelize.INTEGER,
	ClienteId : Sequelize.INTEGER
},{
	 classMethods: {
      associate: function(models) {
        Telefonos.belongsTo(models.Clientes, {foreignKey: ClienteId});
      }
    },
	timestamps: false
});

module.exports = Telefonos;