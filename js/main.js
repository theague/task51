
/***
 * 1.Get all the cards within container
 * 2. Create a toggle functionality
 *    By toggle I mean to hide one card and display the other
 * 3. Setup controllers in place
 *  3.1 Select controllers from the dom
 *  3.2 Add event listeners
 * 4. Improve controllers logic
 * TODO: Fix the image not being updated.
 * TODO: Implement ESlint int this repo.
 * */


let currentIndex = 0;

// 1.Get all the cards within container
const cardElements = document.querySelector('#bottom').children;


// 2. Create toggle functionality
const showCard = (showPrevious = false) => {
    if (showPrevious) {
        if( currentIndex === 0){
            // If so, hide first item and show the last one
            cardElements[0].style.display = 'none';
            currentIndex = cardElements.length - 1;
            cardElements[currentIndex].style.display = 'block';
            return
        }

        cardElements[currentIndex].style.display = 'none';
        cardElements[currentIndex - 1].style.display = 'block';
        --currentIndex;
        return
    }


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
    document.querySelector('.previous').onclick = () => showCard(true);
    document.querySelector('.next').onclick = () => showCard();