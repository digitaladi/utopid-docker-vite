
CREATE USER IF NOT EXISTS 'dbuser'@'%' IDENTIFIED BY 'dbpassword';
GRANT ALL PRIVILEGES ON *.* TO 'utilisateur'@'%';
FLUSH PRIVILEGES;


-- Create the appdb database
CREATE DATABASE IF NOT EXISTS utopid;

-- Use the appdb database
USE utopid;

-- Create the apptb table
CREATE TABLE `utopid`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));