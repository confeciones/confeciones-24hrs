$(document).ready(function () {
  

$('#li1').click(function (e) { 
    e.preventDefault();
    $('#like').addClass('like2');
    
    $.ajax({
      url: "/js/php/inicio.php",
      type: "GET",
      success: function (servidor) {
        console.log(servidor);
        let trabajos = JSON.parse(servidor);
        let inyectar = '';
        trabajos.forEach(trabajo => {
          inyectar +=  `<p style="display:none" id="iddd"> ${trabajo.id} </p> <center>
          <form method="POST" id="form-poss">
        <div class="p-3 " style="background: rgba(19, 85, 185, 0.945);height: 250px;width: 950px;margin-left: 10px;border-radius: 20px;">
        <div class="p-2  text-white">
          <div class="p-1" style="float: left;"> 
          <i class="fa fa-user-circle text-waring fa-2x text-info bg-white" aria-hidden="true" style="border-radius: 100%;border: 2px solid white;"></i>  
        </div>
        <div class="text-white" style="float: left; margin-top: 10px;">
         <p> ${trabajo.usuario}  </p>
        </div><br>
        </div>
        <div class="p-3 w-100">
          <textarea type="text" class="p-4 w-100" readonly>${trabajo.confecion}</textarea>
          
        </div>  </center><br><br><br> 
        </form>
      
         `;
         $('#inyectar_lo').html(inyectar);
         $('#imagen-anonima').removeClass('adios');
         
          });
        }
        
    });

    //like
 
    
  
  $('#warning').hover(function () {
    // over
    $(this).addClass('text-danger');
    $(this).removeClass('text-warning');
  }, function () {
    // out
    $(this).addClass('text-warning');
    $(this).removeClass('text-danger');
  }
  );

});
//xd
 

$('#like').hover(function () {
  // over
  $(this).addClass('like');
  $(this).removeClass('like2');
}, function () {
  // out
  $(this).addClass('like2');
  $(this).removeClass('like');
}
);

$('#warning').hover(function () {
  // over
  $(this).addClass('text-danger');
  $(this).removeClass('text-warning');
}, function () {
  // out
  $(this).addClass('text-warning');
  $(this).removeClass('text-danger');
}
);
//estoy trabandjo aqui we



$('#li2').click(function (e) { 
    e.preventDefault();

    $.ajax({
      url: "/js/php/datos.php",
      type: "GET",
      success: function (servidor) {
        console.log(servidor);
        let trabajos = JSON.parse(servidor);
        let inyectar = '';
       trabajos.forEach(trabajo => {
        inyectar +=  ` <center> 
        <div class="w-100 p-3" style=" background: rgb(66, 8, 119);height: 583px ;"> 
        <img src="img/Confeciones.png" style="width: 190px;height: 160px; ">
        <h5 class="text-white">confiezate hijo mio</h5><br><br>
         <div class="p-2">
            <form method="POST" id="form-nombre"> 
             <div class="p-2"  >
                 <input class="w-50" value= ${trabajo.usuario} readonly  class="form-control" id="usuarioo">
             </div>
             <div class="p-2">
                <textarea class="form-control w-50"  id="confecion" style="height: 120px;" ></textarea>
            </div><br>
            <button type="submit" class="btn btn-success w-25">Listo!!</button>
         </div>
         <div id="resp"></div>
        </form> 
    </div>
    </center>
    <script>
    $('#form-nombre').submit(function (e) { 
      e.preventDefault();
      const datos = {
        usuario: $('#usuarioo').val(),
        confecion: $('#confecion').val(),
      }
    
     $.post("js/php/confecion.php", datos,  function (servidor) {
         console.log(servidor);
         if(servidor === '0'){
          $('#resp').html('a ocurrido algun error al enviar la confecion');
          $('#resp').addClass('text-danger');
          $('#resp').removeClass('text-success');
         }
         if(servidor === '1'){
          $('#resp').html('la confecion fue enviada');
          $('#resp').addClass('text-success');
          $('#resp').removeClass('text-danger');
         }
         function tiempo(){
          $('#resp').html(' ');
        }setTimeout(tiempo,2000)
         limpiar();
       },
     );
     function limpiar(){
      $('#confecion').val('');
   }
    
    });
    </script>
       `;
       $('#inyectar_lo').html(inyectar);
       $('#imagen-anonima').addClass('adios');

        });
         
      }
      
    });
  
});

 
$('#li3').click(function (e) { 
    e.preventDefault();
   
    let inyectar = '';
    inyectar +=  ` <div class="text-center text-white" style="background: rgb(17, 126, 177);">
    <h4 class="p-3">Como ser Admin</h4>
    <img src="img/admin.PNG" style="width: 300px;height: 200px;border-radius: 10px;border: 5px solid rgb(236, 236, 236);" >
    <br><br>
  </div>
  <center> 
  <div class="p-3" style="width:90%">
    <p>Bienvenido, haci que quieres ser admino , no ? bueno etonces tienes un largo camino<br>
    el admin no es cualquier persona es aquel que logro cotrolar su chacra,<br>para ser admin nesecitas tener en cuenta que :<br>
    <br> 1.-ser justo con todas las confeciones<br><br>
2.-no borrar confeciones porque re nombren <br><br>
3.-no permitir maldades. </p>
  </div>
</center>
   `;
   $('#inyectar_lo').html(inyectar);
   $('#imagen-anonima').removeClass('adios');
});


$('#li4').click(function (e) { 
    e.preventDefault();
   
    let inyectar = '';
    inyectar +=  ` <div class="text-center text-white" style="background: rgb(17, 126, 177);">
    <h4 class="p-3">REGLAS</h4>
  </div>
  <center> 
  <div class="p-3" style="width:90%">
    <p>Primero nosotros no nos hacemos responsables de lo que suban, si algo esta fuera de lugar se borrar enceguida.<br><br>
    1.-No poner fotos ni nombres en la confeciones  .<br><br>
2.-No dar tu nombres reales a nadie recuerda todos mienten.<br><br>
3.-Si pones algo fuera de lugar los administradores borraran tu confecion.<br><br>
Esa son todas las reglas que debes seguir no te portes mal :) .</p>
<br><br><br><br><br><br><p class="text-white" style="cursor: default;">(Las autoridades observan) ten cuidado co lo que confiezas todo <br> es anonimo si pones algun nombre y te cachan eres solo tu el responsable :)</p>
  </div>
</center>
   `;
   $('#inyectar_lo').html(inyectar);
   $('#imagen-anonima').removeClass('adios');
});


$('#form-reg').submit(function (e) { 
  e.preventDefault();

  const datos = {
    usuario: $('#usuario').val(),
    clave: $('#clave').val(),
  }
  
$.post("/js/php/index.php", datos, function (servidor) {
    console.log(servidor);
    if(servidor === 'bienvenido') {
      $('#respuesta').html('registrado con exito!');
      $('#respuesta').addClass('text-success');
      limpiar();
      function tiempo(){
        window.location.href = "anonimo.html"; 
      }setTimeout(tiempo,2000)
    }
    if(servidor === 'error'){
      $('#respuesta').html('a ocurrido algun error, ingresa bien tus datos');
      $('#respuesta').addClass('text-danger');
      limpiar();
      function tiempo(){
        $('#respuesta').html(' ');
      }setTimeout(tiempo,3000)
    }
    if(servidor === 'error2'){
      $('#respuesta').html('el usuario ya esta registrado');
      $('#respuesta').addClass('text-danger');
      limpiar();
      function tiempo(){
        $('#respuesta').html(' ');
      }setTimeout(tiempo,3000)
    }

},
);

function limpiar(){
  $('#usuario').val('');
   $('#clave').val('');
}

  
});




$('#form-ins').submit(function (e) { 
  e.preventDefault();

  const datos = {
    usuario2: $('#usuario2').val(),
    clave2: $('#clave2').val(),
  }

  console.log(datos);
  
$.post("/js/php/secion.php", datos, function (servidor) {
     
    console.log(servidor);
    if(servidor === '1') {
      $('#respuesta2').html('Bienvenido');
      $('#respuesta2').addClass('text-success');
      limpiar();
      function tiempo(){
        window.location.href = "anonimo.html"; 
      }setTimeout(tiempo,2000)
    }
 
    if(servidor === '0') {
      $('#respuesta2').html('usuario o clave incorectos');
      $('#respuesta2').addClass('text-danger');
      limpiar();
      function tiempo(){
        $('#respuesta2').val('');
      }setTimeout(tiempo,2000)
    }
     
},
);

function limpiar(){
  $('#usuario').val('');
   $('#clave').val('');
}


});



});
