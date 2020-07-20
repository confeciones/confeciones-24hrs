<?php
session_start();
error_reporting(0);
include 'conexion.php' ;
 
     //recibo de datoas post
     $usuario =  $_POST['usuario'];
     $clave = $_POST['clave'];

      
     //   escape de cracteres no necesarios para el formulario
     $rev_usuario = mysqli_real_escape_string( $conexion, $usuario );
     $rev_clave = mysqli_real_escape_string( $conexion, $clave );

     //verificacion si no hay usuario en la base de datos
     $consulta = mysqli_query($conexion,"SELECT * FROM  queisjwkwd WHERE usuario = '$rev_usuario' ") ;
       if(mysqli_num_rows($consulta) >0){
       echo 'error2'; 
       }else{ 
  

     //usuario  codificada
     $clave_cod = password_hash($rev_clave, PASSWORD_DEFAULT, ['cost' => 10]);
 
     //insertacion de datos
      $sql = "INSERT INTO queisjwkwd (usuario,clave)
       VALUES ('$rev_usuario', '$clave_cod')";

     //consulta

     $query = mysqli_query($conexion, $sql);
 

     //si hubo registro o no  

     if($query){
        $_SESSION['usuario'] = $usuario;
         echo 'bienvenido';
     }else{
        echo 'error';
     } 
   }
