jQuery(document).ready(function ($) {
	 "use strict"

	// main-Slider
	if ($('#slider1').length > 0) {
		$('#slider1').sliderPro({
			forceSize: 'fullWindow',
			height: 600,
			arrows: true,
			buttons: false,
			autoplay: true,
	      	autoplayTimeout:400,
			autoScaleLayers: true,
			waitForLayers: false,
			fade: true,
			fadeArrows: true
		});
	}	 

	// property-slider  
	if ($('.product-slides').length > 0) {
	  $('.product-slides').owlCarousel({
	      items:1,
	      loop:true,
	      margin:0,
	      autoplay:false,
          animateOut: 'fadeOut',
	      autoplayTimeout:5000,
	      autoplayHoverPause: true,
	      dots:false,
	      nav:true,
	      navText:['<i class="perch-angle-left "></i>', '<i class=" perch-angle-right"></i>'],	      
	  });
	} 


	  // Main Menu	
	  $(".cssmenu").each(function(){
	      var title = ($(this).data('title'))? $(this).data('title') : "Menu";
	      $(this).menumaker({
	        title: title,
	        format: "multitoggle"
	      });
	  }) 
 
 
	// fitVids video
    if($(".responsive-video").length > 0){
		$(".responsive-video").fitVids();
	}

	 // Sticky Header 
     $(".sticky-on").sticky({topSpacing: 0});
 
	// Sectionize-Control
	if ($('select').length > 0) {
		$('select').selectize({
			create: true,
			sortField: {
				field: 'text',
				direction: 'asc'
			},
			dropdownParent: 'body'
		});
	}
  
 
	// Magnific Popup
	$('.flooor-level-image-holder, .photo-gallery, .property-slide-item').magnificPopup({
		delegate: '.large-size',
		type: 'image',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			easing: 'ease-in-out',
			duration: 300,
			opener: function(element) {
				return element.closest('.flooor-level-image-holder, .photo-gallery, .property-slide-item').find('img');
			}
		}
	});
 
	//Account Setting Menu
	if ($('#account-setting').length > 0) {
			var offset = $('#account-setting').offset();
			$('html,body').animate({scrollTop: offset.top -100},500);
		
	}

	// Scroll To Top
	if ($('.scroll-top').length > 0) {
		$(".scroll-top").on( "click", function(){
			$('html,body').animate({scrollTop:0},1000);
		});

		$(window).scroll(function(){
			if($(window).scrollTop() > 400){
				$(".scroll-top").fadeIn();
			}
			else{
				$(".scroll-top").fadeOut();
			}
			return false;
		});
	}
	// Scroll To Top
	if ($('.product-arro-down').length > 0) {
		$(".product-arro-down").on( "click", function(){
			$('html,body').animate({scrollTop:0},100);
		});
	}
	// WOW JS
	// Use in Html <div class="wow fadeInUp" data-wow-duration="5s" data-wow-delay=".01s">...</div>
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	    },
	    scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	);
	wow.init();

	// slideToggle
 	$("#submit").click(function(){
        $("#text").	slideToggle("slow");
    }); 

 	// Tooltipz
    $('[data-toggle="tooltip"]').tooltip(); 

  	if ($('#dynamic-table').length > 0) {
    	$('#dynamic-table').DataTable();
	}
          
	// Scroll To Top
	if ($('.scroll-top').length > 0) {
		$(".scroll-top").click(function(){
			$('html,body').animate({scrollTop:0},1000);
		});

		$(window).scroll(function(){
			if($(window).scrollTop() > 400){
				$(".scroll-top").fadeIn();
			}
			else{
				$(".scroll-top").fadeOut();
			}
			return false;
		});
	} 

		// Back To Login
	if ($('.login-reg').length > 0) {
		$( "#back-login-form" ).click(function() {			
		  $( "#change-password" ).hide("slow");
		  $( "#hide-login-form" ).show("slow");
		});
	}

		//  Registration
	if ($('.login-reg').length > 0) {
		$( "#open-registration-form" ).click(function() {
		  $( "#hidden-registration-form" ).show("slow");
		  $( "#hide-login-form" ).hide("slow");
		});
	}

	// Login 
	if ($('.login-reg').length > 0) {
		$( "#open-login-form" ).click(function() {
		  $( "#hidden-registration-form" ).hide("slow");
		  $( "#hide-login-form" ).show("slow");
		});
	}

	// Change Password
	if ($('.login-reg').length > 0) {
		$( "#open-change-password-form" ).click(function() {
		  $( "#change-password" ).show("slow");
		  $( "#hide-login-form" ).hide("slow");
		});
	}


});
// End Ready Function

