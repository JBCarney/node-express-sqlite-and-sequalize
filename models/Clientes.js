var Sequelize = require('sequelize');

var sequelize = module.parent.exports.sequelize;
//var sequelize = new Sequelize('database', '', '',  { storage: 'db/database.sqlite', dialect: 'sqlite'});

var Clientes = sequelize.define('Clientes', {
	id      : { type : Sequelize.INTEGER, primaryKey : true, autoIncrement : true },
	rut		: Sequelize.TEXT,
	nombre_completo      : Sequelize.TEXT,
	direccion       : Sequelize.TEXT
},{
	classMethods: {
      associate: function(models) {
        Clientes.hasMany(models.Telefonos);
     	}
 	 },
	timestamps: false
});

module.exports = Clientes;