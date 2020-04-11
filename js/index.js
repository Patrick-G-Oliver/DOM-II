// Your code goes here

//////////////// the h1 ////////////////////////
const funBusLogo = document.querySelector('h1');
// unique event listener 1
funBusLogo.addEventListener('click', (event) => {
    event.target.style.color = 'red';
});
// unique event listener 2
funBusLogo.addEventListener('dblclick', (event) => {
    event.target.style.color = 'green';
});
////////////////////////////////////////////////

///////////////// nav bar ////////////////////////////
const navItems = document.querySelectorAll('.nav-link');

navItems.forEach( (navElement) => {
// unique event listener 3
    navElement.addEventListener('mousemove', (event) => {
        event.target.style.color = 'green';
    });
// unique event listener 4
    navElement.addEventListener('mouseout', (event) => {
        event.target.style.color = 'black';
    });
// unique event listener 5
    navElement.addEventListener('mousedown', (event) => {
        event.target.style.color = 'yellow';
    });
// unique event listener 6
    navElement.addEventListener('mouseup', (event) => {
        event.target.style.color = 'orange';
    });
});


/////// stopPropagation (see comment on lines 48-49) ///////
const header = document.querySelector('.main-navigation');
 
header.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue';
});

header.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'white';
});

const nav = document.querySelector('nav');

nav.addEventListener('click', (event) => {
// .stopPropagation() prevents header's blue click
// event from "bubbling up" into nav's red click event. 
    event.stopPropagation();
    event.target.style.backgroundColor = 'red';
});

nav.addEventListener('dblclick', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'white';
});

//////////////////////////////////////////////////////

//////////////// intro header ///////////////////////
const welcomeHeader = document.querySelector('.intro');
// event listener 7
welcomeHeader.addEventListener('mouseenter', (event) => {
    event.target.style.color = 'blue';
});
// event listener 8
welcomeHeader.addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
});
// event listener 9
welcomeHeader.addEventListener('copy', (event) => {
    event.target.style.backgroundColor = 'purple';
});
//////////////////////////////////////////////////////

////////// Destinations Section //////////////////////
/*
// with getElement / bracket notation for one item...
const destino = document.getElementsByClassName('destination');
// event listener 10
destino[0].addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.color = 'green';
});
*/
// with querySelector / .forEach for all items...
const destino = document.querySelectorAll('.destination');

destino.forEach( (destinoElement) => {
// event listener 10
    destinoElement.addEventListener('mouseover', (event) => {
        event.target.style.color = 'green';
    });
});
/////////////////////////////////////////////////////////////

//////// .preventDefault() on nav items /////////////////////
navItems.addEventListener('click', (event) => {
    event.preventDefault();
});

