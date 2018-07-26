console.log('Hello');

$(document).ready(function(){
    $('a.read-more').on('click', function(){
        $('section#section3').slideToggle();
    })

});

function frmfunction() {
    var firstName = document.getElementsByName('fname')[0].value;
    var lastName = document.getElementsByName('lname')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value;
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(message);
}

