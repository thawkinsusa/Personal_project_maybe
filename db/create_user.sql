INSERT INTO "users"
    (username, password, email, image, back_img)
VALUES($1, $2, $3, $4, $5);

select * from users
where username= $1;