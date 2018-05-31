const $geometricImage = $('img');

$geometricImage.click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
     $('img').addClass('big-image');
  } else {
     $('img').removeClass('big-image');
  }
  $(this).data("clicks", !clicks);
});
