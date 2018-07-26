console.log('Hello');

$(document).ready(function(){
    $('a.read-more').on('click', function(){
        $('section#section3').slideToggle();
    })

});