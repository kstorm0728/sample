$(function() {
    $('.accordion-list').hide();
    $('.accordion-title').on('click', function() {
        $(this).next().slideToggle();
    })
    
    $('.ddmenu .menu-list').hide();
    $('.menu-icon').on('click', function() {
        $(this).next().slideToggle();
    })
});