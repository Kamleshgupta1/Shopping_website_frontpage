
(function ($) {

	$.fn.jPopup = function (options) {
		var settings = $.extend({
			popupParent : "gee-popup",
			scrollTopPx : 600,
			popupCloseButton : ".popup-close-button",

			// openPopup : "asd",
			initThrough : function () {
				$(window).on('scroll', function(event) {
					var scrollValue = $(window).scrollTop();
					if (scrollValue == settings.scrollTopPx || scrollValue > settings.scrollTopPx) {
						// call the popup
						if (hasPopuped == false) {
							$.fn.jPopup.openPopup();
						}
					}
				});
			}
		}, options);

		var hasPopuped = false;
		settings.initThrough();
		
		$(".popup-close-button").click(function() {
			$('html').toggleClass('active-poup');
			hasPopuped = true;
		});
	}
	$.fn.jPopup.openPopup = function () {
		$("html").addClass('active-poup');
	}
}(jQuery))


// login form

$(document).ready(function()
	{
		$('.signup').hide();
		$('#signup').click(function()
		{
			$('.login').slideUp('slow');
			$('.signup').slideDown('slow');
		});
		$('#login').click(function()
		{
			$('.signup').slideUp('slow');
			$('.login').slideDown('slow');
		});	
	});