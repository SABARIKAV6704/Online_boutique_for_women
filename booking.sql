create database booking;
use  booking;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fname VARCHAR(50) ,
  lname VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  city VARCHAR(50),
  address VARCHAR(100),
  state VARCHAR(50),
  pincode VARCHAR(10),
  mobileno VARCHAR(20),
  dress VARCHAR(100),
  qty INT,
  size VARCHAR(10),
  pay VARCHAR(20)
);

select * from users;

CREATE TABLE cart (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  quantity INT NOT NULL
);

DROP  table cart;

ALTER TABLE users MODIFY fname VARCHAR(50) NULL;
select * from users;

create table login(
 username varchar(50),
 password varchar(60)
 );
 
 
