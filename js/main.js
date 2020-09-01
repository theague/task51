// get elements to display or hide on button click
let portraitShe = document.getElementById('tanya');
let cardTanya = document.getElementById('tanyaCard');

let portraitHe = document.getElementById('john');
let cardJohn = document.getElementById('johnCard');

const display = () => {
    portraitShe.style.display = "none";
    portraitHe.style.display = "block";

    cardTanya.style.display = "none";
    cardJohn.style.display = "block";
}

const changeDisplay = () => {
    portraitShe.style.display = "block";
    portraitHe.style.display = "none";

    cardTanya.style.display = "block";
    cardJohn.style.display = "none";
}
// TODO: Show you how would do it.


// Declare functions first
// Invoke them second
document.getElementById('previous').onclick = () => changeDisplay(); // removed nested function
document.getElementById('next').onclick = () => display();
