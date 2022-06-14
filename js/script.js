/*console.log(`Score: 120 / 120:
- вёрстка валидная (10/10)
`);*/

$(document).ready(function() {
	$('.burger-menu').click(function(){
        $('.burger-menu').toggleClass('open-menu');
        $('.navigator').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
    $('.nav_item').click(function(){
        $('.burger-menu').toggleClass('open-menu');
        $('.navigator').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});