CREATE DATABASE mi_base_de_datos;

USE mi_base_de_datos;

CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre_usuario VARCHAR(100),
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

INSERT INTO usuarios (nombre_usuario, email, contrasena, foto_info, fecha_nacimiento, dni)
values ("guillermina_lopez", "guillerminalopez@gmail.com", "panqueque123", "Guillermina", "1998-03-18", 41063947);

INSERT INTO productos (id_usuario, nombre_producto, descripcion)
values (1, "Aros Ivanka", "Baniados en Oro");

INSERT INTO comentarios (id_producto, id_usuario, texto_comentario)
values (1, 3, "Buenisma esta pieza, la recomiendo!")

