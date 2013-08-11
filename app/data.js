App.Data =(function(lng, app, undefined){
	var db;
	/** Este es el metod que permite crear la base de datos **/ 
	var createDataBase = function(){
		 db = openDatabase('mivil-resto', '1.0', 'Web App Movil Resto', 5 * 1024 * 1024);	
		 crearTablasBaseDatos();
	};
	/** Esta es la funcion que crea las tablas en la base de datos **/
	var crearTablasBaseDatos = function(){
		db.transaction(function (sql){
			sql.executeSql('CREATE TABLE IF NOT EXISTS usuarios(id integer primary key autoincrement, nombre text, apellido_pat text, email text, ci_usr text)', [], insertCorrecto, insertError);
			sql.executeSql('CREATE TABLE IF NOT EXISTS usuarios(id integer primary key autoincrement, nombre text, apellido_pat text, email text, ci_usr text)', [], insertCorrecto, insertError);
		});
	}
	/** insertUserDB es un metodo encargado de registrar al usuario en la base de datos **/
	var insertUsuario = function(nombre, apellido, email, ci){
		db.transaction(function (sql){
			sql.executeSql("INSERT INTO usuarios(nombre, apellido_pat,email,ci_usr)VALUES(?,?,?,?)", [nombre, apellido, email, ci], insertCorrecto, insertError);
		});
	};
	/** esta es la consulta en la que se inserta en la base de datos al usuario */
	var cargarServiciosBaseDatos=function(servicios){
		$.each(clientes.clientes, function(index, cliente){
			db.transaction(function (sql){
				sql.executeSql("INSERT INTO cliente(codigo_unico, nombre, ap_pat,ap_mat,empresa_trab,dir_cli,contacto,cargo,departamento,telf, interno, cel, correo, nit, razon)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[cliente.vent_cli_cod_unico, cliente.vent_cli_nombre, cliente.vent_cli_apellido_pat, cliente.vent_cli_apellido_mat, cliente.vent_cli_empresa_trab,cliente.vent_cli_direccion, cliente.vent_cli_persona_cont, cliente.vent_cli_cargo, cliente.vent_cli_departamento_cargo, cliente.vent_cli_telefono, cliente.vent_cli_interno, cliente.vent_cli_celular, cliente.vent_cli_correo, cliente.vent_cli_nit, cliente.vent_cli_razon_fact],insertCorrecto,insertError);
			});
		});
		 
	};
	/** Este es el metodo cuando se a ejecutado la consulta de manera correcta **/
	var insertCorrecto = function(){

	};
	/** Este es el metodo cuando se a ejecutado la consulta de manera correcta **/
	var insertError = function(error){
		console.log(error);
	}
	return{
		crearDataBase : createDataBase,
		insertUserDB : insertUsuario,
		cargarServiciosDB : cargarServiciosBaseDatos
	}
})(Lungo, App);