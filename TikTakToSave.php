<?php
declare(strict_types=1);
namespace Praktikant\Praktikum\TikTakTo;
use mysqli;
$servername = 'localhost:3306'; //IP Adresse, oder wen localhost einfach 'Mysql' order 'localhost' (string)
$username = 'root'; //Benutzername für denn zugang Meistens 'root' (string)
$password = 'root'; //Password des benutzers (string)
$dbname = 'TikTakTo'; //datenbank name (string)

$connection = new mysqli($servername, $username, $password, $dbname);



// Prüfe Verbindung
if ($connection->connect_error) {
    die("Verbindung fehlgeschlagen: " . $connection->connect_error);
}

// Empfangene Daten auslesen
$currPlayer = $_POST['currPlayer'] ?? null;
$container11c = $_POST['container11c'] ?? null;
$container12c = $_POST['container12c'] ?? null;
$container13c = $_POST['container13c'] ?? null;
$container21c = $_POST['container21c'] ?? null;
$container22c = $_POST['container22c'] ?? null;
$container23c = $_POST['container23c'] ?? null;
$container31c = $_POST['container31c'] ?? null;
$container32c = $_POST['container32c'] ?? null;
$container33c = $_POST['container33c'] ?? null;
$Game_ID = $_POST['Game_ID'] ?? null;

$sql = "INSERT INTO Games (`Game_ID`, `CurrPlayer`, `col_1_1`, `col_1_2`, `col_1_3`, `col_2_1`, `col_2_2`, `col_2_3`, `col_3_1`, `col_3_2`, `col_3_3`)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";


$stmt = $connection->prepare($sql);

if ($stmt === false) {
    echo "<script>alert('SQL ERROR');</script>";
    die("Fehler bei der Vorbereitung des SQL-Statements: " . $connection->error);
}
echo "<script>console.error('SQL');</script>";

// Binde die Parameter
$stmt->bind_param("sdddddddddd", $Game_ID, $currPlayer, $container11c, $container12c, $container13c, $container21c, $container22c, $container23c, $container31c, $container32c, $container33c);

if ($stmt->execute()) {

} else {
    echo "Fehler: " . $stmt->error;
}












