
$(function() {

	// FITVID.JS INIT

	$('.mainContent').fitVids();

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

	// TEXT ROTATOR 

	var elRot = $('.textRotator').find('span');

	setInterval(function() {
	
	console.log('set interval is working');

		var current = $('.current');
			next = $('.next');
			hidden = $('.hidden');

		current.animate({opacity: '0'}, 450, function() {
			next.animate({opacity: '1'}).removeClass('next').addClass('current');
			hidden.removeClass('hidden').addClass('next');
			current.removeClass('current').addClass('hidden');
		});

	}, 6000);


	
});