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

});

function onSuccess(json) {
  json.forEach(function(album) {
    console.log(album);
    renderAlbum(album);
  });
}

function onError(err) {
    console.log(err);
}

// this function takes a single album and renders it to the page
function renderAlbum(albumInput) {
  console.log('rendering album:', albumInput);

  var albumHtml = template({ album: albumInput});
  $albumsList.append(albumHtml);

}
