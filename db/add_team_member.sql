insert into team_junction(user_id, team_id)
VALUES($1, $2);

SELECT
users.*
FROM users
join team_junction on(users.id = team_junction.user_id)
where team_junction.team_id = $2;