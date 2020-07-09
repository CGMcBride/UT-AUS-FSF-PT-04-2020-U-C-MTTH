DROP DATABASE IF EXISTS greatBay_db;

CREATE DATABASE greatBay_db;

USE greatBay_db;

CREATE TABLE items
(
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY;
    NAME VARCHAR
    (30) NOT NULL,
    BID INT NULL
);

    CREATE TABLE tasks
    (
        id INT NOT NULL
        AUTO_INCREMENT PRIMARY KEY;
    NAME VARCHAR
        (30) NOT NULL,
    BID INT NULL
);

        CREATE TABLE jobs
        (
            id INT NOT NULL
            AUTO_INCREMENT PRIMARY KEY;
    NAME VARCHAR
            (30) NOT NULL,
    BID INT NULL
);

            CREATE TABLE projects
            (
                id INT NOT NULL
                AUTO_INCREMENT PRIMARY KEY;
    NAME VARCHAR
                (30) NOT NULL,
    BID INT NULL
);