/* -- QUOTE ROTATOR (QR) -- */

$(function() {

	var count = 1;


	var qrSlides = $('.quoteRotator-theQuotesContainer').find('div.quoteRotator-theQuotes');

	window.setInterval(function(){
		moveSlide();
		console.log('quote rotator is working');
	}, 6000);

	 function moveSlide(){

	 	$('.qrInUseAnimTwo').removeClass('qrInUseAnimTwo');

	var currentQuote = $('.qrBeingUsed');
		nextQuote = $('.qrNext');
		lastQuote = $('.qrNone');
		
		$('.qrInUse').removeClass('qrInUse');
		
		count++;
		$('.circ-' + count).addClass('qrInUseAnimTwo').addClass('qrInUse');

		if(count === 3) {
			count = 0;
		}

	currentQuote.animate({marginLeft: '100%'}, 300, 'easeInQuint', function() {
		
		currentQuote.removeClass('qrBeingUsed');
		currentQuote.css({marginLeft: '0%'}).addClass('qrNone');

    	lastQuote.removeClass('qrNone').addClass('qrNext').css({marginLeft: '-200%'});

    	nextQuote.animate({marginLeft: '0%'}, 300, 'easeOutQuint', function() {
		nextQuote.removeClass('qrNext').addClass('qrBeingUsed');
	
		});
	});
	
	}

});