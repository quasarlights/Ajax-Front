$(function(){

    let chargeVideo= document.querySelector('#btn-chargeVideo')
    let resultados = document.querySelector('#resultados')

     chargeVideo.onclick= function printId() {
        if (resultados.textContent !==null){
            console.log(resultados.textContent)
            console.log(videoId+" esta es la variable videoId");
            enviarId();
        }else{
            console.log("wait for ID");
        }
    }

    let videoId= resultados.textContent

    function FillData() {
        var param = $("#<%= TextBox1.ClientID %>").val();
        $("#tbDetails").append("<img src='Images/loading.gif'/>");
        $.ajax({
            type: "POST",/*method type*/
            contentType: "application/json; charset=utf-8",
            url: "Default.aspx/BindDatatable",/*Target function that will be return result*/
            data: '{"data":"' + param + '"}',/*parameter pass data is parameter name param is value */
            dataType: "json",
            success: function(data) {
                   alert("Success");
                }
            },
            error: function(result) {
                alert("Error");
            }
        });   
    }
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





})