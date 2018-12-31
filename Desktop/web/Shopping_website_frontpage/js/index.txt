
//Nav transparent
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 50);
  });
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//loader
$(function(){
		$('.item_filter').click(function(){
			$('.product-data').html('<div id="loaderpro" style="" ></div>');
		});
});

//form
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