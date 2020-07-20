$(document).ready(function () {
    
$.ajax({
    type: "GET",
    url: "js/php/comprobar.php",
    success: function (servidor) {
      if(servidor === '0'){
        window.location.href = "index.html"; 
      }
    }
  });
});
 