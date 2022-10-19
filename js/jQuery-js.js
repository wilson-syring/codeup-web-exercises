'use strict'
window.onload = function() {
    alert( 'The page has finished loading!' );
}

$(function() {
    alert( 'The DOM has finished loading!' );
});

var contents = $('#head').html();
alert(contents);

var contents2 = $('#headText').html();
alert(contents2);

$('.codeup').css('border', '1px solid #F00');

$('li').css('font-size', '20px');

$('h1,p,li').hover(
    function() {
        $(this).css('background-color', '#63b222');
    },

);