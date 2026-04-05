/**
*	Glitche - CV/Resume/Portfolio Template (HTML)
*	Version: 1.3
*	Author: beshleyua
*	Author URL: http://themeforest.net/user/beshleyua
*	Copyright © Cvio by beshleyua. All Rights Reserved.
**/

$(function () {
	'use strict';
	
	$(window).unload(function() {});
	
	/* Set full height in blocks */
	var width = $(window).width();
	var height = $(window).height();
	$('.section.started').css({'height': height-60});
	
	/* Typed preload text */
	if($('.typed-load').length && $('.typing-load').length){
		$('.typed-load').typed({
			stringsElement: $('.typing-load'),
			loop: true
		});
	}

	var postload_effects_initialized = false;
	function init_postload_effects() {
		if(postload_effects_initialized){
			return;
		}
		postload_effects_initialized = true;

		/* Typed subtitle */
		if($('.typed-subtitle').length && $('.typing-subtitle').length){
			$('.typed-subtitle').typed({
				stringsElement: $('.typing-subtitle'),
				loop: true
			});
		}
		
		/* Typed breadcrumbs */
		if($('.typed-bread').length && $('.typing-bread').length){
			$('.typed-bread').typed({
				stringsElement: $('.typing-bread'),
				showCursor: false
			});
		}

		/* One Page Nav */
		var url_hash = location.hash;
		var sectionElem = $(url_hash);
		if(url_hash.indexOf('#section-') == 0 && sectionElem.length){
			$('body, html').animate({scrollTop: $(url_hash).offset().top - 70}, 400);
		}
	}

	/* Start typed effects without waiting for full asset load */
	setTimeout(init_postload_effects, 100);
	
	/* Preloader */
	$(window).load(function() {
		/* React controls the preloader visibility; this script only marks page loaded */
		$('body').addClass('loaded');
		init_postload_effects();
	});

	if(jQuery('.anchor_nav').length){
		jQuery('.anchor_nav').onePageNav();
	}
	
	/*Menu mobile*/
	$('header').on('click', '.menu-btn', function(){
		if($('header').hasClass('active')){
			$('header').removeClass('active');
			// $('body').addClass('loaded');
		} else {
			$('header').addClass('active');
			// $('body').removeClass('loaded');
		}
		
		return false;
	});
	if(jQuery('.anchor_nav').length){
		var www  = jQuery(window).width();
		if(www <=840){
			jQuery('header .head-top .top-menu ul li a').on('click',function(){
				$('header').removeClass('active');
				return false;
			});
		}
	}
	
	/* Hide mouse button on scroll */
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 1 /*$('#blue_bor').offset().top*/) {
			$('.mouse_btn').fadeOut();
		}
		else {
			$('.mouse_btn').fadeIn();
		}
	});
	
	/* On click mouse button, page scroll down */
	$('.section').on('click', '.mouse_btn', function(){
		$('body,html').animate({
			scrollTop: height - 150
		}, 800);
	});
	
	$('body').on({
		mouseenter: function () {
			$(this).addClass('glitch-effect-white');
		},
		mouseleave: function () {
			$(this).removeClass('glitch-effect-white');
			$('.top-menu ul li.active a.btn').addClass('glitch-effect-white');
		}
	}, 'a.btn, .btn');
	
	/* Validate contact form */
	$("#cform").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		success: "valid",
		submitHandler: function() {
			var errorBox = $('.section.contacts .alert-error');
			var errorText = $('.section.contacts .alert-error p');
			$.ajax({
				url: '/api/contact',
				type: 'post',
				dataType: 'json',
				data: 'name='+ $("#cform").find('input[name="name"]').val() + '&email='+ $("#cform").find('input[name="email"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
				beforeSend: function() {
					errorBox.hide();
					errorText.text('');
				},
				complete: function() {
				
				},
				success: function(data) {
					if(data && data.success){
						$('#cform').fadeOut();
						$('.alert-success').delay(1000).fadeIn();
					} else {
						errorText.text((data && data.message) ? data.message : 'Message not sent. Please try again.');
						errorBox.fadeIn();
					}
				},
				error: function(xhr) {
					var errorMessage = 'Message not sent. Please try again in a moment.';
					if(xhr && xhr.responseJSON && xhr.responseJSON.message){
						errorMessage = xhr.responseJSON.message;
					}
					errorText.text(errorMessage);
					errorBox.fadeIn();
				}
			});
		}
	});
	
	/* Validate commect form */
	$("#comment_form").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		success: "valid",
		submitHandler: function() {
		}
	});
	
	/* Initialize masonry items */
	var $container_clients = $('.section.clients .box-items');
	$container_clients.imagesLoaded(function() {
		$container_clients.isotope({
			itemSelector: '.box-item'
		});
	});

	/* Initialize masonry items */
	var $container_blog = $('.section.blog .box-items');
	$container_blog.imagesLoaded(function() {
		$container_blog.isotope({
			itemSelector: '.box-item'
		});
	});
	
	/*
		Initialize portfolio items
	*/
	var $container = $('.section.works .box-items');
	$container.imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.box-item'
		});
	});

	/*
		Filter items on button click
	*/
	$('.filters').on( 'click', '.btn-group', function() {
		var filterValue = $(this).find('input').val();
		$container.isotope({ filter: filterValue });
		$('.filters .btn-group label').removeClass('glitch-effect');
		$(this).find('label').addClass('glitch-effect');
	});
	
	/*
		Gallery popup
	*/
	if(/\.(?:jpg|jpeg|gif|png)$/i.test($('.gallery-item:first a').attr('href'))){
		$('.gallery-item a').magnificPopup({
			gallery: {
				enabled: true
			},
			type: 'image',
			closeBtnInside: false,
			mainClass: 'mfp-fade'
		});
	}

	/*
		Media popup
	*/
	$('.has-popup-media').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'mfp-fade'
	});

	/*
		Image popup
	*/
	$('.has-popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-fade',
		image: {
			verticalFit: true
		}
	});
	
	/*
		Video popup
	*/
	$('.has-popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		iframe: {
            patterns: {
                youtube_short: {
                  index: 'youtu.be/',
                  id: 'youtu.be/',
                  src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        },
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'mfp-fade',
		callbacks: {
			markupParse: function(template, values, item) {
				template.find('iframe').attr('allow', 'autoplay');
			}
		}
	});
	
	/*
		Music popup
	*/
	$('.has-popup-music').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'mfp-fade'
	});

	/*
		Gallery popup
	*/
	$('.has-popup-gallery').on('click', function() {
        var gallery = $(this).attr('href');
    
        $(gallery).magnificPopup({
            delegate: 'a',
            type:'image',
            closeOnContentClick: false,
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');

        return false;
    });
	
	/* Resize function */
	$(window).resize(function() {
		var width = $(window).width();
		var height = $(window).height();
		
		$('.section.started').css({'height': height-60});

		/* Dotted Skills Line On Resize Window */
		var skills_dotted = $('.skills-list.dotted .progress');
		var skills_dotted_w = skills_dotted.width();
		if(skills_dotted.length){
			skills_dotted.find('.percentage .da').css({'width':skills_dotted_w+1});
		}
	});
	
	if(width < 840) {
		$('.section.started').css({'height': height-30});
	}

	/* One Page Menu Nav */
	// if($('.section').length && $('.top-menu li a').length) {
	// 	$(window).on('scroll', function(){
	// 		var scrollPos = $(window).scrollTop();
	// 		$('.top-menu ul li a').each(function () {
	// 			if($(this).attr('href').indexOf('#section-') == 0){
	// 				var currLink = $(this);
	// 				var refElement = $(currLink.attr("href"));
	// 				if(refElement.length){
	// 					if (refElement.offset().top <= scrollPos + 120) {
	// 						$('.top-menu ul li').removeClass("active");
	// 						currLink.closest('li').addClass("active");
	// 					}
	// 				}
	// 				if(scrollPos == 0) {
	// 					$('.top-menu ul li').removeClass("active");
	// 				}
	// 			}
	// 		});
	// 	});
	// }

	/*
		Dotted Skills Line
	*/

	function skills(){
		var skills_dotted = $('.skills.dotted .progress');
		var skills_dotted_w = skills_dotted.width();
		if(skills_dotted.length){
			skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			skills_dotted.find('.percentage .da').css({'width':skills_dotted_w});
		}
	}
	setTimeout(skills, 1000);

	/*
		Circle Skills Line
	*/

	var skills_circles = $('.skills.circles .progress');
	if(skills_circles.length){
		skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
	}
});
