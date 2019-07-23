const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  login: async function(req, res) {
    let { username, password } = req.body;
    const db = req.app.get('db');
    let [existingUser] = await db.get_user_by_username(username);
    if (!existingUser) return res.status(401).send('Username not found');
    let result = await bcrypt.compare(password, existingUser.password);
    if (result) {
      req.session.user = {
        username: existingUser.username,
        id: existingUser.id,
        loggedIn: true
      };
      res.send(req.session.user);
    } else res.status(401).send('Username or password incorrect');
  },
  async signup(req, res) {
    let { username, password, email, image, back_img } = req.body;
    console.log('body', username);
    const db = req.app.get('db');
    let [existingUser] = await db.get_user_by_username([username]);
    if (existingUser) return res.status(400).send('Username already exists');
    let salt = await bcrypt.genSalt(saltRounds);
    let hash = await bcrypt.hash(password, salt);
    console.log('hit user creation');
    let [user] = await db.create_user([username, hash, email, image, back_img]);
    console.log('hit user creation 2', user);
    req.session.user = { username: user.username, email, image, back_img, id: user.id, loggedIn: true };
    console.log('hit user creation 3', req.session.user);
    res.send(req.session.user);
  },
  async logout(req, res) {
    req.session.destroy();
    res.sendStatus(200);
  },
  getUser(req, res) {
    res.send(req.session.user);
  }
};
