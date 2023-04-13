CREATE DATABASE mi_base_de_datos;

USE mi_base_de_datos;

CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100),
    email VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    foto_info VARCHAR(20) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    dni INT UNSIGNED NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
);

CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNSIGNED NOT NULL,
    nombre_producto VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_producto INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,
    texto_comentario VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    FOREIGN KEY (id_producto) REFERENCES productos(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios (nombre_usuario, email, contrasena, foto_perfil, fecha_nacimiento, dni)
values ("Guillermina Lopez", "Glopez@gmail.com", "documento", "Guillermina", "1998-03-18", 44917243),
("Juana Diez", "judiez@gmail.com", "panqueque", "Juana", "2003-05-11", 46282929),
("Lola Martinez", "loli32003@gmail.com", "loli123456", "Lola", "2000-11-02", 455855272),
("Abril Perez", "abril_perez@gmail.com", "abril123", "Abril", "2001-12-12", 415678817),
("Azul Fernandez", "fernandez_azul@gmail.com", "azulfer", "Azul", "2002-01-12", 41567617);

INSERT INTO productos (id_usuario, nombre_producto, descripcion)
values (1, "Collar Mon Coeur Oro", "Oro Amarillo"),
(1, "Collar inicial enchapado en oro", "Oro Amarillo"),
(1, "Anillo Abbondanza", "Bronce"),
(2, "Collar Chloe personalizado", "Oro Amarillo"),
(2, "Pulsera Cleopatra", "Oro Amarillo con piedras azuladas"),
(3, "Aros Ivanka", "Oro Amarillo"),
(4, "Brazalete Cobalto", "Oro Amarillo y piedras de color Cobalto"),
(4, "Anillo y pulsera Mercury", "Oro Amarillo"),
(5, "Collae Mali baniado en Oro", "Oro Amarillo"),
(3, "Aros Victoria", "Oro Amarillo");


INSERT INTO comentarios (id_producto, id_usuario, texto_comentario)
values (1, 1, "Buenisma esta pieza, la recomiendo!"), 
(2, 2, "Piezas super autenticas y originales"),
(3, 3, "Lugar super recomendado, piezas de excelente calidad y disenio!"),
(4, 4, "Me queria llevar todo! Muy buen trabajo y excelentes productos"),
(5, 5, "Calidad suprema!!! Muchas gracias!!");




