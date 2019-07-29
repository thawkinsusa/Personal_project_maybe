
select users.*,
team.*
from users
    JOIN team on(users.team_id = team.id)
where team.id = users.team_id;