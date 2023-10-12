
function handleBox(box, event) {
    boxID = ($(box).attr('name'));
    if (event.type == 'mouseenter' || event.type == 'click'){
      $('.light-box').addClass(boxID + '-hover');
      $('.' + boxID + '-box').addClass(boxID + '-content-hover to-top');
    } else if (event.type == 'mouseleave') {
      $('.light-box').removeClass(boxID + '-hover');
      $('.' + boxID + '-box').removeClass(boxID + '-content-hover to-top');
    } else if (event.type == 'click') {
      $('.light-box').toggleClass(boxID + '-hover');
    }
  }
  
  $('.box').on('click mouseenter mouseleave', function(event) {
    handleBox(this, event);
  });
  
  $(document).ready(function() {
    $('.light-box').addClass('top-hover');
  });