$('.menu-toggle-btn').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav-menu').toggleClass('active');
    $('.nav-menu .link1').toggleClass('animate__animated animate__flipInX').css({'animation-delay':'0.5s'});
    $('.nav-menu .link2').toggleClass('animate__animated animate__flipInX').css({'animation-delay':'0.6s'});
    $('.nav-menu .link3').toggleClass('animate__animated animate__flipInX').css({'animation-delay':'0.7s'});
    $('.nav-menu .link4').toggleClass('animate__animated animate__flipInX').css({'animation-delay':'0.8s'});
    $('.nav-menu .link5').toggleClass('animate__animated animate__flipInX').css({'animation-delay':'0.9s'});
    $('.nav-menu .link6').toggleClass('animate__animated animate__flipInX').css({'animation-delay':'1s'});
})