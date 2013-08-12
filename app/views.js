App.Views =(function(lng, app, undefined){
	/** este es el metodo que lista los servicios en el aside del app **/
	var listarServicios = function(servicios){
		var template ='<ul id="lista-clientes-ul" >'+
 				'{{#servicios}}'+
    			'<li id="{{id_servicio}}" data-icon="grid">'+
					'<strong>{{nombre_servicio}}</strong>'+          
    			'</li>'+
			'{{/servicios}}</ul>';
		var html = Mustache.to_html(template, servicios);
		$$('aside#features article#lista-caracteristicas').html(html); 
	};
	/** Este metodo es el que lista los productos por servicios **/
	var listarProductosXServicio = function(){
		console.log('Comenzando a mostrar los productos jejejej');
	};
	return{
		showListaServicios : listarServicios,
		listarProductosXServicio : listarProductosXServicio
	}
})(Lungo, App);