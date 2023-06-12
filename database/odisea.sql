CREATE DATABASE odisea;

USE odisea;

CREATE TABLE users (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    profilePhoto VARCHAR(255),
    dateBirth DATE NOT NULL,
    dni INT UNIQUE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
);

CREATE TABLE products (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    userId INT UNSIGNED NOT NULL,
    nameProduct VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    photoProduct VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE comments (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    productId INT UNSIGNED NOT NULL,
    userId INT UNSIGNED NOT NULL,
    textComment VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    FOREIGN KEY (productId) REFERENCES products(id),
    FOREIGN KEY (userId) REFERENCES users(id)
);






