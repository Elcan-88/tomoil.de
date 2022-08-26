$(document).ready(function(){
    $('.question > .question-item > .question-item__body').hide();
      
    $('.question > .question-item').click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".question-item__body").slideUp();
      } else {
        $(".question > .question-item.active .question-item__body").slideUp();
        $(".question > .question-item.active").removeClass("active");
        $(this).addClass("active").find(".question-item__body").slideDown();
      }
      return false;
    });
    
    $('.question > .question-item.active').find(".question-item__body").css('display','block');
});