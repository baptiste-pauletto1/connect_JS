<?php
session_start();


$resultat = new stdClass();
$resultat->result = true; // How is it going ?
$resultat->message = " "; // Error displaying

$resultat->est_connecte = false;

if (isset($_SESSION['userOk']) && $_SESSION['userOk'] == 'ok') {
    $resultat->est_connecte=true;
} else {
    $resultat->result = false;
    $resultat->message = 'Pas connecte';
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($resultat);

