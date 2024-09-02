-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Erstellungszeit: 02. Sep 2024 um 13:05
-- Server-Version: 9.0.0
-- PHP-Version: 8.2.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `TikTakTo`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Games`
--

CREATE TABLE `Games` (
  `Game_ID` varchar(5) NOT NULL,
  `CurrPlayer` int NOT NULL,
  `col_1_1` int NOT NULL,
  `col_1_2` int NOT NULL,
  `col_1_3` int NOT NULL,
  `col_2_1` int NOT NULL,
  `col_2_2` int NOT NULL,
  `col_2_3` int NOT NULL,
  `col_3_1` int NOT NULL,
  `col_3_2` int NOT NULL,
  `col_3_3` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Daten für Tabelle `Games`
--



--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `Games`
--
ALTER TABLE `Games`
  ADD PRIMARY KEY (`Game_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
