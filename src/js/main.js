import $ from './lib/lib';

$('#first').onClick(() => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').onClick(() => {
    $('div').eq(1).fadeIn(800);
});

$('button').eq(2).onClick(() => {
    $('.w-500').fadeOut(800);
})