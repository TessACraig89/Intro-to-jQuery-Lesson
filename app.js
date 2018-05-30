console.log("hello");
const mainButton = $('button');

$(mainButton).click(function() {
  mainButton.html('Hello World!');
});

$('body').append("<address>").append("85 Rainey Street");
