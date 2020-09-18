
/***
 * 1.Get all the cards within container
 * 2. Create a toggle functionality
 *    By toggle I mean to hide one card and display the other
 * 3. Setup controllers in place
 *  3.1 Select controllers from the dom
 *  3.2 Add event listeners
 * 4. Improve controllers logic
 *
 * */


let currentIndex = 0;

// 1.Get all the cards within container
const cardElements = document.querySelector('#bottom').children;


// 2. Create toggle functionality
const showCard = () => {
    if (currentIndex === cardElements.length - 1) {
        cardElements[currentIndex].style.display = 'none';
        cardElements[0].style.display = 'block';
        currentIndex = 0;
        return;
    }

    cardElements[currentIndex].style.display = 'none';
    cardElements[currentIndex + 1].style.display = 'block';
    ++currentIndex;
}


// 3. Setup controllers in place
    // 3.1 Select controllers from the dom
    // 3.2 Add event listeners
    document.querySelector('.previous').onclick = () => showCard();
    document.querySelector('.next').onclick = () => showCard();



// 4. Improve controllers logic


// showCard();
// console.log('🤓');
