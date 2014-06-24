$(".topImage").css('width', '50%');
$(".beforeAfterSlidebar").mousemove(
function(e) {
  // get the mouse x (horizontal) position and offset of the div
  var offset =  $(this).offset();
  var iTopWidth = (e.pageX - offset.left);

  // set width of bottomimage div
  $(this).find(".topImage").width(iTopWidth);
}
);