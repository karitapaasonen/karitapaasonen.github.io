
/*
 * Funktio, jolla navigointi tapahtuu sulavasti.
 */

// $(function() {
// 	$('a').bind('click', function(event) {
//
// 		var $anchor = $(this);
//
// 		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1700, 'easeInOutExpo');
//
// 		event.preventDefault();
// 	});
//
//
// });

// $(document).ready(function() {
//
// 	var height = $(window).height();
//
//
//
// });


$(document).ready(function(){

});







// 	$('#collection').click(function() {
// 			$('body,html').animate({
// 				scrollTop: 0
// 			}, 800);
//
// 			var height = $(window).height();
//
// 			$('header').css({
// 				"height" : height
// 			});
//
// 			$('.collection-article').css("visibility", "visible");
// 			$('.current').css("visibility", "hidden");
// 			$('.current').removeClass("current");
// 			$('.collection-article').addClass("current");
//
// 			$('body').css({
// 				"overflow" : "visible"
// 			});
//
//
//
// 	});
//
// 	$('#textile').click(function() {
// 		$('body,html').animate({
// 			scrollTop: 0
// 		}, 800);
//
// 		var height = $(window).height();
//
// 		$('header').css({
// 			"height" : height
// 		});
//
//
// 		$('.textile-article').css("visibility", "visible");
// 		$('.current').css("visibility", "hidden");
// 		$('.current').removeClass("current");
// 		$('.textile-article').addClass("current");
//
// 		$('body').css({
// 			"overflow" : "visible"
// 		});
//
//
//
// 	});
//
// 	$('#about').click(function() {
// 		$('body,html').animate({
// 			scrollTop: 0
// 		}, 800);
//
// 		$('header').css({
// 			"height" : 200
// 		});
//
// 		$('.about-article').css("visibility", "visible");
// 		$('.current').css("visibility", "hidden");
// 		$('.current').removeClass("current");
// 		$('.about-article').addClass("current");
//
// 		$('body').css({
// 			"overflow" : "hidden"
// 		});
//
// 	});
//
//
// });


/*function randomWidth(){
	return 300 + (Math.random() * ($(window).width()-300));

}

function randomX(){
	return Math.random() * 300;

}

function randomY(){
	var index = Math.random();
	if (index < 0.5) {
		return Math.random()*(300);
	} else {
		return Math.random()*(-300);
	}


}

function randomZ(){
	return Math.random()*10;
}


$(document).ready(function() {



	$('.pic').each(function() {
		$(this).css({
			"width": randomWidth(),
			"margin-top": -randomY(),
			"margin-left": randomX(),
			"z-index" : randomZ()
		});


	});



	$('.pic').animate({
  	top: Math.random() * $(window).width(),
  	left: Math.random() * 500,
		width: 500 + $(window).width * Math.random()
}, 500, function() { });


	var yfactor = Math.random() * 300;






});

*/
