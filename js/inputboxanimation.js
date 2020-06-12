$('.container input#name').focus(function() {
    $('h3.input-placeholder-text').animate({
        top: '-15px',
        left: '-1px',
        fontSize: '.9em'
    }, 250, 'swing', function() {
        $('h3.input-placeholder-text').css('color', 'red');
    });

});

$('.container input#name').blur(function() {
    $('h3.input-placeholder-text').animate({
        top: '2px',
        fontSize: '1em',
        color: '#aaa',
        left: '10px'
    },250, 'swing', function() {
        $('h3.input-placeholder-text').css('color', '#aaa');
    });

});