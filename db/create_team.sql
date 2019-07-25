insert into team(name, image, date)
values($1, $2, $3)

RETURNING *;
-- select * from team 
-- where name = $1

