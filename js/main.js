(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function () {
		$('.featured-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 30,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
			responsive: {
				0: {
					items: 1
				},
				// 600: {
				// 	items: 2
				// },
				950: {
					items: 1
				},
				1000: {
					items: 3
				}
			}
		});

	};
	carousel();

	var carousel1 = function () {
		$('.featured-carousel1').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 30,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
			responsive: {
				0: {
					items: 1
				},
				// 600: {
				// 	items: 2
				// },
				950: {
					items: 1
				},
				1000: {
					items: 3
				}
			}
		});

	};
	carousel1();

	var carousel2 = function () {
		$('.featured-carousel2').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 30,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
			responsive: {
				0: {
					items: 1
				},
				// 600: {
				// 	items: 2
				// },
				950: {
					items: 1
				},
				1000: {
					items: 3
				}
			}
		});

	};
	carousel2();

	var carousel4 = function () {
		$('.featured-carousel4').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 30,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
			responsive: {
				0: {
					items: 1
				},
				// 600: {
				// 	items: 2
				// },
				950: {
					items: 1
				},
				1000: {
					items: 3
				}
			}
		});

	};
	carousel4();

	var carousel3 = function () {
		$('.featured-carousel3').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 30,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
			responsive: {
				0: {
					items: 1
				},
				950: {
					items: 1
				},
				1000: {
					items: 2
				}
			}
		});

	};
	carousel3();

})(jQuery);

function custom2NavigationRight() {
	$('.featured-carousel2').owlCarousel().trigger('next.owl.carousel', [300]);
}
function custom2NavigationLeft() {
	$('.featured-carousel2').owlCarousel().trigger('prev.owl.carousel', [300]);
}


function customNavigationRight() {
	$('.featured-carousel').owlCarousel().trigger('next.owl.carousel', [300]);
}
function customNavigationLeft() {
	$('.featured-carousel').owlCarousel().trigger('prev.owl.carousel', [300]);
}


// function custom1NavigationRight() {
// 	$('.featured-carousel1').owlCarousel().trigger('next.owl.carousel', [300]);
// }
// function custom1NavigationLeft() {
// 	$('.featured-carousel1').owlCarousel().trigger('prev.owl.carousel', [300]);
// }


function custom4NavigationRight() {
	$('.featured-carousel4').owlCarousel().trigger('next.owl.carousel', [300]);
}
function custom4NavigationLeft() {
	$('.featured-carousel4').owlCarousel().trigger('prev.owl.carousel', [300]);
}


function custom3NavigationRight() {
	$('.featured-carousel3').owlCarousel().trigger('next.owl.carousel', [990]);
}
function custom3NavigationLeft() {
	$('.featured-carousel3').owlCarousel().trigger('prev.owl.carousel', [990]);
}