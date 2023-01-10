$(function(){

//////////////////BTN whisper
    let btnWhisper= document.querySelector('#btn-chargeVideo')
    let resultados = document.querySelector('#resultados')
    let textDiv = document.querySelector('#whisperText')

     btnWhisper.onclick= function sendAudio() {
        if (resultados.textContent !==null){
            console.log(resultados.textContent)
            console.log(" esta es la variable videoId");
            enviarAudio();
        }else{
            console.log("wait for ID");
        }
    }
//https://www.audio-lingua.eu/IMG/mp3/chuntunquis_y_bunuelos.mp3
/////ENVIO ID Y SU ACTUAL TITLE AUDIO DE MP3 Y DEVUELVE TEXTO

    function enviarAudio() {
        let id= resultados.textContent
        
        $.ajax({
          async: true,
          type: "GET",
          dataType: "html",
          contentType: "application/x-www-form-urlencoded",
          url: "http://localhost:5000/api/movies/whisper/text",
          data: "id=" + id,
          beforeSend: inicioEnvio,
          success: renderDatos, 
          timeout: 4000,
          error: problemas
        });
        return false;
      }


});

