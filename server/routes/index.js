const _ = require('lodash');
const { User } = require('../models');
const { match } = require('../controllers');

module.exports = (app) => {

  app.use('/api', (req, res, next) => {
    const token = _.trim(req.get('AUTH-TOKEN'));
    const errorHandler = () => res.status(404).send();

    if (!(token.length)) {
      errorHandler();
    }

    User
      .findOne({
        where: {
          sessionToken: token
        }
      })
      .catch(errorHandler)
      .then((user) => {
        if (!user) {
          errorHandler();
        }
        else {
          req.user = user
          next();
        }
      });
  });

  app.get('/api', (req, res) => res.status(200).send({ message: 'GameMatch API' }));
  app.get('/api/match/:game', match.retrieve);

};
