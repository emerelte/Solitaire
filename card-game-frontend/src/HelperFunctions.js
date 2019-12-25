export const findFontColor = (card) => {
    return card.color === 'spades' || card.color === 'clubs' ? 'black' : 'red';
};

export const createCardDeck = () => {
    let cardDeck = [];
    const listOfColors = ['spades', 'clubs', 'hearts', 'diams'];
    let i = 0;
    for (const color of listOfColors) {
        for (let val = 1; val < 14; ++val) {
            cardDeck.push({'color': color, 'value': val, 'id': i, 'hidden': true});
            ++i;
        }
    }
    return cardDeck;
};

export const shuffleArray = (arr) => {
    let j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
};

export const isHiddenCard = (card) => {
    return card.hidden;
};

