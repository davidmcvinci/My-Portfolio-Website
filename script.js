var loader= document.getElementsById('loader');

window.addEventListener('load', function() {
    loader.style.display = 'none';
})




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

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const closed = document.getElementById('closed');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

closed.addEventListener('click', () => {
    modal_container.classList.remove('show');
});


const pen = document.getElementById('pen');
const title = document.getElementById('title');

pen.addEventListener('mouseover', () => {
    title.classList.add('on');
});
pen.addEventListener('mouseout', () => {
    title.classList.remove('on');
});