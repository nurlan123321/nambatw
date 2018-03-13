$(document).ready(function(){
	$(".gallery-slider").owlCarousel(
        {
        pagination : true,
        autoPlay : 3000,
        itemsDesktop  :  [1500,4],
        itemsDesktopSmall :  [979,3]
        }
    );

    // Gallery Popup
    $('.image-popup').magnificPopup({type:'image'});
})