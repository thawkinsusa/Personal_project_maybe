INSERT INTO "users"
    (user_name, user_password, user_email, user_image, user_join_date)
VALUES($1, $2, $3, $4, $5);

select * from users
where user_name= $1;