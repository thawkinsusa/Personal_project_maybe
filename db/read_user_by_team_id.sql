select users.*
from users
    JOIN team on(users.team_id = team.id)
where team.id = 16