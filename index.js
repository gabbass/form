const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const exphbs  = require('express-handlebars');
var handle = exphbs.create({
    defaultLayout: 'main',
	runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,},

})
	  
const bodyParser = require('body-parser')
const Infor = require('./models/Post')



//Config
	//Templeate Engine
	app.engine('handlebars', handle.engine);
	app.set('view engine','handlebars')
	
	
	//Bodyparser 
	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	
	app.use(express.static('public'));
	app.use('/public/img', express.static(__dirname + '/public/img'));

//Rotas

	//Home
	app.get('/', function(req,res){
	Infor.findAll().then(function(posts){
		//console.log(posts)
		res.render('home', {posts: posts})
			})	
		
	})


	//Sucesso
	app.get('/sucesso', function(req, res){
		res.render('sucesso')
	})
			
	//Formulario
	app.get('/formulario', function(req, res){
		res.render('formulario')
	})
			
	//Post
	app.post('/add', function(req, res){
		
		Infor.create({
		nome: req.body.nome,
		email: req.body.email,
		telefone: req.body.telefone,
		problema: req.body.problema
		}).then(function(){
			res.redirect('/sucesso')
			}).catch(function(erro){
			res.send("Houve um erro"+erro)
			})
		
	})
	
	//Deletar
	app.get('/deletar/:id', function(req, res){
		
		Infor.destroy({where: {'id':req.params.id}}).then(function(){res.send("Postagem deletada com sucesso")}).catch(function(erro){res.send("Isso não aconteceu"+erro)})
				
	})
	

	
//Servidor
app.listen(8081, function(){
	
	console.log("Servidor rodando");
	
	});

	/*Licença das imagens
			**Boas vindas*

					IMPORTANT NOTICE: This license only applies if you downloaded this content as
				an unsubscribed user. If you are a premium user (ie, you pay a subscription)
				you are bound to the license terms described in the accompanying file
				"License premium.txt".

				---------------------

				You must attribute the image to its author:

				In order to use a content or a part of it, you must attribute it to slidesgo / Freepik,
				so we will be able to continue creating new graphic resources every day.


				How to attribute it?

				For websites:

				Please, copy this code on your website to accredit the author:
				<a href="http://www.freepik.com">Designed by slidesgo / Freepik</a>

				For printing:

				Paste this text on the final work so the authorship is known.
				- For example, in the acknowledgements chapter of a book:
				"Designed by slidesgo / Freepik"


				You are free to use this image:

				- For both personal and commercial projects and to modify it.
				- In a website or presentation template or application or as part of your design.

				You are not allowed to:

				- Sub-license, resell or rent it.
				- Include it in any online or offline archive or database.

				The full terms of the license are described in section 7 of the Freepik
				terms of use, available online in the following link:

				http://www.freepik.com/terms_of_use

				The terms described in the above link have precedence over the terms described
				in the present document. In case of disagreement, the Freepik Terms of Use
				will prevail.

	
	
	
	
	
	
	*/