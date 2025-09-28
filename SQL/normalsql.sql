create database 99acres;
show databases;
use 99acres;
show tables;
select * from flats;
select * from admin;
select * from user;
select * from cart;
select * from plot;
select * from land;
desc Flats;
alter table flats drop column admin_id;
desc flats;
drop table admin;

SELECT CONSTRAINT_NAME
FROM information_schema.KEY_COLUMN_USAGE
WHERE TABLE_NAME = 'flats' AND COLUMN_NAME = 'admin_id';

ALTER TABLE flats DROP FOREIGN KEY FKdcr414eti4qgv8u4s1xcwi1ya;
ALTER TABLE flats DROP COLUMN admin_id;

DELETE FROM cart;
SELECT * FROM cart WHERE user_id = 1;

DELETE FROM admin
WHERE id=14;

