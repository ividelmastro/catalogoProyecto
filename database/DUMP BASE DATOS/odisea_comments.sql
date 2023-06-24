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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `productId` int(10) unsigned NOT NULL,
  `userId` int(10) unsigned NOT NULL,
  `textComment` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `userId` (`userId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,3,4,'Wowo productazo','2023-06-24 22:43:40','2023-06-24 22:43:40',NULL),(2,4,4,'Muy bonito','2023-06-24 22:43:55','2023-06-24 22:43:55',NULL),(3,2,4,'super!','2023-06-24 22:44:04','2023-06-24 22:44:04',NULL),(4,5,4,'Wow!! Excelente producto','2023-06-24 22:45:37','2023-06-24 22:45:37',NULL),(5,5,1,'Muy bello!','2023-06-24 22:45:54','2023-06-24 22:45:54',NULL),(6,2,1,'Hermosas piezas','2023-06-24 22:46:08','2023-06-24 22:46:08',NULL),(7,6,1,'LO quiero ya !','2023-06-24 22:46:46','2023-06-24 22:46:46',NULL),(8,3,1,'OMG hermoso!','2023-06-24 22:47:01','2023-06-24 22:47:01',NULL),(9,4,1,'Que buen producto','2023-06-24 22:47:15','2023-06-24 22:47:15',NULL),(10,6,5,'Trabajo de 10!','2023-06-24 22:50:48','2023-06-24 22:50:48',NULL),(11,7,5,'wow beautiful','2023-06-24 22:51:42','2023-06-24 22:51:42',NULL);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
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
