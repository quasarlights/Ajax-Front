$(function(){
    //all
    //paste jquery first url production in html
    //link js script

    //$('selector').function();




let submitButton = document.querySelector('#submitButton');

let form= document.querySelector('#formulario')
//////////////////////BUTTON ACTIONS

////////////////////////SUBMIT
form.addEventListener('submit', function(e){

    e.preventDefault();
    convertData();
    enviarDatos(sendInfo);
    enviarFormulario();
    
////////////////CHARGE VIDEO

//chargeVideo.click(cargarVideo());

//////////////////////////////////////////////////////

let sendInfo;

function convertData() {
    let info;
    var domain = {
        title: document.querySelector("#title").value,
        // USE THE KEY ACTUALLY RECEIVED BY FLASK-POSTGRESQL
        duration: document.querySelector("#url").value,
        released: document.querySelector("#email").value
    }

    info= JSON.stringify(domain)
    sendInfo= info
    //SendInfo.push(domain);
};

function enviarDatos(SendInfo){
    console.log(SendInfo);
    console.log("hello man");
}

//MANDA FORM A FLASK
    function enviarFormulario(){

        $.ajax({
            type: 'post',
            url: 'http://127.0.0.1:5000/api/movies/add',
            data: sendInfo,
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function (data) {
                $("#resultados").text(data);
               
            }
        });
    }

    
    })///aca termina el ADDEVENTLISTENER del form/////////////////////

    /* <!--ID generated-->
     <br><p>Register with ID:</p><br>

     <button id="btn-chargeVideo" onclick="console.log(getElementById('resultados').textContent)">Charge Video Btn</button>*/
   
     
    
    

    //btnChargeVideo.onclick= function(){console.log("helloooo")}
        

})

let hello= document.querySelector('#btn-hello')

     hello.onclick= function ciao() {console.log("ciao")}

   
        





//CARGAR VIDEO

/*
       




var conexion1;
function enviarFormulario() 
{
  conexion1=new XMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open('POST','pagina1.php', true);
  conexion1.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  conexion1.send(retornarDatos());  
}

var SendInfo= { SendInfo: [... your elements ...]};

        $.ajax({
            type: 'post',
            url: 'Your-URI',
            data: JSON.stringify(SendInfo),
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function (data) {
                ...
            }
        });
and in action

public ActionResult AddDomain(IEnumerable<PersonSheets> SendInfo){
...
you can bind your array like this

var SendInfo = [];

$(this).parents('table').find('input:checked').each(function () {
    var domain = {
        name: $("#id-manuf-name").val(),
        address: $("#id-manuf-address").val(),
        phone: $("#id-manuf-phone").val(),
    }

    SendInfo.push(domain);
});
*/

