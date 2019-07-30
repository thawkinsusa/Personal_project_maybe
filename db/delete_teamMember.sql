delete from team_junction
where user_id = $1;

-- SELECT
-- users.*
-- FROM users
-- join team_junction on(users.id = team_junction.user_id)
-- where team_junction.team_id = $1