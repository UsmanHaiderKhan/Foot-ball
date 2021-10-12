/*================== Read More Text ==================*/
function ReadMore(textsClass, charCount, buttonClass) {
	// Readmore Text for ABOUT US Section
	$(".btn-read-more").html("Read More");
	var showChar = charCount;
	$("." + textsClass).each(function () {
		var content = $(this).html();
		if (content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
			var html =
				c +
				'<span class="moreellipses">' +
				"..." +
				'&nbsp;</span><span class="morecontent d-none"><span>' +
				h +
				"</span>&nbsp;&nbsp;</span>";
			$(this).html(html);
		}
	});
	$("." + buttonClass).click(function () {
		$(this)
			.prev(".menu-desc")
			.find("p span.moreellipses")
			.toggleClass("d-none");
		$(this)
			.prev(".menu-desc")
			.find("p span.morecontent")
			.toggleClass("d-none");
		if ($(this).hasClass("toggled")) {
			$(this).removeClass("toggled");
			$(this).html("Read More");
		} else {
			$(this).addClass("toggled");
			$(this).html("Read Less");
		}
	});
}
ReadMore("menu-desc", 135, "btn-read-more");

function cardMore(textsClass1, charCount1, buttonClass1) {
	// Readmore Text for ABOUT US Section
	$(".btn-more").html("Read More");
	var showChar = charCount1;
	$("." + textsClass1).each(function () {
		var content = $(this).html();
		if (content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
			var html =
				c +
				'<span class="moreellipses">' +
				"..." +
				'&nbsp;</span><span class="morecontent d-none"><span>' +
				h +
				"</span>&nbsp;&nbsp;</span>";
			$(this).html(html);
		}
	});
	$("." + buttonClass1).click(function () {
		$(this)
			.prev(".blog-desc")
			.find("p span.moreellipses")
			.toggleClass("d-none");
		$(this)
			.prev(".blog-desc")
			.find("p span.morecontent")
			.toggleClass("d-none");
		if ($(this).hasClass("toggled")) {
			$(this).removeClass("toggled");
			$(this).html("Read More");
		} else {
			$(this).addClass("toggled");
			$(this).html("Read Less");
		}
	});
}
cardMore("blog-desc", 630, "btn-more");

function blogMore(textsClass2, charCount2, buttonClass2) {
	// Readmore Text for ABOUT US Section
	$(".read-text").html("Read More +");
	var showChar = charCount2;
	$("." + textsClass2).each(function () {
		var content = $(this).html();
		if (content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
			var html =
				c +
				'<span class="moreellipses">' +
				"..." +
				'&nbsp;</span><span class="morecontent d-none"><span>' +
				h +
				"</span>&nbsp;&nbsp;</span>";
			$(this).html(html);
		}
	});
	$("." + buttonClass2).click(function () {
		$(this)
			.prev(".blog-desc")
			.find("p span.moreellipses")
			.toggleClass("d-none");
		$(this)
			.prev(".blog-desc")
			.find("p span.morecontent")
			.toggleClass("d-none");
		if ($(this).hasClass("toggled")) {
			$(this).removeClass("toggled");
			$(this).html("Read More +");
		} else {
			$(this).addClass("toggled");
			$(this).html("Read Less -");
		}
	});
}
blogMore("blog-desc", 500, "read-text");

/*===================== Smooth Scrolling ======================*/
$(function () {
	$("a").smoothScroll();
});
/*======================= Nav Active Class =======================*/
$(function () {
	$(".nav-item").on("click", function () {
		$(".nav-item").removeClass("active");
		$(this).addClass("active");
	});
});
$(function () {
	$("#work .btn-filter").on("click", function () {
		$(".btn-filter").removeClass("active-bg");
		$(this).addClass("active-bg");
	});
});

/*===================== Owl Carousel Slider ======================*/

$(function () {
	var owls = $(".owl-carousel");
	owls.owlCarousel({
		loop: true,
		autoplay: false,
		margin: 0,
		dots: true,
		nav: false,
		slideBy: 1,
		item: 1,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 1
			},
			600: {
				items: 1
			},
			768: {
				items: 1
			},
			830: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

});
/*===================== Navbar Smooth ======================*/
$(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("nav").addClass("color");

		} else {
			$("nav").removeClass("color");
		}
	});
});

