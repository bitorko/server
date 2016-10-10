const institutions = require('./api/institution');
const motionTypes = require('./api/motion-type');
const persons = require('./api/person');
const teams = require('./api/team');
const tournaments = require('./api/tournament');
const users = require('./api/user');
const auth = require('./auth');
const signedUrl = require('./components/signing');

module.exports = (app) => {
  app.use('/institutions', institutions);
  app.use('/motion_types', motionTypes);
  app.use('/persons', persons);
  app.use('/tournaments', tournaments);
  app.use('/teams', teams);
  app.use('/users', users);

  app.get('/components/get_signed_url', signedUrl);
  app.use('/auth', auth);

  app.use((err, req, res, next) => {
    if (err) {
      res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
    } else {
      next();
    }
  });
};
