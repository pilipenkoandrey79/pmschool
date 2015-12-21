function navScrollTo(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
    element_class += '-container';
    scroll_to = $(element_class).offset().top - nav_height;

	if($(window).scrollTop() !== scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}

$(function(){
	$("#timer .time").countdowntimer({size:"lg", dateAndTime: "2016/01/15 23:59:00"});

    var navbarHeight = $('nav.navbar').outerHeight();
    $('.scrollnav a').on('click', function(e) {
		e.preventDefault();
		navScrollTo($(this), navbarHeight);
	});
});
