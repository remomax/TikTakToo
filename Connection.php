<?php

declare(strict_types=1);

namespace TikTakTo\TikTakTo;

use mysqli;

class Connection
{
    public function getConnection(): mysqli
    {
        $servername = 'localhost:3306'; //IP Address, if localhost do "localhost" or "localhost:3306" or "mysql" (string)
        $username = 'root'; //Username, Default: 'root' (string)
        $password = 'root'; //User Password, Default (string)
        $dbname = 'Games'; //Database Name (string)

        return new mysqli($servername, $username, $password, $dbname);
    }

}
