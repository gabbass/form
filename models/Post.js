const  conecta = require('./conecta')

const Infor = conecta.sequelize.define('infor',{
	nome:{
		type: conecta.Sequelize.STRING
		
	},
	email:{
		type: conecta.Sequelize.STRING
		
	},
	telefone:{
		type: conecta.Sequelize.STRING
		
	},
	problema:{
		type: conecta.Sequelize.STRING
		
	}
})


//Infor.sync({force:true})

module.exports = Infor
