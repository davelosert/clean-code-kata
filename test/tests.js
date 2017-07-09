describe('Twin-Button-Hoverer', () => {
	let $absageButton;
	let $zusageButton;

	beforeEach(() => {
		loadFixtures('buttonHover.html');

		$absageButton = $('.buAb');
		$zusageButton = $('.buZu');
	});

	it('does nothing if button was clicked before', () => {
		$absageButton.addClass("set");

		let previousWidth = $absageButton.width();
		$absageButton.mouseenter();
		let currentWidth = $absageButton.width();

		expect(previousWidth).toEqual(currentWidth);
	});

	it('enlarges hovered button', (done) => {
		$absageButton.mouseenter();
		setTimeout(() => {
			expect($absageButton.width()).toEqual(135);
			done();
		}, 120)
	});

	it('adds "activate" class to hovered button', () => {
		$absageButton.mouseenter();
		expect($absageButton).toHaveClass('activate');
	});

	it('minimizes the not hovered button', (done) => {
		$absageButton.mouseenter();
		setTimeout(() => {
			expect($zusageButton.width()).toEqual(15);
			done();
		}, 120);
	});
});
