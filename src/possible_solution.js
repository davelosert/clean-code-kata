var body = $('body');

body.on('mouseover', '.additional_program a', function (e) {
	let $link = $(this);

	if (buttonNotClicked()) {
		enlargeCurrentLink();
		shrinkOppositeLink();
	}

	function enlargeCurrentLink() {
		stopAndAnimateToWidth($link, '135px');
		$link.addClass('activate');
	}

	function shrinkOppositeLink() {
		let oppositeLink = findOppositeLink();
		stopAndAnimateToWidth(oppositeLink, '15px');
	}

	function findOppositeLink() {
		let oppositeClass = $link.hasClass('buZu') ? '.buAb' : '.buZu';
		return $link.siblings(oppositeClass);
	}

	function stopAndAnimateToWidth($element, width) {
		$element.stop(true, false).animate({
			width: width
		}, 400);
	}

	function buttonNotClicked() {
		return !$link.hasClass('set');
	}
});
