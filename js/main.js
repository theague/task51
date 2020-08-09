// get elements to display or hide on button click
let portraitShe = document.getElementById('tanya');
let cardTanya = document.getElementById('tanyaCard');

let portraitHe = document.getElementById('john');
let cardJohn = document.getElementById('johnCard');


// set function for clicking next
document.getElementById('next').onclick = function() {display()};

function display () {
    cardTanya.style.display = "none";
    portraitShe.style.display = "none";

    portraitHe.style.display = "block";
    cardJohn.style.display = "block";
}

// set function for clicking previous
document.getElementById('previous').onclick = function() {changeDisplay()};

function changeDisplay () {
    cardTanya.style.display = "block";
    portraitShe.style.display = "block";

    portraitHe.style.display = "none";
    cardJohn.style.display = "none";    
}