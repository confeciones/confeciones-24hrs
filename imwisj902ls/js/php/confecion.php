<?php
session_start();
error_reporting(0);
include 'conexion.php' ;
 
     //recibo de datoas post
     $usuario =  $_POST['usuario'];
     $confecion = $_POST['confecion'];
     $likes = 0;

      
     //   escape de cracteres no necesarios para el formulario
     $rev_usuario = mysqli_real_escape_string( $conexion, $usuario );
     $rev_confecion = mysqli_real_escape_string( $conexion, $confecion );
  
     //insertacion de datos
      $sql = "INSERT INTO skwixlxo (usuario,confecion,likes)
       VALUES ('$rev_usuario', '$rev_confecion', '$likes')";

     //consulta

     $query = mysqli_query($conexion, $sql);
 

     //si hubo registro o no  

     if($query){
         echo '1';
     }else{
        echo '0';
     } 
 