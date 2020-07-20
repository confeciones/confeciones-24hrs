<?php
session_start();
error_reporting(0);
include 'conexion.php' ;
 
$usuario  = $_SESSION['usuario'];
 


$query = mysqli_query($conexion,"SELECT * FROM  skwixlxo ORDER BY id  DESC") ;
 $json = array(); 
 while($row = mysqli_fetch_array($query)){
     $json[] = array(
        'id' => $row['id'],
         'usuario' => $row['usuario'],
         'confecion' => $row['confecion'],
     );
 }
 $jsonstring = json_encode($json);
 echo $jsonstring;
 