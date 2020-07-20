<?php
session_start();
error_reporting(0);
include 'conexion.php' ;
 
$usuario  = $_SESSION['usuario'];


if(!isset($usuario)){  
echo '0';
} 
