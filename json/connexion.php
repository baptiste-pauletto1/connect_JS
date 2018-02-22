<?php
session_start();

$resultat = new stdClass();
$resultat->result = true; // How is it going ?
$resultat->message = " "; // Error displaying

if (isset($_POST['username']) && $_POST['username'] != "" && isset($_POST['password']) && $_POST['password'] != "") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username == 'bob' && $password == 'eponge') {
        $_SESSION['userOk'] = "ok";
        $resultat->message = 'OK !';
    } else {
        $resultat->message = 'Mauvais ID';
        $resultat->result = false;
    }
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($resultat);
