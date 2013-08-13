App.Events = (function(lng, app, undefined){
    lng.dom('section#splash article#login-article form button').tap(function(evt){
        if($$('#email-login').val()==="" ){
            lng.Notification.error(
                "Error",                      //Title
                "El campo Correo no puede estar vacio",     //Description
                "remove",                     //Icon
                7,                            //Time on screen
                afterNotification             //Callback function
            );
        }else if($$('#ci-login').val()===""){
            lng.Notification.error(
                "Error",                      //Title
                "El Carnet de Identidad no puede estar vacio",     //Description
                "remove",                     //Icon
                7,                            //Time on screen
                afterNotification             //Callback function
            );
        }else{
             lng.Notification.success(
                "Correcto",                  //Title
                "El Usuario es correcto",     //Description
                "check",                    //Icon
                1,                         //Time on screen
                afterNotificationLoginCorrect             //Callback function
            );
        }
    });
    /** Esta es la ejecucion del metodo que activa el login en service*/
    var afterNotificationLoginCorrect = function(){
        lng.Notification.hide();
        app.Services.loginUsuario($$('#email-login').val(), $$('#ci-login').val());
    };
    var afterNotification = function(){
        //Do something
        //console.log('despues del error....');
    };
    return{

    }
})(Lungo, App);