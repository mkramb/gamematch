const _ = require('lodash');
const { getBestChallenge } = require('./utils');
const { User, Challenge } = require('../models');
const types = require('../config/types.json');

module.exports = {

  retrieve(req, res) {
    const gameType = _.toLower(req.params.game);
    const gameIndex = _.indexOf(
      _.keys(types.games), gameType
    );

    if (gameIndex < 0) {
      return res.status(404).send();
    }

    return Challenge.findAll({
      include: [{
        model: User
      }],
      where: {
        id: { $ne: req.user.id },
        game: types.games[gameType]
      },
      order: [
        ['createdAt', 'ASC']
      ]
    })
      .catch((error) => res.status(400).send(error))
      .then((challenges) => {
        const game = types.userMMR[gameType];
        const challenge = getBestChallenge(
          req.user, game, challenges, types.gameThreshold
        );

        res.status(200).json({
          id: challenge.id,
          game: challenge.game,
          stake: challenge.stake,
          username: challenge.User.username,
          mmr: challenge.User[game],
          createdAt: challenge.createdAt
        });
      });
  }

};
