$(document).ready( function(){
    //Dit is een test. Pas de 'hide' aan om de snelheid van het verdweinen aan te passen, of pas de 'show' aan om de snelheid van het laten zien te veranderen.
    // $('main').hide(3000).delay(1000).show(500);

    //Muis event
    //De eerste fade is om de img weg te laten gaan
    //De tweede fade is om de img terug te laten komen
    //De laatste click is er om de text te laten verdwijen

    $('figure img').mouseenter(function(){
        $(this).fadeTo(600, .01);
    }).mouseleave(function(){
        $(this).fadeTo(600, 1);
    }).click(function(){
        $(this).next().toggle(700);
    });

    //footer

    $('footer').click(function(){
        $(this).animate({
            top: '-=50px',
            opacity: '-=.2'
        }, 900)
    }).dblclick(function(){
        $(this).animate({
            top: '0',
            opacity: '1'
        }, 900)
    });
});

//Dit is de tooltip plugin die ik zelf heb toegevoegd. Als je hoverd over een image komt er een textvak waarin staat wie, wie is.

$(document).ready(function() {
    $('.tooltip').tooltipster();
    
    
});