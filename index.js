// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("topnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function readInformation() {
    alert("Reading Information");
}

function readCommunication() {
    alert("Reading Communication");
}

function readActivities() {
    alert("Reading Activities");
}

function openPortal(userType) {
    alert("Opening " + userType + " portal");
}