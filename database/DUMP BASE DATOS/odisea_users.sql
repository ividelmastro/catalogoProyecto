CREATE DATABASE  IF NOT EXISTS `odisea` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `odisea`;
-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: odisea
-- ------------------------------------------------------
-- Server version	5.7.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profilePhoto` varchar(255) DEFAULT NULL,
  `dateBirth` date NOT NULL,
  `dni` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'victoriasassoon','sassoonvictoria@gmail.com','$2a$10$3pfxGBTYthMn2c9ASSLKb.byJ5qKzmk3gPXYK0.4rJCv6cZmRX0IW','/images/users/default-image.png','2023-06-02',44816332,'2023-06-14 17:41:43','2023-06-14 17:41:43',NULL),(2,'julieta','julietaugarte@gmail.com','$2a$10$OPa0WzPXogbgXWij.YIrlO6/oo7PQBMSID9ypvPQ/y6Whrl1ilS.S','profilePhoto-1686766668621.jpeg','2023-05-31',109848264,'2023-06-14 18:17:48','2023-06-14 18:17:48',NULL),(3,'ivijuli','ivijuli@gmail.com','$2a$10$THaZqbjJD95h79uECvLnqe4e.D50M7FQlwZ5d0WupWtXgdkYemAlu','profilePhoto-1687646359155.jpeg','2023-05-29',164862,'2023-06-24 22:39:19','2023-06-24 22:39:19',NULL),(4,'vickysas','vickysas@gmail.com','$2a$10$PrLeQeOIBNP/ZFvOcJi2N.ZaUNmv9J/ZWD8syHusAlH2ou7XmhjG6','profilePhoto-1687646597491.heic','2023-06-29',9148643,'2023-06-24 22:43:17','2023-06-24 22:43:17',NULL),(5,'sassoonvictoria@gmail.com','alevivone@gmail.com','$2a$10$2AVpADrscxQTvRD/PaZJH.DcgXWcGGtm/EeQaxsp184PnCA0XXXI.','profilePhoto-1687646945732.jpeg','2023-06-01',8154674,'2023-06-24 22:49:05','2023-06-24 22:49:05',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-24 19:52:53
