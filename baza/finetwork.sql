-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 15, 2022 at 04:16 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finetwork`
--

-- --------------------------------------------------------

--
-- Table structure for table `konverzacija`
--

DROP TABLE IF EXISTS `konverzacija`;
CREATE TABLE IF NOT EXISTS `konverzacija` (
  `id_konverzacije` int(11) NOT NULL AUTO_INCREMENT,
  `id_korisnika1` int(11) NOT NULL,
  `id_korisnika2` int(11) NOT NULL,
  `id_oglasa` int(11) NOT NULL,
  PRIMARY KEY (`id_konverzacije`),
  KEY `id_korisnika1` (`id_korisnika1`),
  KEY `id_korisnika2` (`id_korisnika2`),
  KEY `id_oglasa` (`id_oglasa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

DROP TABLE IF EXISTS `korisnik`;
CREATE TABLE IF NOT EXISTS `korisnik` (
  `id_korisnika` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipa` int(11) NOT NULL,
  `ime` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `prezime` varchar(30) COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_bin NOT NULL,
  `lozinka` varchar(30) COLLATE utf8mb4_bin NOT NULL,
  `id_smera` int(11) DEFAULT NULL,
  `godina` int(11) DEFAULT NULL,
  `stepen` varchar(30) COLLATE utf8mb4_bin DEFAULT NULL,
  `pol` varchar(2) COLLATE utf8mb4_bin DEFAULT NULL,
  `slika` text COLLATE utf8mb4_bin,
  `pusac` tinyint(1) DEFAULT NULL,
  `muzika` tinyint(1) DEFAULT NULL,
  `pauze` tinyint(1) DEFAULT NULL,
  `obezbedjeno_mesto` tinyint(1) DEFAULT NULL,
  `online` int(11) DEFAULT NULL,
  `vise_ljudi` tinyint(1) DEFAULT NULL,
  `verifikovan` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_korisnika`),
  KEY `id_tipa` (`id_tipa`),
  KEY `id_smera` (`id_smera`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `oglas`
--

DROP TABLE IF EXISTS `oglas`;
CREATE TABLE IF NOT EXISTS `oglas` (
  `id_oglasa` int(11) NOT NULL AUTO_INCREMENT,
  `id_korisnika` int(11) NOT NULL,
  `id_predmeta` int(11) NOT NULL,
  `rok` date NOT NULL,
  PRIMARY KEY (`id_oglasa`),
  KEY `id_korisnika` (`id_korisnika`),
  KEY `id_predmeta` (`id_predmeta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `poruka`
--

DROP TABLE IF EXISTS `poruka`;
CREATE TABLE IF NOT EXISTS `poruka` (
  `id_poruke` int(11) NOT NULL AUTO_INCREMENT,
  `vreme` datetime NOT NULL,
  `id_korisnika` int(11) NOT NULL,
  `id_konverzacije` int(11) NOT NULL,
  `poruka` text COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id_poruke`),
  KEY `id_korisnika` (`id_korisnika`),
  KEY `id_konverzacije` (`id_konverzacije`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `predmet`
--

DROP TABLE IF EXISTS `predmet`;
CREATE TABLE IF NOT EXISTS `predmet` (
  `id_predmeta` int(11) NOT NULL AUTO_INCREMENT,
  `naziv` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id_predmeta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `predmeti_smera`
--

DROP TABLE IF EXISTS `predmeti_smera`;
CREATE TABLE IF NOT EXISTS `predmeti_smera` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_smera` int(11) NOT NULL,
  `id_predmeta` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_smera` (`id_smera`),
  KEY `id_predmeta` (`id_predmeta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `smer`
--

DROP TABLE IF EXISTS `smer`;
CREATE TABLE IF NOT EXISTS `smer` (
  `id_smera` int(11) NOT NULL AUTO_INCREMENT,
  `id_univerziteta` int(11) NOT NULL,
  `naziv` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id_smera`),
  KEY `id_univerziteta` (`id_univerziteta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `tip_korisnika`
--

DROP TABLE IF EXISTS `tip_korisnika`;
CREATE TABLE IF NOT EXISTS `tip_korisnika` (
  `id_tipa` int(11) NOT NULL AUTO_INCREMENT,
  `naziv` varchar(30) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id_tipa`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `tip_korisnika`
--

INSERT INTO `tip_korisnika` (`id_tipa`, `naziv`) VALUES
(1, 'Administrator'),
(2, 'Student');

-- --------------------------------------------------------

--
-- Table structure for table `univerzitet`
--

DROP TABLE IF EXISTS `univerzitet`;
CREATE TABLE IF NOT EXISTS `univerzitet` (
  `id_univerziteta` int(11) NOT NULL AUTO_INCREMENT,
  `naziv` varchar(30) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id_univerziteta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `konverzacija`
--
ALTER TABLE `konverzacija`
  ADD CONSTRAINT `konverzacija_ibfk_1` FOREIGN KEY (`id_korisnika1`) REFERENCES `korisnik` (`id_korisnika`),
  ADD CONSTRAINT `konverzacija_ibfk_2` FOREIGN KEY (`id_korisnika2`) REFERENCES `korisnik` (`id_korisnika`),
  ADD CONSTRAINT `konverzacija_ibfk_3` FOREIGN KEY (`id_oglasa`) REFERENCES `oglas` (`id_oglasa`);

--
-- Constraints for table `korisnik`
--
ALTER TABLE `korisnik`
  ADD CONSTRAINT `korisnik_ibfk_1` FOREIGN KEY (`id_tipa`) REFERENCES `tip_korisnika` (`id_tipa`),
  ADD CONSTRAINT `korisnik_ibfk_2` FOREIGN KEY (`id_smera`) REFERENCES `smer` (`id_smera`);

--
-- Constraints for table `oglas`
--
ALTER TABLE `oglas`
  ADD CONSTRAINT `oglas_ibfk_1` FOREIGN KEY (`id_predmeta`) REFERENCES `predmet` (`id_predmeta`),
  ADD CONSTRAINT `oglas_ibfk_2` FOREIGN KEY (`id_korisnika`) REFERENCES `korisnik` (`id_korisnika`);

--
-- Constraints for table `poruka`
--
ALTER TABLE `poruka`
  ADD CONSTRAINT `poruka_ibfk_1` FOREIGN KEY (`id_konverzacije`) REFERENCES `konverzacija` (`id_konverzacije`),
  ADD CONSTRAINT `poruka_ibfk_2` FOREIGN KEY (`id_korisnika`) REFERENCES `korisnik` (`id_korisnika`);

--
-- Constraints for table `predmeti_smera`
--
ALTER TABLE `predmeti_smera`
  ADD CONSTRAINT `predmeti_smera_ibfk_1` FOREIGN KEY (`id_smera`) REFERENCES `smer` (`id_smera`),
  ADD CONSTRAINT `predmeti_smera_ibfk_2` FOREIGN KEY (`id_predmeta`) REFERENCES `predmet` (`id_predmeta`);

--
-- Constraints for table `smer`
--
ALTER TABLE `smer`
  ADD CONSTRAINT `smer_ibfk_1` FOREIGN KEY (`id_univerziteta`) REFERENCES `univerzitet` (`id_univerziteta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
