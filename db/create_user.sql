INSERT INTO "users"
    (username, password, email, image)
VALUES($1, $2, $3, $4);

select * from users
where username= $1;