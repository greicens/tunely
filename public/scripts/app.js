/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

var template;
var $albumsList;

$(document).ready(function() {
  console.log('app.js loaded!');

  $albumsList = $("#albums");

  var source = $("#albums-template").html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: onSuccess,
    error: onError
  });

  $("#newAlbumForm").on("submit", function(target) {
    target.preventDefault();
    console.log("new album serialized", $(this).serialize());

    $.ajax({
      method: 'POST',
      url: 'api/albums',
      data: $(this).serialize(),
      success: newAlbumSuccess,
      error: newAlbumError
    });
  });

  $('#albums').on('click', '.add-song', function(e) {
    console.log('add-song clicked!');
    var id= $(this).closest('.album').data('album-id'); // "5665ff1678209c64e51b4e7b"
    console.log('id',id);
    $('#songModal').data('album-id', id);
    $('#songModal').modal('show');
});

  $('#songModal').on('click', '#saveSong', function(el) {
    console.log('saveSong clicked!');
    handleNewSongSubmit(e);
  })

});

function handleNewSongSubmit(e) {
  e.preventDefault();
  $("#saveSong").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var recipient = button.data("album-id");
    console.log(recipient);
    // var modal = $(this);

  })
}

function onSuccess(json) {
  json.forEach(function(album,i) {
    renderAlbum(album);
  });
}

function onError(err) {
    console.log(err);
}

function newAlbumSuccess(json) {
  console.log("album created" + json);
}

function newAlbumError(err) {
  console.log(err);
}

// this function takes a single album and renders it to the page
function renderAlbum(albumInput) {
  console.log('rendering album:', albumInput);

  var albumHtml = template({ album: albumInput});

  $albumsList.append(albumHtml);

}
