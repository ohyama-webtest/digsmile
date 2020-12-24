$(function(){
  $('.nav-right').click(function(){
    $(this).toggleClass('active');

    if($(this).hasClass('active')){
      $('.nav-open').addClass('open');
      $('.nav-open').removeClass('close');
    } else {
      $('.nav-open').removeClass('open');
      $('.nav-open').addClass('close');
    }
  });
});
