require('dotenv').config({ path: __dirname + '/../.env' });
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const uc = require('./controllers/userController');
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();
app.use(express.json());

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
massive(CONNECTION_STRING).then(db => {
    console.log('db connection successful');
    app.set('db', db);
  });
  
  app.post('/api/signup', uc.signup);
  app.post('/api/login', uc.login);

  app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));