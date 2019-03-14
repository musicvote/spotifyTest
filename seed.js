const {db, Song} = require('./server/db')
const {green, red} = require('chalk')

const seed = async () => {
  await db.sync({force: true})
  
  const songs = await Promise.all([
    Song.create({songSpotifyId: '6PCUP3dWmTjcTtXY02oFdT', title: 'Castle on the Hill', artist: 'Ed Sheeran', voteCount: 3}),
    Song.create({songSpotifyId: '3Du2K5dLzmduCNp6uwuaL0', title: 'Sorry Not Sorry', artist: 'Demi Lovato', voteCount: 2}),
    Song.create({songSpotifyId: '1uigwk5hNV84zRd5YQQRTk', title: 'Pocketful of Sunshine', artist: 'Natasha Bedingfield', voteCount: 1}),
    Song.create({songSpotifyId: '7BKLCZ1jbUBVqRi2FVlTVw', title: 'Closer', artist: 'The Chainsmokers', voteCount: 1}),
    Song.create({songSpotifyId: '1rfofaqEpACxVEHIZBJe6W', title: 'Havana', artist: 'Camila Cabello', voteCount: 0})
  ])
  
  

  console.log(green(`Seeding success! seeded ${songs.length} songs`))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
