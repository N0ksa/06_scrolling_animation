cards = document.querySelectorAll(".card");


showCard(); // we call the function so that the first cards are visible even though we did not scroll

window.addEventListener("scroll", showCard);

function showCard(){
    const triger = window.innerHeight / 5 * 4;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triger){
            card.classList.add("show");
        }else{
            card.classList.remove("show");
        }

    })
}


//getBoundingClientReact() returns a DOMRect object providing information about te size of an element and its position relative to the viewport.