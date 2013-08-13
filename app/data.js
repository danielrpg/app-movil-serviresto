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
			sql.executeSql('CREATE TABLE IF NOT EXISTS servicios(id integer primary key autoincrement, id_servicio int, codigo_servicio text, nombre_servicio text)', [], insertCorrecto, insertError);
			sql.executeSql('CREATE TABLE IF NOT EXISTS productos(id integer primary key autoincrement, id_producto int, id_servicio int, nombre_producto text, detalle_producto text, precio_producto)', [], insertCorrecto, insertError);
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
		$.each(servicios.services, function(index, servi){
			db.transaction(function (sql){
				sql.executeSql("INSERT INTO servicios(id_servicio, codigo_servicio, nombre_servicio)VALUES(?,?,?)",[servi.id_servicio, servi.codigo_servicio, servi.nombre_servicio],insertCorrecto,insertError);
			});
		});
		 
	};

	/** Metodo que lista los servicios desde la base de datos**/
	var getListaServicios = function(){
		db.transaction(function(sql){
			sql.executeSql('SELECT * FROM servicios', [], function (sql, results) {
				var len = results.rows.length, i;
				var json_clientes ="";
				var data = [];
				for (i = 0; i < len; i++){
      				var servicio = {"id_servicio":results.rows.item(i).id_servicio,"codigo_servicio":results.rows.item(i).codigo_servicio, "nombre_servicio":results.rows.item(i).nombre_servicio};
      				data.push(servicio);
   				}
   				json_servicios=JSON.stringify({'servicios':data});
   				app.Views.showListaServicios($.parseJSON(json_servicios));
			}, insertError);
		});
	};
	/** Este es el metodo que carga los productos en la base de datos web **/
	var cargarProductosDB = function(productos){
		console.dir(productos);
		$.each(productos.productos, function(index, producto){
			db.transaction(function (sql){
				sql.executeSql("INSERT INTO productos(id_producto, id_servicio, nombre_producto, detalle_producto, precio_producto)VALUES(?,?,?,?,?)",[producto.id_articulo, producto.id_servicio, producto.nombre_servicio, producto.detalle_servicio, producto.precio_venta_articulo],insertCorrecto,insertError);
			});
		});
	};

	/** Metodo que se encarga de listar los productos x servicio **/
	var listarProductoXServicio = function(){
		db.transaction(function(sql){
			sql.executeSql('SELECT * FROM servicios', [], function (sql, results) {
				var len = results.rows.length, i;
				var json_clientes ="";
				var data = [];
				for (i = 0; i < len; i++){
      				var servicio = {"id_servicio":results.rows.item(i).id_servicio,"codigo_servicio":results.rows.item(i).codigo_servicio, "nombre_servicio":results.rows.item(i).nombre_servicio};
      				data.push(servicio);
   				}
   				json_servicios=JSON.stringify({'servicios':data});
   				app.Views.showListaServicios($.parseJSON(json_servicios));
			}, insertError);
		});	
	};
	/** Este es el metodo cuando se a ejecutado la consulta de manera correcta **/
	var insertCorrecto = function(){
         
	};
	/** Este es el metodo cuando se a ejecutado la consulta de manera correcta **/
	var insertError = function(error){
		console.log(error);
	};
	return{
		crearDataBase : createDataBase,
		insertUserDB : insertUsuario,
		cargarServiciosDB : cargarServiciosBaseDatos,
		getListaServicios : getListaServicios,
		cargarProductosDB : cargarProductosDB,
		listarProductoXServicio : listarProductoXServicio
	}
})(Lungo, App);