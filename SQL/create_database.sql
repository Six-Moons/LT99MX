CREATE DATABASE tetris_test;

USE tetris_test;

CREATE TABLE Insignias (
    insigniaID varchar(15) NOT NULL,
    titulo varchar(20) NOT NULL,
    descripcion varchar (100),

    PRIMARY KEY (insigniaID)
);

CREATE TABLE Usuarios (
    userID varchar(15) NOT NULL,
    soiAdmin boolean NOT NULL,
    username varchar(20) NOT NULL,
    correo varchar(50) NOT NULL,
    contrasenia varchar(50) NOT NULL,
    nombre varchar(50) NOT NULL,
    estado varchar(20) NOT NULL,
    foto varchar(100),
    descripcion varchar(140),
    insigniaFavorita varchar(15),

    PRIMARY KEY (userID),
    FOREIGN KEY (insigniaFavorita) references Insignias(insigniaID) 
);

CREATE TABLE InsigniaObtenida (
    userID varchar(15) NOT NULL,
    insigniaID varchar(15) NOT NULL,
    fechaDeObtencion date NOT NULL,

    PRIMARY KEY (userID, insigniaID),
    FOREIGN KEY (userID) references Usuarios(userID)
    FOREIGN KEY (insigniaID) references Insignias(insigniaID)
);

CREATE TABLE Noticias (
    noticiaID varchar(15) NOT NULL,
    titulo varchar(50) NOT NULL,
    descripcion varchar (500) NOT NULL,
    adminID varchar(15) NOT NULL

    PRIMARY KEY (noticiaID),
    FOREIGN KEY (adminID) references Usuarios(userID)
);

CREATE TABLE Partidas (
    jornada int NOT NULL,
    partida int NOT NULL,
    fechaDeJugacion date NOT NULL,

    PRIMARY KEY (jornada, partida, fechaDeJugacion)
);

CREATE TABLE Participaciones (
    jornada int NOT NULL,
    partida int NOT NULL,
    fechaDeJugacion date NOT NULL,
    userID varchar(15) NOT NULL,
    posicion int,

    PRIMARY KEY (jornada, partida, fechaDeJugacion, userID),
    FOREIGN KEY (jornada) references Partidas(jornada),
    FOREIGN KEY (partida) references Partidas(partida),
    FOREIGN KEY (fechaDeJugacion) references Partidas(fechaDeJugacion),
    FOREIGN KEY (userID) references Usuarios(userID)
);