/**** Code By Daudu Yusuf *****/

// AOS
AOS.init({
	easing: 'ease-in-out-sine',
});
// Instastory


// FUNCTIONS
function openMenu() {
	$('#mobilemenu').slideToggle(800);
	$('#mobilemenu').removeClass('hide');
	$('#toggleBtn').toggleClass('close');
}

// EVENTS
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 2000) {
			$('#backtoTop').addClass('animated zoomInUp');
			$('#backtoTop').css('display', 'grid');
			$('#backtoTop').removeClass('zoomOutDown');
		} else {
			$('#backtoTop').removeClass('animated zoomInUp');
			$('#backtoTop').addClass('animated zoomOutDown');
		}
	});
	// PRELOADER
	setTimeout(() => {
		$('#preloader').css('display', 'none');
	}, 3000);
	// MENU BUTTONS
	$('#toggleBtn').on('click', openMenu);
	$('#mobilemenu .navLink').on('click', function () {
		openMenu();
		let target = $(this).attr('href');
		$(target).animatescroll({ scrollSpeed: 2000 });
	});
	$('.site-menu .nav-link').on('click', function () {
		let target = $(this).attr('href');
		$(target).animatescroll();
	});
	// BacktoTop
	$('#backtoTop').on('click', function () {
		$('header').animatescroll({ scrollSpeed: 2000 });
	});
});
