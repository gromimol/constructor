$(document).ready(function () {
	// Dropdown menu in header
	$(function() {
		var touch = $('.js-dropdown-link');
		var menuWrapper = $('.header__options');
		var w = $(window).width();

		$('html').click(function() {
			menuWrapper.find('.js-dropdown').slideUp(0);
		});

		menuWrapper.click(function(e) {
			e.stopPropagation();
		});

		$(touch).on('click', function(e) {
			e.preventDefault();
			var menu = $(this).closest('li').find('.js-dropdown');
    		var isClosed = menu.is(':hidden'); 

    		menuWrapper.find('.js-dropdown').slideUp(0); 

    		if (isClosed) {
    			menu.slideDown(0);
		    }
		});

	});

	// Toggle height for header
	$('.js-toggle-header').on('click',function (e) {
		e.preventDefault();

		$(this).toggleClass('active');
		$('body').toggleClass('show-right-sidebar');
		$('body').toggleClass('min-header');
	});

	// Toggle right sidebar
	$('.js-sidebar').on('click',function (e) {
		e.preventDefault();

		$(this).toggleClass('active');
		$('.edit-page__aside__right').toggleClass('active');
	})

	// NiceScroll
	$(".gallery-block").niceScroll();
	$(".edit-page__content").niceScroll();
	$(".project-slider__nav.slick-slider").niceScroll();
	$(".project-slider__nav .slick-list").niceScroll();
	$(".part-list").niceScroll();
	$(".edit-page__aside__right .tab-content").niceScroll();
	$(".edit-page__aside__slider").niceScroll();

	// Decor
	$('.decor-block').on('click', function () {
		$(this).addClass('hide');
		
	});

	// show\hide filter
	$('.filter-toggle').on('click',function () {

		$(this).toggleClass('active');
		$(this).closest('.filter-line').toggleClass('active');
		$('body').toggleClass('filter-open');
	});

	// toggle img

	$('.img-switcher').on('click',function () {

		$(this).toggleClass('active');
		$(this).closest('.theme__item').find('.theme__img').toggleClass('img-group');
	});

	// Change title on preview's click
	$('.models-slider__nav__content').on('click',function () {
		var itemTitle = $(this).find('.name').text(),
		    itemDescr = $(this).find('.text').text();

		$('.content__aside__title').text(itemTitle);
		$('.content__aside__descr').text(itemDescr);
	});

	// tab
	$('.js-tab-list').on('click', 'li', function () {
		var item = $(this).index();

		$('.js-tab-list li').removeClass('active');
		$(this).addClass('active');

		$(this).closest('.tab-wrapper').find('.tab-content').removeClass('active');
		$(this).closest('.tab-wrapper').find('.tab-content').eq(item).addClass('active');
	});

	// Just toggle class for show how work save-btn
	$('.save-btn').on('click',function () {
		$(this).toggleClass('active');
	});

	// Just show how is slider
	$('.part-list').on('click', 'a', function (e) {
		e.preventDefault();

		$('.edit-page__aside__slider-wrapper').addClass('active');
	});


	$('html').on('click', function () {
		$('.edit-page__aside__slider-wrapper').removeClass('active');
	});
	$('.close-slider').on('click', function (e) {
		e.preventDefault();

		$('.edit-page__aside__slider-wrapper').removeClass('active');
	});

	$('.edit-page__aside__left').on('click',function (e) {
		e.stopPropagation();
	});


	// Accordeon
	$('.js-accordeon-title').on('click',function () {
		$(this).closest('.accordeon').toggleClass('active');
		// $(this).closest('.accordeon').find('.js-accordeon-content').toggleClass('active');
	});


	// popup
	$('.js-popup').on('click',function (e) {
		e.preventDefault();

		var id = $(this).attr('data-popup');

		$('.js-popup').removeClass('active');
		$(this).addClass('active');

		$('.popup').removeClass('active');
		$('#' + id).addClass('active');

	});

	$('.close').on('click',function (e) {
		e.preventDefault();

		$(this).closest('.popup').removeClass('active');
		$('.js-popup').removeClass('active');
	});

	// Url into input
	$('.js-main-input').on('input',function () {

		var input = $(this).closest('form').find('.js-clone-input');

		input.val($(this).val());
	});

	// Toggle aside
	$('.js-toggle-aside').on('click',function () {

		$(this).toggleClass('active');
		$('body').toggleClass('hide-aside');

		('.part-list').niceScroll();
	});

	
	// Dropdown in sidebar
	// $('.submenu-dots').on('click','.ico', function () {
	// 	$(this).closest('.submenu-block').toggleClass('active');
	// })


	// toggle slider's preview
	$('.js-slider-toggle').on('click',function () {
		$(this).closest('.js-slider-container').toggleClass('active').find('.js-slider-content').slideToggle();
	});

	// slider
	var slider = $(".theme-slider");
	var scrollCount = null;
	var scroll= null;

	



	$(".theme-slider").on('wheel', (function(e) {

		clearTimeout(scroll);
		scroll = setTimeout(function(){scrollCount=0;}, 200);
		if(scrollCount) return 0;
		scrollCount=1;

		if (e.originalEvent.deltaY > 0) {
			$(this).slick('slickNext');
		} else {
			$(this).slick('slickPrev');
		}
	}));


	// models slider
	$('.js-models-slider__with-thumbs').slick({
		asNavFor: '.models-slider__nav',
		arrows: false,
		fade: true
	});

	$('.models-slider__nav').slick({
		asNavFor: '.js-models-slider__with-thumbs',
		slidesToShow: 7,
		focusOnSelect: true,
		infinite: false,
		nextArrow: '<span class="next-slide"><svg id="SVGDoc1" width="6" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"" viewBox="0 0 6 8"><defs></defs><desc>Generated with Avocode.</desc><g><g><path d="M5.83985,3.68756l-4.54583,-3.56062c-0.10581,-0.08158 -0.24567,-0.12682 -0.39487,-0.12682c-0.1502,0 -0.29073,0.04523 -0.39587,0.12682l-0.33412,0.26333c-0.21729,0.17003 -0.21729,0.4475 0,0.61834l3.81751,2.98993v0l-3.82185,2.99235c-0.10481,0.08239 -0.16322,0.19225 -0.16322,0.30978c0,0.11672 0.05841,0.22698 0.16322,0.30937l0.33512,0.26212c0.10481,0.08239 0.24533,0.12803 0.39454,0.12803c0.14954,0 0.29039,-0.04564 0.39587,-0.12803l4.5495,-3.56344c0.10581,-0.0828 0.16289,-0.19306 0.16289,-0.31018c0,-0.11834 -0.05708,-0.22819 -0.16289,-0.31099z" fill="#ffffff" fill-opacity="1"></path></g></g></svg></span>',
		prevArrow: '<span class="prev-slide"><svg id="SVGDoc2" width="6" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"" viewBox="0 0 6 8"><defs></defs><desc>Generated with Avocode.</desc><g><g><path d="M0.16051,3.68756l4.5455,-3.56062c0.10614,-0.08158 0.24633,-0.12682 0.39454,-0.12682c0.15054,0 0.29106,0.04523 0.3962,0.12682l0.33412,0.26333c0.21729,0.17003 0.21729,0.4475 0,0.61834l-3.81718,2.98993v0l3.82152,2.99235c0.10514,0.08239 0.16322,0.19225 0.16322,0.30978c0,0.11672 -0.05808,0.22698 -0.16322,0.30937l-0.33512,0.26212c-0.10481,0.08239 -0.24533,0.12803 -0.39487,0.12803c-0.14887,0 -0.29039,-0.04564 -0.39554,-0.12803l-4.54917,-3.56344c-0.10548,-0.0828 -0.16322,-0.19306 -0.16322,-0.31018c0,-0.11834 0.05774,-0.22819 0.16322,-0.31099z" fill="#ffffff" fill-opacity="1"></path></g></g></svg></span>',
		responsive: [
		{
			breakpoint: 2500,
			settings: {
				slidesToShow: 6,
			}
		},
		{
			breakpoint: 1920,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 4,
			}
		}
		]		
	});

	


		var numSlick = 0;

		$('.js-models-slider__none-thumbs').each(function () {
			numSlick++;

			$(this).addClass('slider-' + numSlick).slick({
				asNavFor: '.content__aside__title__slider.slider-' + numSlick,
				arrows: false,
				fade: true,
				swipe: false
			})
		});

		    numSlick = 0;

		$('.content__aside__title__slider').each(function () {
			numSlick++;

			// $(this).find('.content__aside__arrows').addClass('slider-' + numSlick)

			$(this).addClass('slider-' + numSlick).slick({
				// appendArrows: '.content__aside__arrows.slider-' + numSlick,
				asNavFor: '.js-models-slider__none-thumbs.slider-' + numSlick,
				fade: true,
				prevArrow: '<span class="next-slide"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="8px"><path fill-rule="evenodd"  fill="currentColor" d="M6.495,0.207 L0.211,6.740 C-0.064,7.027 -0.064,7.491 0.211,7.778 C0.486,8.065 0.933,8.065 1.208,7.778 L6.993,1.763 L12.779,7.778 C13.054,8.065 13.501,8.065 13.777,7.778 C14.052,7.491 14.052,7.026 13.777,6.739 L7.493,0.206 C7.220,-0.077 6.767,-0.077 6.495,0.207 Z"/></svg></span>',
				nextArrow: '<span class="prev-slide"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="8px"><path fill-rule="evenodd"  fill="currentColor" d="M6.495,7.769 L0.211,1.256 C-0.064,0.970 -0.064,0.507 0.211,0.221 C0.486,-0.065 0.933,-0.065 1.208,0.221 L6.993,6.217 L12.779,0.221 C13.054,-0.065 13.501,-0.065 13.777,0.221 C14.052,0.507 14.052,0.971 13.777,1.257 L7.493,7.770 C7.220,8.051 6.767,8.051 6.495,7.769 Z"/></svg></span>',
				fade: true
			});
		});
		


	

	$('.edit-page__aside__slider').slick({
		appendArrows: '.edit-page__aside__slider__arrows',
		prevArrow: '<span class="prev-list"><svg id="SVGDoc6" width="6" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 8"><defs></defs><g><g><path d="M0.15997,3.68781l4.54483,-3.55981c0.10614,-0.0828 0.24633,-0.12763 0.39554,-0.12763c0.14987,0 0.29006,0.04483 0.3952,0.12763l0.33512,0.26171c0.21696,0.17084 0.21696,0.44871 0,0.61915l-3.81751,2.98953v0l3.82118,2.99316c0.10581,0.08199 0.16322,0.19225 0.16322,0.30897c0,0.11753 -0.05741,0.22739 -0.16322,0.31018l-0.33545,0.26171c-0.10347,0.08199 -0.245,0.12803 -0.39387,0.12803c-0.14987,0 -0.29073,-0.04604 -0.39554,-0.12803l-4.5495,-3.56385c-0.10614,-0.08239 -0.16289,-0.19225 -0.16289,-0.31018c0,-0.11713 0.05674,-0.22779 0.16289,-0.31058z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		nextArrow: '<span class="next-list"><svg id="SVGDoc7" width="6" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 8"><defs></defs><g><g><path d="M5.84021,3.68781l-4.54583,-3.55981c-0.10614,-0.0828 -0.246,-0.12763 -0.3952,-0.12763c-0.1502,0 -0.29039,0.04483 -0.39554,0.12763l-0.33479,0.26171c-0.21763,0.17084 -0.21763,0.44871 0,0.61915l3.81784,2.98953v0l-3.82152,2.99316c-0.10514,0.08199 -0.16322,0.19225 -0.16322,0.30897c0,0.11753 0.05808,0.22739 0.16322,0.31018l0.33479,0.26171c0.10448,0.08199 0.245,0.12803 0.39554,0.12803c0.14887,0 0.28939,-0.04604 0.39454,-0.12803l4.55017,-3.56385c0.10514,-0.08239 0.16322,-0.19225 0.16322,-0.31018c0,-0.11713 -0.05808,-0.22779 -0.16322,-0.31058z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		asNavFor: '.titles-slider'
	});

	$('.titles-slider').slick({
		asNavFor: '.edit-page__aside__slider',
		fade: true,
		swipe: false
	});

	$('.slider-menu').slick({
		slidesToShow: 12,
		focusOnSelect: true,
		infinite: false,
		initialSlide: 6,
		asNavFor: '.category-slider'
	});

	$('.category-slider').slick({
		arrows: false,
		fade: true,
		infinite: false,
		initialSlide: 6,
		asNavFor: '.slider-menu'
	});

	// submenu in left aside

	$('.aside__menu__content > a').on('click',function (e) {
		e.preventDefault();
		var submenuContainer = $('.aside__left');
		var menu = $(this).parent().next('.aside__submenu');
    	var isClosed = menu.is(':hidden'); 

    		submenuContainer.find('.aside__submenu').slideUp(); 

    		if (isClosed) {
    			menu.slideDown();
		    }
	});

	// popup in sidebar
	$('.js-popup-features').on('click',function (e) {
		e.preventDefault();

		var featuresId = $(this).attr('data-features');
		var hiddenPopup = $('#' + featuresId).hasClass('active');

		$('.aside-features').removeClass('active');
		$('.pallete-open').show();
		$('.color-picker-wrapper').hide();	
		
		$('#' + featuresId).addClass('active');

		if(hiddenPopup){
			$('#' + featuresId).removeClass('active');
		}
	});

	$('.pallete__item .remove').on('click',function (e) {
		e.preventDefault();

		$(this).closest('.pallete__item').hide();
	});

	// Open color Pallete
	$('.pallete-open').on('click',function (e) {
		e.preventDefault();

		$(this).hide();
		$('.color-picker-wrapper').show();	
	});


	// Range slider
	$( function() {

		$( "#slider-vertical" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 50,
			value: 16,
			slide: function( event, ui ) {
				$('#slider-vertical').attr('data-range', ui.value);
				$('#slider-vertical .ui-slider-handle').attr('data-val', ui.value);
			}
		});

		$('#slider-vertical .ui-slider-handle').attr('data-val', $( "#slider-vertical" ).slider( "value" ));
		
		$('#slider-vertical').attr('data-range', $( "#slider-vertical" ).slider( "value" ));


	} );

	// https://iro.js.org/guide.html#color-picker-options
	iro.use(iroTransparencyPlugin);
	var colorPicker = new iro.ColorPicker('#color-picker-container', {
		width: 145,
		color: {r: 255, g: 100, b: 100, a: .6},
		transparency: true
	});

	var value = document.getElementById("color-picker-value__hex");
	var valueColor = document.getElementById("color-picker-value__circle");

	// https://iro.js.org/guide.html#color-picker-events
	colorPicker.on(["color:init", "color:change"], function(color){
	  // Show the current color in different formats
	  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
	  value.innerHTML =  color.hexString;
	  valueColor.style.color = color.rgbaString;
	});


})











