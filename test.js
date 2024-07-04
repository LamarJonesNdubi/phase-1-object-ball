// Alright..lets import from oblectball..
const {
    gameObject,
    numPointsScored,
    shoeSize,
    teamColors,
    teamNames,
    playerNumbers,
    playerStats,
    bigShoeRebounds,
    mostPointsScored,
    winningTeam,
    playerWithLongestName,
    doesLongNameStealATon
  } = require('./src/00-objectball');
  
  console.log(gameObject());
  console.log(numPointsScored("Ben Gordon")); // Should return 33
  console.log(shoeSize("Mason Plumlee")); // Should return 19
  console.log(teamColors("Charlotte Hornets")); // Should return ["Turquoise", "Purple"]
  console.log(teamNames()); // Should return ["Brooklyn Nets", "Charlotte Hornets"]
  console.log(playerNumbers("Brooklyn Nets")); // Should return [0, 30, 11, 1, 31]
  console.log(playerStats("Alan Anderson")); 
  // Should return {number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1}
  console.log(bigShoeRebounds()); // Should return 12
  console.log(mostPointsScored()); // Should return "Ben Gordon"
  console.log(winningTeam()); // Should return "Brooklyn Nets" or "Charlotte Hornets" depending on total points calculation
  console.log(playerWithLongestName()); // Should return the player with the longest name
  console.log(doesLongNameStealATon()); // Should return true or false
  