/* ============ OWL ============ */
// Owl Carousel DOM Elements
var carousel1 = '.js-carousel-1';
var carousel2 = '.js-carousel-2';

// Initialize plugin
var owlCarousel1 = $(carousel1).owlCarousel({
  items: 1,
  dots: true,
  dotsData: true,
});
var owlCarousel2 = $(carousel2).owlCarousel({
  items: 1,
  dots: false,
});

// Sync carousel & add current class
carouselSyncCurrentClass();

// On carousel change: Sync carousel & add current class
owlCarousel1.on('changed.owl.carousel', function() {
  carouselSyncCurrentClass();
});
owlCarousel2.on('changed.owl.carousel', function(event) {
  carouselSyncCurrentClass();
});

// Thumbs switch click event.
owlCarousel2.find('.item').click(function() {
  var itemIndex = $(this).parent().index();
  owlCarousel1.trigger('to.owl.carousel', itemIndex);
  carouselSyncCurrentClass();
});

function carouselSyncCurrentClass() {
  setTimeout(function() {
    var carousel1ActiveIndex = $('.js-carousel-1 .owl-item.active').index();
    $('.js-carousel-2 .owl-item').removeClass('current');
    var currentItem = $('.js-carousel-2 .owl-item:nth-child(' + (carousel1ActiveIndex + 1) + ')');
    currentItem.addClass('current');

    if (!currentItem.hasClass('active')) {
      if (currentItem.prevAll('.active').length > 0) {
        owlCarousel2.trigger('next.owl.carousel');
      }
      if (currentItem.nextAll('.active').length) {
        owlCarousel2.trigger('prev.owl.carousel');
      }
    }
  }, 100);
}



// OWL 2
