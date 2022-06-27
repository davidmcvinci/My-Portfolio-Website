//for the text reveal animation...
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

//for the modal on reviews
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const closed = document.getElementById('closed');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

closed.addEventListener('click', () => {
    modal_container.classList.remove('show');
});


//to close thank you message after posting review
// var backicon = getElementById('closethanks');
// var thanksmodal = getElementByClassName('thankyou_message');

// backicon.addEventListener('click', () => {
//     thanksmodal.classList.add('close');
// });


//for the titles of each icon on the nav...
//gdp
const pen = document.getElementById('pen');
const title = document.getElementById('title');
    pen.addEventListener('mouseover', () => {
        title.classList.add('on');
    });
    pen.addEventListener('mouseout', () => {
        title.classList.remove('on');
    });

//uid
const laptop = document.getElementById('laptop');
const gdp_title= document.getElementById('title-3');
    laptop.addEventListener('mouseover', () => {
        gdp_title.classList.add('on');
    });
    laptop.addEventListener('mouseout', () => {
        gdp_title.classList.remove('on');
    });

//digi_art
const art = document.getElementById('brush');
const art_title = document.getElementById('title-4');
    art.addEventListener('mouseover', () => {
        art_title.classList.add('on');
    });
    art.addEventListener('mouseout', () => {
        art_title.classList.remove('on');
    });

//reviews
const comment = document.getElementById('comment');
const comment_title = document.getElementById('title-5');
    comment.addEventListener('mouseover', () => {
        comment_title.classList.add('on');
    });
    comment.addEventListener('mouseout', () => {
        comment_title.classList.remove('on');
    });

//contact
const contact = document.getElementById('contacts');
const contact_title = document.getElementById('title-6');
    contact.addEventListener('mouseover', () => {
        contact_title.classList.add('on');
    });
    contact.addEventListener('mouseout', () => {
        contact_title.classList.remove('on');
    });





    


//for loader screen...
var loader= document.getElementById('loader');

window.addEventListener('load', () => {
        loader.style.display = 'none';
    });

/*$(window).on("load", function() =>{
    $(".loader").fadeOut("slow");
});*/