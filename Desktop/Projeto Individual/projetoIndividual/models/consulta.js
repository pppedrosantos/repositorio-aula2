'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let consulta = sequelize.define('consulta',{
		idConsulta: {
			field: 'idConsulta',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefone: {
			field: 'telefone',
			type: DataTypes.STRING,
			allowNull: false
		},
		destino: {
			field: 'destino',
			type: DataTypes.STRING,
			allowNull: false
		},
        fkUsuario: {
			field: 'fkUsuario',
			type: DataTypes.INTEGER,
			allowNull: false,
        } 
	}, 
	{
		tableName: 'consulta', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return consulta;
};