var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  module.exports.Song = require('./song');

var AlbumSchema = new Schema({
  name: String,
  artistName: String,
  releaseDate: String,
  genres: [String],
  songs: [Song.schema]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
