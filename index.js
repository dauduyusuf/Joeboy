/**** Code By Daudu Yusuf *****/

// AOS
AOS.init({
	easing: 'ease-in-out-sine',
});

// Gallery
$('#nanogallery2').nanogallery2({
	items: [
		{
			src: './src/images/joeboy5.jpg',
			srct: './src/images/joeboy5.jpg',
		},
		{
			src: './src/images/Joeboy Hints.jpg',
			srct: './src/images/Joeboy Hints.jpg',
		},
		{
			src: './src/images/Joeboy Releases.jpg',
			srct: './src/images/Joeboy Releases.jpg',
		},
		{
			src: './src/images/joeboyofficial.jpg',
			srct: './src/images/joeboyofficial.jpg',
		},
		{
			src: './src/images/joebogrid.jpg',
			srct: './src/images/joebogrid.jpg',
		},
		{
			src: './src/images/joeboy4.jpg',
			srct: './src/images/joeboy4.jpg',
		},
	],
	thumbnailWidth: 400,
	thumbnailHeight: 320,
});

// FUNCTIONS
function openMenu() {
	$('#sideBar').fadeToggle();
	$('#toggleBtn').toggleClass('close');
	if (!$('#toggleBtn').hasClass('close')) {
		$('#intro .social-menu')
			.css('right', 'unset')
			.animate({ left: '20px' }, 'slow');
	} else {
		$('#intro .social-menu')
			.animate({ right: '30px' }, 'slow')
			.css('left', 'unset');
	}
}
$('#song > div').on('click', function () {
	if ($('.songlinks').hasClass('fadeInUp')) {
		$('.songlinks').addClass('fadeOutDown');
	}
	$(this).find('.songlinks').toggleClass('fadeOutDown fadeInUp');
});
// EVENTS
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 750) {
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
