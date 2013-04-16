
$(function() {

	// CHECK FOR MOBILE

	var mobileCheck = $('.mobile');
		isMobile = true;
		if(mobileCheck.css('display') === 'block') {
			isMobile = false;
		}
	
	// MOBILE BOOKING MENU



	setInterval(function() {
		bannerSlide();
		rotateText();
	}, 6000);

	// BANNER IMG ROTATOR

	function bannerSlide() {
	
		var currentSL = $('.currentSL');
			nextSL = $('.nextSL');
			hiddenSL = $('.hiddenSL');

		if(!isMobile) {
			currentSL.transition({backgroundPosition: 550 }, 500, 'easeInSine', function() {
			currentSL.css({backgroundPosition: 0}).removeClass('currentSL').addClass('hiddenSL');
			nextSL.addClass('currentSL').removeClass('nextSL');
			hiddenSL.removeClass('hiddenSL').addClass('nextSL');
		});	
		}
		else {
			currentSL.transition({backgroundPosition: 1550 }, 500, 'easeInSine', function() {
			currentSL.css({backgroundPosition: 0}).removeClass('currentSL').addClass('hiddenSL');
			nextSL.addClass('currentSL').removeClass('nextSL');
			hiddenSL.removeClass('hiddenSL').addClass('nextSL');
			});	
		}

		
	}

	// FITVID.JS INIT

	$('.videoContainer').fitVids();	
	
	

	// IMG ROLLOVERS

	var imgA = $('img.a');

	imgA.hover(
		function() {
			$(this).stop().animate({opacity: '0.0'}, 200);
	},	function() {
			$(this).stop().animate({opacity: '1.0'}, 200);
	});

	// MAIN NAV ROLLOVERS

	var lineTop = $('<div class="navLineTop"> </div>');
		lineBottom = $('<div class="navLineBottom"> </div>');

	$('.main li').append(lineTop).append(lineBottom);

	$('.main li').hover(
		function() {
			$(this).find($('.navLineTop, .navLineBottom')).stop().animate({height: '0.3em'}, 200);
	},  function() {
			$('.navLineTop, .navLineBottom').stop().animate({height: '0em'}, 200);
	})

	// SHOW BOOKING OPTIONS

	var bookButton = $('#bookButton');
		bannerOverlay = $('.bannerOverlay');

	bannerOverlay.hover(function() {
		bannerOverlay.stop().animate({height: '8.5em'}, 300);
		$('.bookingList').stop().css({
			opacity: '0',
			display: 'block',
			marginLeft: '-6em'
		}).animate({
			opacity: '1',
			marginLeft: '0em'
			}, 500);
	}, function() {
		bannerOverlay.stop().animate({height: '4em'}, 500);
		$('.bookingList').stop().animate({
				opacity: '0',
				marginLeft: '-6em'
			}).css({
				opacity: '0',
				marginLeft: '0em'
			})
	});

	bookButton.click(function() {
		if((isMobile) && (bannerOverlay.height > 300)) {
			console.log('its already been clicked');
		}
	})

	// TEXT ROTATOR

	var elRot = $('.textRotator').find('span');

	function rotateText() {
		var current = $('.current');
			next = $('.next');
			hidden = $('.hidden');

		current.animate({opacity: '0'}, 450, function() {
			next.animate({opacity: '1'}).removeClass('next').addClass('current');
			hidden.removeClass('hidden').addClass('next');
			current.removeClass('current').addClass('hidden');
		});
	}

	// MEDIA PAGE IMG ROLLOVER HANDLING

	var galleryIMG = $('div.photoGallery img');
	var gallery = $('.photoGallery');

	galleryIMG.hover(
		function() {
			
			var $this = $(this);

			$(this).removeClass('photoGalleryImg');
			$('.photoGalleryImg').stop().animate({opacity: '0.5'}, 200);

		},
		function() {
			$('.photoGalleryImg').stop().animate({opacity: '1'}, 200);
			$(this).addClass('photoGalleryImg');
		})

	// fancybox

	$(".fancybox").fancybox();

});
