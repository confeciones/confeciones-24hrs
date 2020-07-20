<?php
session_start();
error_reporting(0);
include 'conexion.php' ;
 
$usuario  = $_SESSION['usuario'];
echo $usuario_cod;


$query = mysqli_query($conexion,"SELECT * FROM  queisjwkwd WHERE usuario = '$usuario' ") ;
 $json = array(); 
 while($row = mysqli_fetch_array($query)){
     $json[] = array(
         'id' => $row['id'],
         'usuario' => $row['usuario'],
     );
 }
 $jsonstring = json_encode($json);
 echo $jsonstring;
 