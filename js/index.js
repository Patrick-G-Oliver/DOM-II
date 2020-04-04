// Your code goes here

//////////////// the h1 ////////////////////////
const funBusLogo = document.querySelector('h1');
// event listener 1
funBusLogo.addEventListener('click', (event) => {
    event.target.style.color = 'red';
});
// event listener 2
funBusLogo.addEventListener('dblclick', (event) => {
    event.target.style.color = 'green';
});
////////////////////////////////////////////////

//////////////// intro header ///////////////////////
const welcomeHeader = document.querySelector('.intro');
// event listener 3
welcomeHeader.addEventListener('mouseenter', (event) => {
    event.target.style.color = 'blue';
});
// event listener 4
welcomeHeader.addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
});
// event listener 5
welcomeHeader.addEventListener('copy', (event) => {
    event.target.style.backgroundColor = 'purple';
});
//////////////////////////////////////////////////////

///////////////// nav bar ////////////////////////////
const navItems = document.querySelector('nav');
// event listener 6
navItems.addEventListener('mousemove', (event) => {
    event.target.style.color = 'green';
});
// event listener 7
navItems.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
});
// event listener 8
navItems.addEventListener('mousedown', (event) => {
    event.target.style.color = 'yellow';
});
// event listener 9
navItems.addEventListener('mouseup', (event) => {
    event.target.style.color = 'orange';
});
//////////////////////////////////////////////////////

////////// .stopPropagation() on Destinations Section ///////
const destino = document.getElementsByClassName('destination');

destino[0].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'yellow';
});
// event listener 10
destino[0].addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
});

const sunButton = document.getElementsByClassName('btn');

sunButton[0].addEventListener('click', (event) => {
    event.stopPropagation();
})
/////////////////////////////////////////////////////////////

//////// .preventDefault() on nav items /////////////////////
navItems.addEventListener('click', (event) => {
    event.preventDefault();
});

