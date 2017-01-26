$(document).ready(function() {
	$(".fancybox").fancybox();

	$('.navbar-nav').onePageNav();

	var menu = $('.navbar-nav');
	var ww = $(window).width();

	$('.toggle').mouseover(function() {
		$('.navbar-nav').slideToggle();
	})

	$('.toggle').click(function() {
		$('.navbar-nav').slideToggle();
	})

	$(window).resize(function(){
		if(ww > 768 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	})



});


//For countUp.js
var dataOne = new CountUp("data1", 0, 360);
var dataTwo = new CountUp("data2", 0, 128);
var dataThree = new CountUp("data3", 0, 480);
var dataFour = new CountUp("data4", 0, 2048);


var dataSection = document.getElementById('data');
var dataSecOffset = dataSection.getBoundingClientRect();
var dataSecOffset_top = dataSecOffset.top;
var sixthOfWindow = (window.innerHeight * 0.4);
var topOfWindow = (window.innerHeight / window.innerHeight);

console.log(dataSection)
console.log(dataSecOffset_top);
console.log(sixthOfWindow);
console.log(topOfWindow);


$(document).ready(function() {
	var scrollTop = $(window).scrollTop();
	var elementOffset = dataSecOffset_top;
	var currentElementOffset = (elementOffset - scrollTop);

	$(window).bind('scroll', function() {
		var scrollTop = $(window).scrollTop();
		var elementOffset = dataSecOffset_top;
		var currentElementOffset = (elementOffset - scrollTop);
		console.log(scrollTop);

		if (currentElementOffset < sixthOfWindow) {
			console.log("yeah");
			dataOne.start();
			dataTwo.start();
			dataThree.start();
			dataFour.start();
		}
	})
})