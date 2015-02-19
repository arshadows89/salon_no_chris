$(document).ready (
	function() {
		$(window).resize(function() {
			var windowHeight = $(window).height();
			var windowHeight =- 120
			$(".nav_bar").css("margin-top",windowHeight + "px");
		});
	}
)