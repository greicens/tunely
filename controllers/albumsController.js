// controllers/albumsController.js
var db = require('../models');

function index(req, res) {
  db.Album.find({}, function(err, albums) {
    if(err){ return console.log("index error: " + err);}
  res.json(albums);
});
}

// POST /api/albums
function create(req, res) {
  // create an album based on request body and send it back as JSON
  var newAlbum = new db.Album(req.body);

  newAlbum.save(function(err, savedAlbum) {
    if(err) {
      res.status(500).send('database error');
      return console.log("error ", err);
    } else {
      res.json(savedAlbum);
    }
  });
}

// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
}
