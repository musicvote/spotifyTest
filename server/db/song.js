const Sequelize = require('sequelize')
const db = require('./database')

const Song = db.define('song', {
  songSpotifyId: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING
  },
  voteCount: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})


module.exports = Song
