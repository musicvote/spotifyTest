//get one song
const router = require('express').Router();
const Song = require('../db/models/Songs');

//get song by ID
//api/songs
router.get('/', async (req, res, next) => {
  try {
    const songList = await Song.findAll();
    res.status(200).send(songList);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
