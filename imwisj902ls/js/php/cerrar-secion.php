<?php
include 'conexion.php';
error_reporting(0);

session_start();

session_destroy();

header("location: http://localhost/imwisj902ls/");

mysqli_close($conexion);

?>