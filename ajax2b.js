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


        /////// MANDA EL ID, TRAE EL TITULO, VIDEO Y LO RENDER
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
              success: renderDatos, 
              timeout: 4000,
              error: problemas
            });
            return false;
          }
          ///home/dit/Downloads/Video Mapa.mp4
          //https://drive.google.com/file/d/1K5aqZRYzjX6fnq7CQXB0jco2zT3UyzDj/view?usp=share_link
          //https://www.youtube.com/watch?v=4d20FT080jU

        function renderDatos(datos) {
            let iframe= document.querySelector('#iframeDiv')
            
            iframe.insertAdjacentHTML("afterend",`<video width="320" height="240" controls>
            <source src=${datos} type="video/mp4">
            
            Your browser does not support the video tag.
          </video>`)
            
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





