var parent = document.getElementById('fixcont');
var child = document.getElementById('scrollcont');
child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";

$('.rightA').click(function() {
    $('.title').addClass('activeTitle');
    $('.title').removeClass('unacTitle');
    $('.cont').addClass('activeVis');
    $('.movFrame,.botArrow').addClass('activeL');
});

$('.leftA').click(function(){
    $('.title').addClass('activeTitle');
    $('.title').removeClass('unacTitle');
    $('.abou').addClass('activeVis');
    $('.movFrame,.botArrow').addClass('activeR');
});

$('.botArrow').click(function(){
    $('.title').addClass('activeTitle');
    $('.title').removeClass('unacTitle');
    $('.work').addClass('activeVis');
    $('.container').addClass('fullframe');
    $('.movFrame,.works,.botArrow').addClass('activeD');
    $('.backU').addClass('revealUP');
});

$('.goback').click(function(){
    $('.title').removeClass('activeTitle');
    $('.title').addClass('unacTitle');
    $('.movFrame,.works,.botArrow').removeClass('activeL activeR activeD');
    $('.cont,.abou,.work').removeClass('activeVis');
    $('.container').removeClass('fullframe');
    $('.backU').removeClass('revealUP');
});

$('.window').click(function(){
    $(this).each(function(){
    $('.window').removeClass('clicked');
    $('.closeWin,.galim').removeClass('closer');
    $('.reveal').removeClass('revealed');
    $(this).addClass('clicked');
    $(this).children('span,img').addClass('closer');
    $(this).children('div').addClass('revealed');
    $('.overlay').addClass('hidde');
});
});

$('.closeWin').click(function(){
    $(this).parent('div').removeClass('clicked');
    $(this).removeClass('closer');
    $(this).siblings('img').removeClass('closer');
    $(this).siblings('div').removeClass('revealed');
    $('.overlay').removeClass('hidde');
});

$('.closeWin').click(function(e){
    e.stopPropagation();
});