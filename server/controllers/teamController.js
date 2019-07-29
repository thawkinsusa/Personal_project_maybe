module.exports = {
    create: async (req, res, next) => {
        const dbInstance = req.app.get('db');
      console.log('req.body', req.body);
        const { team_name, team_image, team_creation_date, id } = req.body
        
        const teamId = await dbInstance.create_team([team_name, team_image, team_creation_date])
        console.log('team id', teamId);

        dbInstance.join_team(teamId[0].id, id)
          
      },
      getTeam: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log('object');
        dbInstance.read_team_by_user_id(req.params.id)
          .then(team => {
            console.log(team);  
            res.status(200).send(team)})
          .catch(err => {
            res.status(500).send({ errorMessage: "get team is broken !@#$" });
            console.log(err)
          });
      },
      delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params
    
        dbInstance.delete_team(id)
          .then(() => res.sendStatus('all good in the hood'))
          .catch(err => {
            res.status(500).send({ errorMessage: "Delete is broken !@#$" });
            console.log(err)
          });
      } 
}