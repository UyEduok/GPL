
$(document).ready(function() {

  const backToTopButton = document.getElementById('backToTopButton');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      backToTopButton.style.display = 'block';

    } else {
      backToTopButton.style.display = 'none';
    }
  });
});


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


document.addEventListener('DOMContentLoaded', function () {
 
  const tNav = document.querySelector('.t-nav');
  const dropItems = document.querySelectorAll('.drop-item');


  dropItems.forEach((item) => {
    item.addEventListener('mouseover', function () {

      tNav.classList.add('add-background-color');
    });

    item.addEventListener('mouseout', function () {
    
      tNav.classList.remove('add-background-color');
    });
  });
});

$(document).ready(function () {

  $('#carouselExampleIndicators').carousel();


  $('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {
    var activeSlide = $(event.relatedTarget);
    var titleElement = activeSlide.find('.carousel-slide-in-top');
    var textElement = activeSlide.find('.carousel-slide-in-bottom');


    titleElement.addClass('carousel-slide-in-top');
    textElement.addClass('carousel-slide-in-bottom');

    
    titleElement.siblings('.carousel-slide-in-top').removeClass('carousel-slide-in-top');
    textElement.siblings('.carousel-slide-in-bottom').removeClass('carousel-slide-in-bottom');
  });
});


document.addEventListener("DOMContentLoaded", function () {

  setTimeout(function () {
     
      document.getElementById("splash-logo").style.opacity = 0;
      setTimeout(function () {
          document.getElementById("splash-logo").style.display = "none";
          document.getElementById("main-content").style.display = "block";
      }, 1000); 
  }, 1000);
});



