create database checkpoint4;
use checkpoint4;

create table `users` (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email varchar(30) NOT NULL,
password varchar(250) NOT NULL,
role varchar (10) NOT NULL
);

create table `assets` (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NULL,
quantity numeric NULL,
worth numeric NULL
);

INSERT INTO assets (name, quantity, worth) VALUES ('Horses', 100, 1000000);

create table `visits` (
id INT AUTO_INCREMENT PRIMARY KEY,
date VARCHAR(50) NULL,
time numeric NULL,
user_id int NULL,
CONSTRAINT fk_user_visit
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE CASCADE
);

create table `royal_family` (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NULL,
age int NULL,
description varchar(500) NULL,
url varchar(500) null
);

INSERT INTO royal_family (name, age, description, url) VALUES ('Ned Stark', 34, "blablabla", "https://i.pinimg.com/564x/5a/a5/c2/5aa5c2b4656c4b8a60adb68f0ca765ad.jpg");