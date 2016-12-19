var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  title: String,
  artist: String
});
