require('dotenv').config({ path: __dirname + '/../.env' });
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const uc = require('./controllers/userController');
const tc = require('./controllers/teamController');
const initSession = require('./middleware/initSession');
const authCheck = require('./middleware/authCheck');
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
console.log('conneciton string', CONNECTION_STRING);

const app = express();
console.log('hit express');
app.use(express.json());
console.log('hit jsong');

app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365
    }
  })
);
console.log('session');
massive(CONNECTION_STRING).then(db => {
  console.log('db connection successful');
  app.set('db', db);

  app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
})

app.use(initSession);

// users
app.post('/api/signup', uc.signup);
app.post('/api/login', uc.login);
app.get('/api/user', authCheck, uc.getUser);
app.get('/api/users', uc.getUsers);
app.delete('/api/logout', uc.logout);
// team
app.post('/api/teamSignup', tc.create);
app.get('/api/teams/:id', tc.getTeam);
app.delete('/api/deleteTeamMember/:id', tc.deleteTeamMember);
app.get('/api/allTeams', tc.getAllTeams);
app.get('/api/teamMembers/:id', tc.getTeamMembers);
