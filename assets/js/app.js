window.addEventListener('load', myInit, true);

function myInit(){
  Typing();
  Accordion();    
}

function Accordion(){
  $('.question > .question-item > .question-item__body').hide();
      
    $('.question > .question-item .question-item__header').click(function() {
      const item = $(this).parent();
      if (item.hasClass("active")) {
        item.removeClass("active").find(".question-item__body").slideUp();
      } else {
        $(".question > .question-item.active .question-item__body").slideUp();
        $(".question > .question-item.active").removeClass("active");
        item.addClass("active").find(".question-item__body").slideDown();
      }
      return false;
    });
    
    $('.question > .question-item.active').find(".question-item__body").css('display','block');
}

function openMenu(){
  const menu = document.querySelector('.vertical-menu');
  menu.classList.add('toggle-menu');      
}

function closeMenu(){
  const menu = document.querySelector('.vertical-menu');
  menu.classList.remove('toggle-menu');      
}