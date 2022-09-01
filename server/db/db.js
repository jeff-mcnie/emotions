const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

async function getTheEntries(db = connection) {
    return db('entries').select('id', 'song_link AS songLink', 'song_text AS songText', 'has_image AS hasImages', 'image', 'image_text AS imageText' )
} 

module.exports = {
  getTheEntries,
}