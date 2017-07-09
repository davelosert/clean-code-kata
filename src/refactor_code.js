var body = $('body');
/*
 SLIDE BUTTON FOR ADDITION PROGRAMS
 Button Slides on hover to 85% total width. The not hovered one get smaler
 The Clicked Button get 100% total width. The other one is hidden.
 Anotherclick will show up the other button, and hide the visible one
 */
body.on('mouseover', '.additional_program a', function (e) {
	// class set shows when button was clicked
	if (!$(this).hasClass('set')) {
		$(this).stop(true, false).animate({
			width: '135px'
		}, 100).addClass('activate');
		if ($(this).hasClass('buZu')) {
			var $buAb = $(this).parent().find('.buAb');
			$buAb.stop(true, false).animate({
				width: '15px'
			}, 100)
		}
		if ($(this).hasClass('buAb')) {
			var $buZu = $(this).parent().find('.buZu');
			$buZu.stop(true, false).animate({
				width: '15px'
			}, 100)
		}
	}
});

