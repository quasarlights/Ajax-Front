$(function(){

    let chargeVideo= document.querySelector('#btn-chargeVideo')
    let resultados = document.querySelector('#resultados')

     chargeVideo.onclick= function printId() {
        if (resultados.textContent !==null){
            console.log(resultados.textContent)
            console.log(" esta es la variable videoId");
            enviarId();
        }else{
            console.log("wait for ID");
        }
    }

    /*let videoId= resultados.textContent
    function enviarId() {
            let id= resultados.textContent
            $.get("http://localhost:5000/api/movies/whisper", { id : id }, llegadaDatos);
            return true;
        }*/
        //La función que se ejecuta cuando llegan los datos del servidor recibe un string:
        function enviarId() {
            let id= resultados.textContent
            
            $.ajax({
              async: true,
              type: "GET",
              dataType: "html",
              contentType: "application/x-www-form-urlencoded",
              url: "http://localhost:5000/api/movies/whisper",
              data: "id=" + id,
              beforeSend: inicioEnvio,
              success: llegadaDatos,
              timeout: 4000,
              error: problemas
            });
            return false;
          }

        function llegadaDatos(datos) {
            alert(datos);
        }


        function inicioEnvio() {
            alert("inicio envio!")
        }

        function problemas() {
            alert("problemas!")
        }
          
        
        });//end general function, dont touch it  





   /* function enviarId() {

        let id= resultados.textContent

            $.ajax({
                type: 'get',
                url: 'http://127.0.0.1:5000/api/movies/whisper',
                data: id,
                contentType: "application/x-www-form-urlencoded",
                traditional: false,
                success: function (data) {
                    $("#resultados").text(data);
                }
            });  
        
    }*/

    
    
 
    
        /*function enviarId(){
//data: '{"data":"' + param + '"}'
            $.ajax({
                url: 'http://localhost:5000/api/movies/whisper/',
                type: 'POST',
                data: jQuery.param({ id: "af982629-23fa-4d9a-83ad-8f57e7a9c2c2"}) ,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function (response) {
                    alert(response.status);
                },
                error: function () {
                    alert("error");
                }
            });
        }*/





