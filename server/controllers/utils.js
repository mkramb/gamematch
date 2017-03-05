const _ = require('lodash');
const { BinarySearchTree } = require('binary-search-tree');

const getBestChallenge = (user, gameType, challenges, threshold) => {
  const tree = new BinarySearchTree();

  _.each(challenges, (challenge) => {
    tree.insert(challenge.User[gameType], challenge);
  });

  const userMMR = user[gameType];
  const matches = tree.betweenBounds({
    $gte: (userMMR - (threshold || 0)),
    $lte: (userMMR + (threshold || 0))
  });

  return _.last(matches);
};

module.exports = {
  getBestChallenge
};
