const { getBestChallenge } = require('../controllers/utils');
const types = require('../config/types.json');

describe('Utils', function() {

  let mockChallanges;

  const newUser = (score) => ({
    username: 'mitja',
    lolMMR: score,
    dota2MMR: score
  });

  beforeEach(function() {
    mockChallanges = [
      { id: 'A', User: { lolMMR: 1100, dota2MMR: 1100 } },
      { id: 'B', User: { lolMMR: 1500, dota2MMR: 1500 } },
      { id: 'C', User: { lolMMR: 3200, dota2MMR: 3200 } },
      { id: 'D', User: { lolMMR: 4100, dota2MMR: 4100 } }
    ];
  });

  describe('getBestChallenge', function() {

      it('should be able to find exact match', function() {
        const userScore = 3200;
        const gameType = 'lolMMR';

        const bestMatch = getBestChallenge(
          newUser(userScore), gameType, mockChallanges
        );

        expect(bestMatch.id).equal('C');
        expect(bestMatch.User[gameType]).equal(userScore);
      });

      it('should be able to find by range', function() {
        const gameType = 'dota2MMR';
        const bestMatch = getBestChallenge(
          newUser(1200), gameType, mockChallanges, 500
        );

        expect(bestMatch.id).equal('B');
        expect(bestMatch.User[gameType]).equal(1500);
      });

      it('should be able to get highest match', function() {
        const gameType = 'dota2MMR';

        const bestMatch = getBestChallenge(
          newUser(1200), gameType, mockChallanges, 2000
        );

        expect(bestMatch.id).equal('C');
        expect(bestMatch.User[gameType]).equal(3200);
      });

  });

});
