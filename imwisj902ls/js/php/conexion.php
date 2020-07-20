<?php
session_start();
error_reporting(0);
$local = "localhost" ;
$usuario = "root" ;
$clave =  "" ;
$bd = "anonimo" ;

$conexion = mysqli_connect($local, $usuario, $clave, $bd);