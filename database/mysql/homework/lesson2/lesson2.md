use webader2;

show tables;

create table cities
(
    id int primary key auto_increment,
    city varchar(20) not null
);
select * from cities;
create table users
(
    id int primary key auto_increment,
    name varchar(20) not null,
    age int not null,
    city_id int null,
    foreign key (city_id) references cities(id)
);
select * from users;

insert into cities values (null, 'Lviv');
insert into cities values (null, 'Kyiv');
insert into cities values (null, 'Rivne');

insert into users values (null, 'Max', 25, 1);
insert into users values (null, 'Kira', 25, 1);
insert into users values (null, 'Karina', 18, 2);
insert into users values (null, 'Kokos', 18, 2);
insert into users values (null, 'Petro', 18, 3);

select * from users join cities on cities.id = users.city_id;
select users.id, name, age, city from users join cities on cities.id = users.city_id;
select users.*, city from users join cities on cities.id = users.city_id;

select * from users left join cities c on c.id = users.city_id;
select * from users right join cities c on c.id = users.city_id;

select users.* from users join cities c on c.id = users.city_id where city='Lviv';
select * from users join cities c on c.id = users.city_id where users.id=3;

select city from users join cities c on c.id = users.city_id where users.id=3;

select * from client join webader2.application a on client.idClient = a.Client_idClient
join webader2.department d on d.idDepartment = client.Department_idDepartment;

select * from users order by age desc limit 1;
(select * from users order by age desc limit 1)
union
(select * from users order by age limit 1);
select city_id from users where name='max' or name='karina';

select * from cities where id in (select city_id from users where name='max' or name='karina');