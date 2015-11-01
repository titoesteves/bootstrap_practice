$(document).ready(function() {
  $('section#screenshots a').on('click', function() {
    console.log('test')
    $('div#modal img').attr('src', $(this).attr('data-image-url'));
  });
});
