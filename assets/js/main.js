$(function () {

	/*
	 * AJAX SEND FORM
	 */
	var $contactForm = $('#contact-form');
	$contactForm.submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: '//formspree.io/hello@edmundojr.com',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function() {
				$contactForm.find('.col:last-child').append('<div class="alert alert--loading">Sending…</div>');
			},
			success: function(data) {
				$contactForm.find('.alert--loading').hide();
				$contactForm.find('.col:last-child').append('<div class="alert alert--success">Message sent. Thanks a million!</div>');
			},
			error: function(err) {
				$contactForm.find('.alert--loading').hide();
				$contactForm.find('.col:last-child').append('<div class="alert alert--error">Ops, that\'s a error. Maybe try again?</div>');
			}
		});
	});

});