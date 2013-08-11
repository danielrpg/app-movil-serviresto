App.Views =(function(lng, app, undefined){
	var listarServicios = function(servicios){
		var template ='<ul id="lista-clientes-ul">'+
 				'{{#services}}'+
    			'<li id="{{id_servicio}}">'+
					'<strong>{{nombre_servicio}}</strong>'+          
    			'</li>'+
			'{{/services}}</ul>';
		var html = Mustache.to_html(template, servicios);
		$$('aside#features article#lista-caracteristicas').html(html); 
	};
	return{
		listaServicios : listarServicios	
	}
})(Lungo, App);