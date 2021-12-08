
use crud_node2
create table generos(
idgenero INT NOT NULL auto_increment,
genero varchar(50) NOT NULL,
primary key(idgenero)
)

create table canciones(
idcanciones INT NOT NULL auto_increment,
id_genero INT NOT NULL,
titulo varchar(50) NOT NULL,
artista varchar(80) NOT NULL,
fecha INT(4),
primary key(idcanciones),
foreign key (id_genero) references generos(idgenero)
)
drop table favoritas

create table favoritas(
idfavoritas INT NOT NULL auto_increment,
id_canciones INT NOT NULL,
primary key(idfavoritas),
foreign key(id_canciones) references canciones(idcanciones)
)

select*from generos
select*from canciones
select*from favoritas


insert into generos(genero) values ("bachata");

insert into favoritas(idcanciones,id_genero,titulo,artista,fecha) values ("2","2","responde","niko","2018")


insert into canciones(id_genero,titulo,artista,fecha) values ("1","despacito","daddy yanke","2015"); 





