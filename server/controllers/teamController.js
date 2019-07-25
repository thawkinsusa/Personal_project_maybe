module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, image, date } = req.body
        dbInstance.create_team([name, image, date])
          .then((team) => {
            console.log('hit second call', team[0], req.session.user)

            dbInstance.team(team[0].id, req.session.user.id)
            .then(()=> res.status(200).send(team))
            .catch(err => {
              res.status(500).send ({errorMessage: 'create team is broken'})
            })
          })
          .catch(err => {
            res.status(500).send({ errorMessage: "Create is broke $#@%" });
            console.log(err)
          });
      },
      getTeam: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log('object');
        dbInstance.read_team()
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