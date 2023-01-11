$(function(){

//////////////////BTN whisper
    let btnWhisper= document.querySelector('#btn-whisper')
    let resultados = document.querySelector('#resultados')
    let textDiv = document.querySelector('#whisperText')
    let videoData= document.querySelector('#video-data')
     btnWhisper.onclick= function sendAudio() {
        if (resultados.textContent !==null){
          //  console.log(resultados.textContent)
            console.log(" esta es la variable ajax2c.js");
            //enviarAudio();

            verVideoData(videoData.getAttribute("src"))
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
          beforeSend: inicioEnvioAudio,
          success: renderDatosAudio, 
          timeout: 4000,
          error: problemasAudio
        });
        return false;
      }


      function inicioEnvioAudio(){
        alert("inicio envio audio")
      }

      function renderDatosAudio(datos){
        alert(datos)
      }

      function problemasAudio() {
        alert("problemas audio")
      }


    

    function verVideoData(videoData) {
        console.log(videoData);
        
    }

});//llave de FUNCTION GLOBAL, DONT TOUCH IT PLEASE

