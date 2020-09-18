
/***
 * 1.Get all the cards within container
 * 2. Create a toggle functionality
 *    By toggle I mean to hide one card and display the other
 * 3. Add the controllers logic
 *     what happens when the current item is the next element of an Array
 *
 * 4. Set up the controllers in place
 *
 * */


let initialIndex = 0;

// 1.Get all the cards within container
const cardElements = document.querySelector('#bottom').children;


// 2. Create toggle functionality
const showCard = () => {
    // Hide old card
    cardElements[initialIndex].style.display = 'none';

    ++initialIndex;
    // Show new card
    cardElements[initialIndex].style.display = 'block';

    console.log('⚽️');
}


// 3. Add Controllers logic


// 4. Setup controllers in place

cardElements[0].style.display = 'block';
// showCard();
// console.log('🤓');
