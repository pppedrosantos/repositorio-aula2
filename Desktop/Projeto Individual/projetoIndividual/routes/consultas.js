var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var consulta = require('../models').consulta;



router.post('/consultar/:idUsuario', function(req, res, next) {
	console.log('Criando um usuário');

	let idUsuario = req.params.idUsuario;
	
	consulta.create({
		email: req.body.email,
		telefone: req.body.telefone,
		destino: req.body.destino,
		fkUsuario: idUsuario
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
		alert(resultado)
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

router.get('/:idUsuario', function(req, res, next) {
	console.log('Recuperando todas as publicações');

	var idUsuario = req.params.idUsuario;

    let instrucaoSql = `SELECT 
    usuario.nome,
    destino
    FROM consulta
    INNER JOIN usuario
    ON fkUsuario = id where fkUsuario = ${idUsuario}`;
	
	sequelize.query(instrucaoSql, {
		model: consulta,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;

