select teams.*,
team_junction.*
from teams
join team_junction on(teams.id = team_junction.team_id)

