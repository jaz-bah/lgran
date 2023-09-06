var section1 = $('.section-header');

section1.waypoint(function(){

    $('.section-header .heading1').addClass('animate__animated animate__bounceInLeft');
    $('.section-header .heading2').addClass('animate__animated animate__bounceInLeft').css({'animation-delay':'0.2s'});
    $('.section-header .logo').addClass('animate__animated animate__bounceInLeft').css({'animation-delay':'0.4s'});
    $('.section-header p').addClass('animate__animated animate__bounceInLeft').css({'animation-delay':'0.6s'});
    $('.section-header .heading3').addClass('animate__animated animate__bounceInLeft').css({'animation-delay':'0.8s'});

},
{
    offset: '90px'
})



var section2 = $('.section-about');

section2.waypoint(function(){
    
    $('.section-about h1').removeClass('opacity0').addClass('animate__animated animate__bounceInRight');
    $('.section-about p').removeClass('opacity0').addClass('animate__animated animate__bounceInRight').css({'animation-delay':'0.2s'});
    $('.section-about h2').removeClass('opacity0').addClass('animate__animated animate__bounceInRight').css({'animation-delay':'0.4s'});

},
{
    offset: '35%'
})



var section3 = $('.section-quality');

section3.waypoint(function(){

    $('.section-quality .heading1').removeClass('opacity0').addClass('animate__animated animate__bounceInLeft');
    $('.section-quality p').removeClass('opacity0').addClass('animate__animated animate__bounceInLeft').css({'animation-delay':'0.2s'});
    $('.section-quality .heading2').removeClass('opacity0').addClass('animate__animated animate__bounceInLeft').css({'animation-delay':'0.4s'});
    $('.section-quality h2').removeClass('opacity0').addClass('animate__animated animate__bounceInLeft').css({'animation-delay':'0.6s'});

},
{
    offset: '35%'
})



var section4 = $('.section-book');

section4.waypoint(function(){

    $('.section-book h1').removeClass('opacity0').addClass('animate__animated animate__bounceInDown').css({'animation-delay':'0.2s'});
    $('.section-book h2').removeClass('opacity0').addClass('animate__animated animate__bounceInDown');

},
{
    offset: '35%'
})



var section5 = $('.section-linda');

section5.waypoint(function(){

    $('.section-linda h1').removeClass('opacity0').addClass('animate__animated animate__bounceInUp').css({'animation-delay':'0.4s'});
    $('.section-linda p').removeClass('opacity0').addClass('animate__animated animate__bounceInUp').css({'animation-delay':'0.2s'});
    $('.section-linda h2').removeClass('opacity0').addClass('animate__animated animate__bounceInUp');

},
{
    offset: '35%'
})


var section6 = $('.section-enjoy');

section6.waypoint(function(){

    $('.section-enjoy .heading1').removeClass('opacity0').addClass('animate__animated animate__bounceInLeft');
    $('.section-enjoy p').removeClass('opacity0').addClass('animate__animated animate__bounceInLeft').css({'animation-delay':'0.2s'});
    $('.section-enjoy .heading2').removeClass('opacity0').addClass('animate__animated animate__bounceInLeft').css({'animation-delay':'0.4s'});

},
{
    offset: '35%'
})