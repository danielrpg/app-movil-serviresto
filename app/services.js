var url = "http://localhost/auto/";
App.Services=(function(lng, app, undefined){
	/** Login al usuario del sistema */
	var loginUsuarioServo=function(correo, ci){
		var data = {action:'movil',tp:'login', correo:correo, ci:ci};
		lng.Service.get(url, data, responseLogin, "json");
	};
	var responseLogin = function(response){
		if(response.completo){
			
			lng.Router.section("principal");
			listarServicios();
			cargarProductos();
		}
	};
	/** Esta es la lista de los servicios */
	var listarServicios = function (){
		var data = {action:'movil',tp:'listaServicios'};
		lng.Service.get(url, data, responseListaServicios, "json");	
	};
	/** Esta es la respuesta de la lista de Servicios **/
	var responseListaServicios = function(response){
		app.Views.listaServicios(response);
	};
	/** Esta es la funcion para cargar los productos desde la base de datos */
	var cargarProductos = function (){
		var data = {action:'movil', tp:'listaProductos'};
		lng.Service.get(url,data, productosCompletos, 'json');
	};
	/** Metodo que se ejecuta cuando se ha completado de leer desde el servicio */
	var productosCompletos = function(response){
		console.log(response);
	}
	return {
		loginUsuario: loginUsuarioServo,
		listaServicios: listarServicios
	}
})(Lungo, App);