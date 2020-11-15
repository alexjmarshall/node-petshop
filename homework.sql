CREATE TABLE Animals (
    Id int,
    Age int,
    FavoriteFood varchar(255)
);

CREATE TABLE AnimalNames (
    Id int,
    AnimalId int,
    Name varchar(255)
);

/* Insert an animal */
INSERT INTO Animals (Name, Age, FavoriteFood) VALUES (9, 'Lasagna') RETURNING Id AS AnimalId;
/* For each name, insert with returned AnimalId in order of oldest name first */
INSERT INTO AnimalNames (AnimalId, Name) VALUES (AnimalId, 'Milo');
INSERT INTO AnimalNames (AnimalId, Name) VALUES (AnimalId, 'Garfield');
/* Select current name of an animal by AnimalId */
SELECT MAX(Id), Name
FROM AnimalNames AS an
WHERE an.AnimalId = AnimalId;