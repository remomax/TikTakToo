<?php
declare(strict_types=1);
namespace Praktikant\Praktikum\TikTakTo;

use mysqli;


$CurrPlayer = 0;
$col_1_1 = 0;
$col_1_2 = 0;
$col_1_3 = 0;
$col_2_1 = 0;
$col_2_2 = 0;
$col_2_3 = 0;
$col_3_1 = 0;
$col_3_2 = 0;
$col_3_3 = 0;
$Game_ID_NotUsed = 0;

$servername = "localhost:3306";
$username = "root";
$password = "root";
$dbname = "TikTakTo";


$connection = new mysqli($servername, $username, $password, $dbname);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);


}
$Game_ID2 = $_POST['Game_ID'];



$sql = "SELECT * FROM `Games` WHERE `Game_ID` = '$Game_ID2'";
$result = $connection->query($sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        $Game_ID_NotUsed = $row['Game_ID'];
        $CurrPlayer = $row["CurrPlayer"];
        $col_1_1 = $row["col_1_1"];
        $col_1_2 = $row["col_1_2"];
        $col_1_3 = $row["col_1_3"];
        $col_2_1 = $row["col_2_1"];
        $col_2_2 = $row["col_2_2"];
        $col_2_3 = $row["col_2_3"];
        $col_3_1 = $row["col_3_1"];
        $col_3_2 = $row["col_3_2"];
        $col_3_3 = $row["col_3_3"];
    }
    setcookie("Load", '1', time() + 5000, "/");
} else {
    setcookie("Load", '2', time() + 50000, "/");
    die();
}

setcookie("Load", '1', time() + 5, "/");
setcookie("Game_ID", $Game_ID_NotUsed, time() + 15, "/");
setcookie("CurrPlayer", $CurrPlayer, time() + 15, "/");
setcookie("col_1_1", $col_1_1, time() + 15, "/");
setcookie("col_1_2", $col_1_2, time() + 15, "/");
setcookie("col_1_3", $col_1_3, time() + 15, "/");
setcookie("col_2_1", $col_2_1, time() + 15, "/");
setcookie("col_2_2", $col_2_2, time() + 15, "/");
setcookie("col_2_3", $col_2_3, time() + 15, "/");
setcookie("col_3_1", $col_3_1, time() + 15, "/");
setcookie("col_3_2", $col_3_2, time() + 15, "/");
setcookie("col_3_3", $col_3_3, time() + 15, "/");

