var url = "http://10.0.0.4:8080/auto/";
App.Events = (function(lng, app, undefined){
    lng.dom('section#splash article#login-article form a').tap(function(evt){
        if($$('#email-login').val()=="" ){
            Lungo.Notification.error(
                "Error",                      //Title
                "El campo Correo no puede estar vacio",     //Description
                "remove",                     //Icon
                7,                            //Time on screen
                afterNotification             //Callback function
            );
        }else if($$('#ci-login').val()==""){
            Lungo.Notification.error(
                "Error",                      //Title
                "El Carnet de Identidad no puede estar vacio",     //Description
                "remove",                     //Icon
                7,                            //Time on screen
                afterNotification             //Callback function
            );
        }else{
            app.Services.loginUsuario($$('#email-login').val(), $$('#ci-login').val()); 
        }
        
    });
    var afterNotification = function(){
        //Do something
        console.log('despues del error....');
    };
    return{

    }
})(Lungo, App);