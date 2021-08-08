//slider

const slider = tns({

	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	speed: 1500,
	autoplayButtonOutput: false,
	controls: false,
	navPosition: 'bottom',


  });

 	document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
}) ;
	document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
}) ;



$(document).ready(function(){
	// tabs active
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass
		  ('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	  });


		function toggleSlide(item){
			$(item).each(function(i) {
				$(this).on('click', function(e) {
					e.preventDefault();
					$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
					$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
				})
			});
		};

		toggleSlide ('.catalog-item__link');
		toggleSlide ('.catalog-item__back');

		// Modal

		$('[data-modal=consultation]').on('click', function () {
			$('.overlay, #consultation').fadeIn('slow');
		});
		$('.modal__close').on('click', function () {
			$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
		});


		$('.button_mini').each(function(i) {
			$(this).on('click', function () {
				$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
				$('.overlay, #order').fadeIn('slow');
			});
		});




		$('form').submit(function(e) {
			e.preventDefault();
			$.ajax({
			}).done(function() {
				$(this).find("input").val("");
				$('#consultation, #order').fadeOut();
				$('.overlay, #thanks').fadeIn('slow');
				$('form').trigger('reset');
			});
			return false;
		});




		//Smooth srcoll and pageup
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1600) {
				$('.pageup').fadeIn();
			} else {
				$('.pageup').fadeOut();
			}
		});

		$("a[href='#up']").click(function(){
			const _href = $(this).attr("href");
			$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
			return false;
		});

		// WOW.js init
		new WOW().init();

		//Validation of form
		function validateForms(form) {
			$(form).validate({
				rules: {
					name: {
						required: true,
						minlength: 2
					  },
					phones: "required",
					email: {
						required: true,
						email: true
					}
				},
				messages: {
					name: {
						required: "Please specify your name",
						minlength: jQuery.validator.format("At least {0} characters required!"),
					},
					phone: "Please specify your phone number",
					email: {
					  required: "We need your email address to contact you",
					  email: "Your email address must be in the format of name@domain.com"
					}
				  }
			});
		};

		validateForms('#consultation-form');
		validateForms('#consultation form');
		validateForms('#order form');

		$('input[name=phone]').mask("+7 (999) 999-99-99");





  });