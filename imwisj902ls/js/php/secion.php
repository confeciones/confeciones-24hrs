<?php
session_start();
error_reporting(0);
//conexion
include 'conexion.php' ;
 
 //recibo de datoas post
 $usuario2 =  $_POST['usuario2'];
 $clave2 = $_POST['clave2'];

 //   escape de cracteres no necesarios para el formulario
 $rev_usuario = mysqli_real_escape_string( $conexion, $usuario2 );
 $rev_clave = mysqli_real_escape_string( $conexion, $clave2 );
 

  //consulta
 $consulta = mysqli_query($conexion,"SELECT * FROM  queisjwkwd WHERE usuario = '$rev_usuario' ") ;
       if(mysqli_num_rows($consulta) >0){
         //buscar la contraseña
         $dato = mysqli_fetch_array($consulta);
         //verificacion de contraseña 
          if(password_verify($rev_clave, $dato['clave'])){
            $_SESSION['usuario'] = $usuario;
            echo '1';
          }else{
            echo '0';
          }
            
       }  else{
           echo '0';
       }
 