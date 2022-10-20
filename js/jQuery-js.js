'use strict'
window.onload = function () {
    alert('The page has finished loading!');
}

// var contents = $('#head').html();
// alert(contents);
//
// var contents2 = $('#headText').html();
// alert(contents2);
//
// $('.codeup').css('border', '1px solid #F00');
//
// $('li').css('font-size', '20px');

// $('h1,p,li').hover(
//     function () {
//         $(this).css('background-color', '#63b222');
//     },
//     function () {
//         $(this).css('background-color', '#ffffff');
//     }
// );

$('h1').click(function() {
    $(this).css('background-color', '#2c248d');
});

$('p').dblclick(function() {
    $(this).css('font-size', '18px');
});

$('li').hover(
    function () {
        $(this).css('background-color', '#b22222');
    },
    function () {
        $(this).css('background-color', '#ffffff');
    }
);

$(function () {
    alert('The DOM has finished loading!');
});
