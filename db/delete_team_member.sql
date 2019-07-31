delete from team_junction
where user_id = $1
and team_id = $2;

SELECT
users.*
FROM users
join team_junction on(users.id = team_junction.user_id)
where team_junction.team_id = $2;