var url = "http://localhost/auto/";
App.Services=(function(lng, app, undefined){
	/** Login al usuario del sistema */
	var loginUsuarioServo=function(correo, ci){
		var data = {action:'movil',tp:'login', correo:correo, ci:ci};
		lng.Service.get(url, data, responseLogin, "json");
	};
	var responseLogin = function(response){
		//console.dir(response);
		if(response.completo){
			lng.Router.section("principal");
			app.Data.crearDataBase();
			app.Data.insertUserDB(response.nombre_cliente, response.apellido_cliente, response.email_cliente, response.ci_cliente);
			listarServicios();
			cargarProductos();
		}else{
			lng.Notification.error(
                "Error",                      //Title
                "El usuario no esta en nuestro sistema",     //Description
                "remove",                     //Icon
                7,                            //Time on screen
                afterNotification             //Callback function
            );
		}
	};
	/** Esta es la lista de los servicios */
	var listarServicios = function (){
		var data = {action:'movil',tp:'listaServicios'};
		lng.Service.get(url, data, responseListaServicios, "json");	
	};
	/** Esta es la respuesta de la lista de Servicios **/
	var responseListaServicios = function(response){
		app.Data.cargarServiciosDB(response);
		var servicios = app.Data.getListaServicios();
		app.Views.listaServicios();
	};
	/** Esta es la funcion para cargar los productos desde la base de datos */
	var cargarProductos = function (){
		var data = {action:'movil', tp:'listaProductos'};
		lng.Service.get(url,data, productosCompletos, 'json');
	};
	/** Metodo que se ejecuta cuando se ha completado de leer desde el servicio */
	var productosCompletos = function(response){
		//console.log(response);
	};
	var afterNotification = function(){
		console.log('No existe el usuario');
		lng.Notification.hide();
	};
	return {
		loginUsuario: loginUsuarioServo,
		listaServicios: listarServicios
	}
})(Lungo, App);